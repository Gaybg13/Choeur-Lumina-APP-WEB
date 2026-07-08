import { useState } from "react";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { enableNotifications } from "../lib/notifications";
import { Header } from "../components/Header";
import type { Member } from "../types/models";

export function ProfileScreen({
  member,
  onRefresh,
  onOpenAdmin
}: {
  member: Member | null;
  onRefresh: () => Promise<void>;
  onOpenAdmin: () => void;
}) {
  const [day, setDay] = useState(String(member?.birthdayDay || ""));
  const [month, setMonth] = useState(String(member?.birthdayMonth || ""));
  const [notice, setNotice] = useState("");

  async function saveBirthday() {
    if (!member) return;
    const d = Number(day);
    const m = Number(month);
    if (d < 1 || d > 31 || m < 1 || m > 12) {
      setNotice("Jour ou mois invalide.");
      return;
    }
    await updateDoc(doc(db, "members", member.id), {
      birthdayDay: d,
      birthdayMonth: m
    });
    setNotice("Date d'anniversaire enregistrée.");
    await onRefresh();
  }

  async function notifications() {
    const token = await enableNotifications();
    setNotice(token ? "Notifications activées sur cet appareil." : "Notifications non activées.");
  }

  return (
    <>
      <Header title="Profil" />
      <section className="screen">
        <article className="profile-card">
          <div className="big-avatar">
            {member?.photoUrl ? <img src={member.photoUrl} alt="" /> : member?.prenom?.[0]}
          </div>
          <h2>{member?.prenom} {member?.nom}</h2>
          <span>{member?.pupitre}</span>
        </article>

        <article className="card">
          <h2>Mes informations</h2>
          <p><strong>E-mail</strong><br />{member?.email}</p>
          <p><strong>Rôle</strong><br />{member?.role}</p>
        </article>

        <article className="card">
          <h2>Mon anniversaire</h2>
          <div className="birthday-fields">
            <label>Jour<input inputMode="numeric" value={day} onChange={(e) => setDay(e.target.value)} /></label>
            <label>Mois<input inputMode="numeric" value={month} onChange={(e) => setMonth(e.target.value)} /></label>
          </div>
          <button className="secondary-button" onClick={saveBirthday}>Enregistrer</button>
        </article>

        <article className="card">
          <h2>Notifications</h2>
          <p>Sur iPhone, ajoute d'abord l'application à l'écran d'accueil, puis active les notifications ici.</p>
          <button className="secondary-button" onClick={notifications}>Activer les notifications</button>
        </article>

        {member?.role === "admin" && (
          <button className="profile-admin-button" type="button" onClick={onOpenAdmin}>
            <span className="profile-admin-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6Z" /><path d="M9 12h6M12 9v6" /></svg>
            </span>
            <span><strong>Administration</strong><small>Gérer les choristes et les présences</small></span>
            <svg className="profile-admin-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        )}

        {notice && <p className="notice">{notice}</p>}
        <button className="logout-button" onClick={() => signOut(auth)}>Se déconnecter</button>
      </section>
    </>
  );
}
