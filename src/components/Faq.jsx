import { useState } from "react";
import { faqs } from "../data/faq.js";
import Volt from "./Volt.jsx";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec sec--mint">
      <div className="wrap faq">
        <div className="faq__mascot">
          <Volt className="faq__volt" />
          <span className="faq__sticker">Ask Volt anything.</span>
        </div>

        <div className="faq__main">
          <p className="eyebrow">MODULE 06 · HELP TERMINAL</p>
          <h2 className="h2">Frequently Asked Questions</h2>

          <div className="term">
            <div className="term__top">~/ieee-igdtuw $ help --faq</div>
            {faqs.map((f, n) => (
              <div key={f.q} className="term__row">
                <button aria-expanded={open === n} onClick={() => setOpen(open === n ? -1 : n)}>
                  <span className="term__file">~/faq_0{n + 1}.exe</span>
                  <span className="term__q">{f.q}</span>
                  <span className="term__sign">{open === n ? "–" : "+"}</span>
                </button>
                {open === n && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
