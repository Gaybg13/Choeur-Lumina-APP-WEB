import type { Member, LuminaEvent, Song } from "../types/models";

function formatEventDate(event: LuminaEvent) {
  const date = event.date?.toDate();
  if (!date) return "Date à préciser";
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function formatEventTime(event: LuminaEvent) {
  const date = event.date?.toDate();
  if (!date) return "";
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

export function HomeScreen({
  member,
  nextEvent,
  songs,
  onOpen
}: {
  member: Member | null;
  nextEvent: LuminaEvent | null;
  songs: Song[];
  onOpen: (tab: "songs" | "agenda" | "messages") => void;
}) {
  const heroImageSrc = new URL("choeur-lumina-groupe-hero.jpg", document.baseURI).toString();
  const logoSrc = new URL("icons/icon-192.png", document.baseURI).toString();

  return (
    <section className="screen home-screen home-screen-v24">
      <div className="welcome-row home-welcome-compact">
        <div className="brand-inline">
          <img src={logoSrc} alt="Logo" />
          <div>
            <span>Chœur Lumina</span>
            <h1>Bonjour {member?.prenom || "à toi"}</h1>
            {member?.pupitre && <small className="home-pupitre-subline">{member.pupitre}</small>}
          </div>
        </div>
        <span className="wave home-welcome-wave" aria-hidden="true">👋</span>
      </div>

      <div className="choir-photo-hero">
        <img src={heroImageSrc} alt="Photo du Chœur Lumina" />
        <div className="choir-photo-overlay">
          <span>CHŒUR LUMINA</span>
          <strong>Ensemble, une même voix.</strong>
        </div>
      </div>

      <div className="shortcut-grid home-shortcuts-compact">
        <button onClick={() => onOpen("songs")}>♫<span>Répertoire</span></button>
        <button onClick={() => onOpen("agenda")}>▣<span>Agenda</span></button>
        <button onClick={() => onOpen("messages")}>✉<span>Messages</span></button>
      </div>

      <div className="home-dashboard-grid">
        <article className="card home-event-card">
          <div className="home-card-heading">
            <h2>Prochain événement</h2>
            {nextEvent && (
              <span className={`event-chip ${nextEvent.cancelled ? "cancelled" : ""}`}>
                {nextEvent.cancelled ? "Annulé" : nextEvent.type}
              </span>
            )}
          </div>
          {nextEvent ? (
            <div className="home-event-body">
              <h3>{nextEvent.titre}</h3>
              <p>
                <strong>{formatEventDate(nextEvent)}</strong>
                {formatEventTime(nextEvent) && <span> · {formatEventTime(nextEvent)}</span>}
              </p>
              {nextEvent.lieu && <small>{nextEvent.lieu}</small>}
            </div>
          ) : (
            <p>Aucun événement à venir.</p>
          )}
        </article>

        <article className="card home-songs-card">
          <h2>Derniers chants ajoutés</h2>
          <div className="home-song-list">
            {songs.slice(0, 3).map((song) => (
              <div className="home-song-row" key={song.id}>
                <span className="home-song-icon">♫</span>
                <div>
                  <strong>{song.titre}</strong>
                  {song.compositeur && <small>{song.compositeur}</small>}
                </div>
                <span className={song.appris ? "status-ok" : "status-work"}>
                  {song.appris ? "Appris" : "À travailler"}
                </span>
              </div>
            ))}
            {songs.length === 0 && <p>Aucun chant pour l'instant.</p>}
          </div>
        </article>
      </div>
    </section>
  );
}
