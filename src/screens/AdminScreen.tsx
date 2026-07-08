import { useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { LuminaEvent, Member } from "../types/models";

type MemberDraft = {
  id?: string;
  prenom: string;
  nom: string;
  pupitre: string;
  role: string;
  inviteCode: string;
  claimed: boolean;
  uid: string;
};

const PUPITRES = ["Soprano", "Alto", "Ténor", "Basse"];

function makeInviteCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function emptyDraft(): MemberDraft {
  return {
    prenom: "",
    nom: "",
    pupitre: "Soprano",
    role: "membre",
    inviteCode: makeInviteCode(),
    claimed: false,
    uid: ""
  };
}

function roleLabel(role?: string) {
  if (role === "admin") return "Admin";
  if (role === "contributeur") return "Contributeur";
  return "Membre";
}

function responseLabel(response?: string) {
  if (response === "present") return "Présent";
  if (response === "absent") return "Absent";
  if (response === "peut-etre") return "Peut-être";
  return "Pas de réponse";
}

function responseClass(response?: string) {
  if (response === "present") return "present";
  if (response === "absent") return "absent";
  if (response === "peut-etre") return "maybe";
  return "none";
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v5M14 11v5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

export function AdminScreen({
  members,
  events,
  onBack
}: {
  members: Member[];
  events: LuminaEvent[];
  onBack: () => void;
}) {
  const [notice, setNotice] = useState("");
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [presenceModalOpen, setPresenceModalOpen] = useState(false);
  const [draft, setDraft] = useState<MemberDraft>(emptyDraft());
  const [saving, setSaving] = useState(false);
  const [createdInviteCode, setCreatedInviteCode] = useState("");

  const sortedMembers = useMemo(
    () => [...members].sort((a, b) => `${a.prenom} ${a.nom}`.localeCompare(`${b.prenom} ${b.nom}`, "fr")),
    [members]
  );

  const presenceEvents = useMemo(
    () =>
      events
        .filter((event) => event.type !== "anniversaire" && !event.id.startsWith("birthday_"))
        .sort((a, b) => (b.date?.toDate?.().getTime() || 0) - (a.date?.toDate?.().getTime() || 0)),
    [events]
  );

  function openCreateMember() {
    setNotice("");
    setDraft(emptyDraft());
    setMemberModalOpen(true);
  }

  function openEditMember(member: Member) {
    setNotice("");
    setDraft({
      id: member.id,
      prenom: member.prenom || "",
      nom: member.nom || "",
      pupitre: member.pupitre || "Soprano",
      role: member.role || "membre",
      inviteCode: member.inviteCode || makeInviteCode(),
      claimed: Boolean(member.claimed || member.uid),
      uid: member.uid || ""
    });
    setMemberModalOpen(true);
  }

  async function saveMember(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.prenom.trim() || !draft.nom.trim()) return;

    setSaving(true);
    setNotice("");

    try {
      if (draft.id) {
        await updateDoc(doc(db, "members", draft.id), {
          prenom: draft.prenom.trim(),
          nom: draft.nom.trim(),
          pupitre: draft.pupitre,
          role: draft.role,
          ...(!draft.claimed ? { inviteCode: draft.inviteCode.trim().toUpperCase() } : {})
        });

        if (draft.uid) {
          await setDoc(doc(db, "userRoles", draft.uid), { role: draft.role }, { merge: true });
        }

        setNotice("Choriste modifié.");
      } else {
        await addDoc(collection(db, "members"), {
          prenom: draft.prenom.trim(),
          nom: draft.nom.trim(),
          pupitre: draft.pupitre,
          role: draft.role,
          inviteCode: draft.inviteCode.trim().toUpperCase(),
          claimed: false,
          uid: "",
          email: "",
          createdAt: serverTimestamp()
        });
        const newCode = draft.inviteCode.trim().toUpperCase();
        setCreatedInviteCode(newCode);
        setNotice("Choriste ajouté.");
      }

      setMemberModalOpen(false);
    } catch (error) {
      console.error(error);
      setNotice("Une erreur est survenue pendant l'enregistrement.");
    } finally {
      setSaving(false);
    }
  }

  async function removeMember(member: Member) {
    const confirmed = window.confirm(
      `Supprimer la fiche de ${member.prenom} ${member.nom} ?\n\nLe compte de connexion Firebase Authentication, s'il existe, ne sera pas supprimé.`
    );
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "members", member.id));
      if (member.uid) {
        await deleteDoc(doc(db, "userRoles", member.uid));
      }
      setNotice("Fiche du choriste supprimée.");
    } catch (error) {
      console.error(error);
      setNotice("Impossible de supprimer cette fiche.");
    }
  }

  async function copyInviteCode(code?: string) {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setNotice("Code d'invitation copié.");
    } catch {
      setNotice(`Code d'invitation : ${code}`);
    }
  }

  return (
    <>
      <header className="admin-topbar">
        <button type="button" className="admin-back-button" onClick={onBack} aria-label="Retour au profil">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <strong>Administration</strong>
        <span className="admin-topbar-spacer" />
      </header>

      <section className="screen admin-screen android-admin-layout">
        <button className="presence-overview-button" type="button" onClick={() => setPresenceModalOpen(true)}>
          <span className="presence-button-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 7h8M8 11h8M8 15h5" /><rect x="4" y="3" width="16" height="18" rx="3" /></svg>
          </span>
          <span>
            <strong>Voir les réponses aux présences</strong>
            <small>Consulter les réponses des choristes par événement</small>
          </span>
          <svg className="presence-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>

        {notice && <p className="admin-notice">{notice}</p>}

        <div className="admin-members-heading">
          <div>
            <span className="admin-kicker-simple">GESTION DES CHORISTES</span>
            <h1>{members.length} choriste{members.length > 1 ? "s" : ""} enregistré{members.length > 1 ? "s" : ""}</h1>
          </div>
        </div>

        <div className="android-member-list">
          {sortedMembers.map((member) => (
            <article className="android-member-card" key={member.id}>
              <div className="android-member-card-top">
                <div className="android-member-identity">
                  <div className="admin-member-avatar" aria-hidden="true">
                    {(member.prenom?.[0] || "?").toUpperCase()}{(member.nom?.[0] || "").toUpperCase()}
                  </div>
                  <div>
                    <h2>{member.prenom} {member.nom}</h2>
                    <p>{member.pupitre} <span>·</span> {roleLabel(member.role)}</p>
                  </div>
                </div>

                <div className="android-member-actions">
                  <button type="button" onClick={() => openEditMember(member)} aria-label={`Modifier ${member.prenom} ${member.nom}`}>
                    <PencilIcon />
                  </button>
                  <button className="danger" type="button" onClick={() => removeMember(member)} aria-label={`Supprimer ${member.prenom} ${member.nom}`}>
                    <TrashIcon />
                  </button>
                </div>
              </div>

              <div className="android-member-status-row">
                {(member.claimed || member.uid) ? (
                  <span className="account-state active"><i /> Compte actif</span>
                ) : (
                  <div className="invitation-state">
                    <span className="account-state pending"><i /> En attente</span>
                    <span className="invite-code-label">Code : <strong>{member.inviteCode || "—"}</strong></span>
                    {member.inviteCode && (
                      <button type="button" className="copy-code-button" onClick={() => copyInviteCode(member.inviteCode)} aria-label="Copier le code d'invitation">
                        <CopyIcon />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <button className="admin-fab" type="button" onClick={openCreateMember} aria-label="Ajouter un choriste">+</button>
      </section>

      {memberModalOpen && (
        <div className="admin-modal-backdrop" role="presentation" onMouseDown={() => !saving && setMemberModalOpen(false)}>
          <section className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="member-dialog-title" onMouseDown={(e) => e.stopPropagation()}>
            <div className="admin-modal-head">
              <div>
                <span className="admin-kicker-simple">{draft.id ? "MODIFICATION" : "NOUVEAU MEMBRE"}</span>
                <h2 id="member-dialog-title">{draft.id ? "Modifier le choriste" : "Nouveau choriste"}</h2>
              </div>
              <button type="button" className="admin-modal-close" onClick={() => setMemberModalOpen(false)} aria-label="Fermer">×</button>
            </div>

            <form className="android-admin-form" onSubmit={saveMember}>
              <div className="admin-two-cols">
                <label>Prénom<input value={draft.prenom} onChange={(e) => setDraft({ ...draft, prenom: e.target.value })} required /></label>
                <label>Nom<input value={draft.nom} onChange={(e) => setDraft({ ...draft, nom: e.target.value })} required /></label>
              </div>

              <div className="admin-two-cols">
                <label>Pupitre
                  <select value={draft.pupitre} onChange={(e) => setDraft({ ...draft, pupitre: e.target.value })}>
                    {PUPITRES.map((pupitre) => <option key={pupitre}>{pupitre}</option>)}
                  </select>
                </label>
                <label>Rôle
                  <select value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })}>
                    <option value="membre">Membre</option>
                    <option value="contributeur">Contributeur</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
              </div>

              {!draft.claimed && (
                <label>Code d'invitation
                  <div className="admin-invite-editor">
                    <input value={draft.inviteCode} onChange={(e) => setDraft({ ...draft, inviteCode: e.target.value.toUpperCase() })} required />
                    <button type="button" onClick={() => setDraft({ ...draft, inviteCode: makeInviteCode() })}>
                      {draft.id ? "Régénérer" : "Générer"}
                    </button>
                  </div>
                </label>
              )}

              {!draft.id && <p className="admin-form-hint">Un code d'invitation est généré automatiquement pour la création du compte.</p>}

              <div className="admin-modal-actions">
                <button type="button" className="admin-cancel-button" onClick={() => setMemberModalOpen(false)}>Annuler</button>
                <button type="submit" className="admin-save-button" disabled={saving}>{saving ? "Enregistrement..." : draft.id ? "Enregistrer" : "Créer"}</button>
              </div>
            </form>
          </section>
        </div>
      )}


      {createdInviteCode && (
        <div className="admin-modal-backdrop" role="presentation" onMouseDown={() => setCreatedInviteCode("")}>
          <section className="admin-modal invite-success-modal" role="dialog" aria-modal="true" aria-labelledby="invite-success-title" onMouseDown={(e) => e.stopPropagation()}>
            <div className="invite-success-icon" aria-hidden="true">✓</div>
            <h2 id="invite-success-title">Choriste ajouté !</h2>
            <p>Transmets ce code au choriste pour qu'il crée son compte :</p>
            <strong className="invite-success-code">{createdInviteCode}</strong>
            <div className="admin-modal-actions invite-success-actions">
              <button type="button" className="admin-cancel-button" onClick={() => copyInviteCode(createdInviteCode)}>Copier</button>
              <button type="button" className="admin-save-button" onClick={() => setCreatedInviteCode("")}>Fermer</button>
            </div>
          </section>
        </div>
      )}

      {presenceModalOpen && (
        <div className="admin-modal-backdrop" role="presentation" onMouseDown={() => setPresenceModalOpen(false)}>
          <section className="admin-modal presence-modal" role="dialog" aria-modal="true" aria-labelledby="presence-dialog-title" onMouseDown={(e) => e.stopPropagation()}>
            <div className="admin-modal-head">
              <div>
                <span className="admin-kicker-simple">SUIVI DES ÉVÉNEMENTS</span>
                <h2 id="presence-dialog-title">Réponses aux présences</h2>
              </div>
              <button type="button" className="admin-modal-close" onClick={() => setPresenceModalOpen(false)} aria-label="Fermer">×</button>
            </div>

            <div className="presence-event-list">
              {presenceEvents.length === 0 ? (
                <p className="presence-empty">Aucun événement à afficher.</p>
              ) : presenceEvents.map((event) => {
                const date = event.date?.toDate?.();
                return (
                  <article className="presence-event-card" key={event.id}>
                    <div className="presence-event-head">
                      <div>
                        <h3>{event.titre}</h3>
                        <p>{date ? date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" }) : "Date non renseignée"}</p>
                      </div>
                      <span>{event.type}</span>
                    </div>

                    <div className="presence-responses">
                      {sortedMembers.map((member) => {
                        const response = event.reponses?.[member.id];
                        return (
                          <div className="presence-response-row" key={member.id}>
                            <span>{member.prenom} {member.nom}</span>
                            <strong className={`presence-response ${responseClass(response)}`}>{responseLabel(response)}</strong>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
