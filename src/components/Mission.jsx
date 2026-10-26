const cards = [
  {
    gate: "AND",
    gateLabel: "G1 · AND_GATE",
    heading: "Who Are We?",
    description:
      "We are IEEE IGDTUW, the dynamic student branch of IEEE at Indira Gandhi Delhi Technical University for Women, advancing technology for humanity as part of IEEE Region 10, Delhi Section.",
    switchLabel: "Who Are We switch",
    tone: "yellow",
  },
  {
    gate: "OR",
    gateLabel: "G2 · OR_GATE",
    heading: "What Drives Us?",
    description:
      "Discovery, hands-on learning and the belief that shared knowledge can accelerate every student.",
    switchLabel: "What Drives Us switch",
    tone: "pink",
  },
  {
    gate: "NOT",
    gateLabel: "G3 · NOT_GATE",
    heading: "Why We Do It?",
    description:
      "To create equitable opportunities and build technology that serves people and communities.",
    switchLabel: "Why We Do It switch",
    tone: "teal",
  },
  {
    gate: "XOR",
    gateLabel: "G4 · XOR_GATE",
    heading: "Our Journey",
    description:
      "Two decades of experiments, events and friendships—from 33 members to a 230+ strong network.",
    switchLabel: "Our Journey switch",
    tone: "purple",
  },
];

function GateIcon({ gate }) {
  switch (gate) {
    case "AND":
      return (
        <svg
          viewBox="0 0 48 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="AND logic gate icon"
          role="img"
        >
          <title>AND Gate</title>
          <line x1="3" y1="9" x2="14" y2="9" />
          <line x1="3" y1="21" x2="14" y2="21" />
          <path d="M 14 4 H 25 C 33 4 37 9 37 15 C 37 21 33 26 25 26 H 14 Z" />
          <line x1="37" y1="15" x2="45" y2="15" />
        </svg>
      );
    case "OR":
      return (
        <svg
          viewBox="0 0 48 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="OR logic gate icon"
          role="img"
        >
          <title>OR Gate</title>
          <line x1="3" y1="9" x2="15" y2="9" />
          <line x1="3" y1="21" x2="15" y2="21" />
          <path d="M 12 4 C 18 10 18 20 12 26 C 22 26 31 22 38 15 C 31 8 22 4 12 4 Z" />
          <line x1="38" y1="15" x2="45" y2="15" />
        </svg>
      );
    case "NOT":
      return (
        <svg
          viewBox="0 0 48 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="NOT logic gate icon"
          role="img"
        >
          <title>NOT Gate</title>
          <line x1="3" y1="15" x2="14" y2="15" />
          <polygon points="14,4 32,15 14,26" />
          <circle cx="35" cy="15" r="3" fill="#ffffff" />
          <line x1="38" y1="15" x2="45" y2="15" />
        </svg>
      );
    case "XOR":
      return (
        <svg
          viewBox="0 0 48 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="XOR logic gate icon"
          role="img"
        >
          <title>XOR Gate</title>
          <line x1="3" y1="9" x2="13" y2="9" />
          <line x1="3" y1="21" x2="13" y2="21" />
          <path d="M 9 4 C 15 10 15 20 9 26" />
          <path d="M 14 4 C 20 10 20 20 14 26 C 24 26 32 22 39 15 C 32 8 24 4 14 4 Z" />
          <line x1="39" y1="15" x2="45" y2="15" />
        </svg>
      );
    default:
      return null;
  }
}

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
          {cards.map((c) => (
            <article key={c.heading} className={`mcard mcard--${c.tone}`}>
              <div className="mcard__top-bar">
                <span className="mcard__gate-label">{c.gateLabel}</span>
                <span className="mcard__status-indicator" title="Output status: 1">
                  <span className="mcard__status-dot" aria-hidden="true" />
                  <span className="mcard__status-text">OUT: 1</span>
                </span>
              </div>

              <div className="mcard__gate-icon">
                <GateIcon gate={c.gate} />
              </div>

              <h3 className="mcard__heading">{c.heading}</h3>

              <p className="mcard__desc">{c.description}</p>

              {/* Static switch visual: Person 4 will connect dynamic state and click handling */}
              <div className="mcard__switch-container">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  aria-disabled="true"
                  aria-label={c.switchLabel}
                  className="mcard__switch is-active"
                  tabIndex={0}
                >
                  <span className="mcard__switch-track">
                    <span className="mcard__switch-knob" />
                  </span>
                  <span className="mcard__switch-labels" aria-hidden="true">
                    <span className="mcard__switch-label mcard__switch-label--on">ON</span>
                    <span className="mcard__switch-label mcard__switch-label--off">OFF</span>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
