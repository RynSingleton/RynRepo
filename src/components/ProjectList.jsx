export default function ProjectList({title, children}) {

  const projects = [
    { title: "Tea Garden", img: "@/assets/tea.png", desc: "A tea timer app with animated garden." },
    { title: "Notion to GCal", img: "@/assets/calendar.png", desc: "Sync Notion databases with Google Calendar." },
    { title: "Luminescense End2End", img: '@/assets/lumi.png', desc: "Full-stack AI storytelling tool." }
  ]

  return (
    <div className="projectlist-container">
      <h3>{ title }</h3>
      <div className="projectlist-items">
        {projects.map((p, i) => (
          <div key={i} className="projectlist-item">
            {p.img && <img src={p.img} alt={p.title} className="project-image" />}
            <div className="project-text">
              <h4>{p.title}</h4>
              {p.desc && <p>{p.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
