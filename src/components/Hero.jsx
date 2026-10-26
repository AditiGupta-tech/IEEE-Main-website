import Volt from "./Volt.jsx";

const stats = [
  { n: "230+", label: "Members", bands: ["#e8453c", "#1b1840", "#ffc93c"] },
  { n: "30+", label: "Awards", bands: ["#ffc93c", "#e8453c", "#1b1840"] },
  { n: "50+", label: "Events", bands: ["#12a89d", "#1b1840", "#e8453c"] },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="eyebrow">MAIN_BOARD · REV 20.01</p>
        <h1 className="hero__title">Welcome to IEEE IGDTUW</h1>
        <p className="hero__sub">
          Institute of Electrical and Electronics Engineers, IGDTUW Student Branch.
        </p>

        <div className="hero__cta">
          <span className="pill">POWER ON</span>
          <a className="btn btn--blue" href="#about">Explore our student branch →</a>
        </div>

        <ul className="resistors">
          {stats.map((s) => (
            <li key={s.label} className="resistor">
              <span className="resistor__lead" />
              <span className="resistor__body">
                {s.bands.map((c, i) => (
                  <i key={i} style={{ background: c }} />
                ))}
                <b>{s.n}</b>
              </span>
              <span className="resistor__lead" />
              <small>{s.label}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__visual">
        <div className="monitor">
          <div className="monitor__bar">
            <span>team_photo_2024.png</span>
            <em>LIVE</em>
          </div>
          <img src="https://picsum.photos/seed/ieee-team/760/520" alt="IEEE IGDTUW members together" />
        </div>
        <Volt className="hero__volt" />
      </div>
    </section>
  );
}
