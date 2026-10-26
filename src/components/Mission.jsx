const cards = [
  {
    title: "Who Are We?",
    tone: "yellow",
    text: "We are IEEE IGDTUW, the student branch of IEEE at Indira Gandhi Delhi Technical University for Women, advancing technology for humanity as part of IEEE Region 10, Delhi Section.",
  },
  {
    title: "What Drives Us?",
    tone: "pink",
    text: "Discovery, hands-on learning and the belief that shared knowledge can speed up every student's growth.",
  },
  {
    title: "Why We Do It?",
    tone: "teal",
    text: "To create equal opportunities and build technology that works for people and communities.",
  },
  {
    title: "Our Journey",
    tone: "purple",
    text: "Two decades of experiments, events and friendships, from a handful of members to a 230+ strong network.",
  },
];

export default function Mission() {
  return (
    <section className="sec mission-section">
      <div className="wrap">
       <header className="mission-header">
  <p className="mission-eyebrow">
    MODULE 03 · LOGIC ARRAY
  </p>

  <h2 className="mission-title">
    Our Aim &amp; Mission
  </h2>

  <span className="mission-header-indicator" aria-hidden="true" />
</header>

        <div className="mission">
          {cards.map((c, i) => (
            <article key={c.title} className={`mcard mcard--${c.tone}`}>
              <span className="mcard__no">0{i + 1}</span>
              <h3>{c.title}</h3>
              <span className="mcard__bar" />
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
