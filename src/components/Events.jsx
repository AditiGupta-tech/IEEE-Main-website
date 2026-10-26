import { useState } from "react";
import { events } from "../data/events.js";

export default function Events() {
  const [i, setI] = useState(0);
  const ev = events[i];

  return (
    <section id="events" className="sec sec--sun">
      <div className="wrap">
        <p className="eyebrow">MODULE 04 · EVENT REPOSITORY</p>
        <h2 className="h2">Our Past Events</h2>

        <div className="ide">
          <div className="ide__bar">
            <span className="ide__lights"><i /><i /><i /></span>
            <span className="ide__path">ieee-igdtuw / past-events</span>
          </div>

          <div className="ide__tabs" role="tablist">
            {events.map((e, n) => (
              <button
                key={e.file}
                role="tab"
                aria-selected={n === i}
                className={n === i ? "is-on" : ""}
                onClick={() => setI(n)}
              >
                {e.file}
              </button>
            ))}
          </div>

          <div className="ide__body">
            <img src={ev.img} alt={ev.title} />
            <div>
              <h3>{ev.title}</h3>
              <p>{ev.text}</p>
              <pre className="ide__meta">
{`author:    ${ev.author}
status:    ${ev.status}
reach:     ${ev.attendees}`}
              </pre>
            </div>
          </div>
        </div>

        <aside id="osw" className="osw">
          <b>Open Source Week 7.0</b>
          <span>Our flagship open source event. Details coming soon.</span>
        </aside>
      </div>
    </section>
  );
}
