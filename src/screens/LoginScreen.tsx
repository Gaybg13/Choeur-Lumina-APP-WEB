import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";

type Mode = "login" | "register";

export function LoginScreen() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [birthdayDay, setBirthdayDay] = useState("");
  const [birthdayMonth, setBirthdayMonth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function cleanFirebaseError(err: any): string {
    const code = err?.code || "";
    if (code === "auth/invalid-credential") return "Adresse e-mail ou mot de passe incorrect.";
    if (code === "auth/email-already-in-use") return "Cette adresse e-mail possède déjà un compte.";
    if (code === "auth/weak-password") return "Le mot de passe doit contenir au moins 6 caractères.";
    if (code === "auth/invalid-email") return "L'adresse e-mail n'est pas valide.";
    if (code === "auth/network-request-failed") return "Problème de connexion Internet.";
    if (code === "auth/api-key-not-valid.-please-pass-a-valid-api-key.") {
      return "Configuration Firebase incorrecte. Recharge l'application.";
    }
    return code ? `Erreur : ${code}` : "Une erreur est survenue.";
  }

  async function login() {
    await signInWithEmailAndPassword(auth, email.trim(), password);
  }

  async function register() {
    const day = Number(birthdayDay);
    const month = Number(birthdayMonth);

    if (!inviteCode.trim()) {
      throw new Error("CODE_INVITATION_REQUIS");
    }
    if (day < 1 || day > 31 || month < 1 || month > 12) {
      throw new Error("DATE_ANNIVERSAIRE_INVALIDE");
    }

    const authResult = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );

    try {
      const memberQuery = query(
        collection(db, "members"),
        where("inviteCode", "==", inviteCode.trim()),
        where("claimed", "==", false)
      );
      const snap = await getDocs(memberQuery);

      if (snap.empty) {
        await deleteUser(authResult.user);
        await signOut(auth);
        throw new Error("CODE_INVITATION_INVALIDE");
      }

      const memberDoc = snap.docs[0];
      const role = memberDoc.data().role || "membre";

      await updateDoc(memberDoc.ref, {
        uid: authResult.user.uid,
        claimed: true,
        email: email.trim(),
        birthdayDay: day,
        birthdayMonth: month
      });

      await setDoc(doc(db, "userRoles", authResult.user.uid), {
        role
      });
    } catch (err) {
      if (auth.currentUser) {
        try {
          await deleteUser(auth.currentUser);
        } catch {
          await signOut(auth);
        }
      }
      throw err;
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      if (mode === "login") {
        await login();
      } else {
        await register();
      }
    } catch (err: any) {
      console.error("Erreur Firebase Auth :", err);

      if (err?.message === "CODE_INVITATION_REQUIS") {
        setError("Le code d'invitation est obligatoire.");
      } else if (err?.message === "CODE_INVITATION_INVALIDE") {
        setError("Code d'invitation invalide ou déjà utilisé.");
      } else if (err?.message === "DATE_ANNIVERSAIRE_INVALIDE") {
        setError("Jour ou mois d'anniversaire invalide.");
      } else {
        setError(cleanFirebaseError(err));
      }
    } finally {
      setBusy(false);
    }
  }

  function switchMode(next: Mode) {
    setMode(next);
    setError("");
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <img className="login-logo" src="/icons/icon-512.png" alt="Chœur Lumina" />
        <h1>Chœur Lumina</h1>
        <p>Notre voix, notre lumière.</p>

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => switchMode("login")}
          >
            Connexion
          </button>
          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => switchMode("register")}
          >
            Première inscription
          </button>
        </div>

        <form onSubmit={submit}>
          {mode === "register" && (
            <>
              <label>
                Code d'invitation
                <input
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  autoCapitalize="characters"
                  autoCorrect="off"
                  required
                />
              </label>

              <div className="birthday-fields">
                <label>
                  Jour de naissance
                  <input
                    inputMode="numeric"
                    value={birthdayDay}
                    onChange={(e) => setBirthdayDay(e.target.value)}
                    placeholder="18"
                    required
                  />
                </label>
                <label>
                  Mois
                  <input
                    inputMode="numeric"
                    value={birthdayMonth}
                    onChange={(e) => setBirthdayMonth(e.target.value)}
                    placeholder="8"
                    required
                  />
                </label>
              </div>
            </>
          )}

          <label>
            Adresse e-mail
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Mot de passe
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <button type="button" onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </label>

          {error && <p className="error auth-error">{error}</p>}

          <button className="primary-button" type="submit" disabled={busy}>
            {busy
              ? "Patiente..."
              : mode === "login"
                ? "Se connecter"
                : "Créer mon compte"}
          </button>
        </form>

        {mode === "register" && (
          <p className="auth-help">
            Le code d'invitation est fourni par un administrateur du Chœur Lumina.
          </p>
        )}
      </section>
    </main>
  );
}
