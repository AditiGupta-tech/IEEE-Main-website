import useCountUp from "./useCountUp.js";

export default function Signal() {
  const [ref, members] = useCountUp(205);

  return (
    <section className="sec sec--sky">
      <div className="wrap">
        <p className="eyebrow">MODULE 02 · SIGNAL ANALYSER</p>
        <h2 className="h2">Watch Our Signal Grow</h2>

        <div className="scope">
          <div className="scope__top">
            <span>ch1 · members</span>
            <em>LIVE</em>
          </div>
          <div className="scope__screen">
            <svg viewBox="0 0 800 220" preserveAspectRatio="none" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <line key={"h" + i} x1="0" x2="800" y1={i * 44} y2={i * 44} className="scope__grid" />
              ))}
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <line key={"v" + i} y1="0" y2="220" x1={i * 100} x2={i * 100} className="scope__grid" />
              ))}
              <polyline
                className="scope__wave"
                points="0,120 70,120 90,118 110,60 130,170 150,30 175,200 200,110 260,112 330,112 350,108 372,40 395,190 420,70 445,125 520,122 600,122 620,115 645,20 670,200 700,95 725,122 800,120"
              />
            </svg>
            <div className="scope__count" ref={ref}>
              <small>MEMBERS</small>
              {members}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
