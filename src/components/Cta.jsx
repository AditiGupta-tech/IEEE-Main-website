import Volt from "./Volt.jsx";

export default function Cta() {
  return (
    <section className="sec sec--sky sec--tight">
      <div className="wrap">
        <div className="cta">
          <div>
            <p className="eyebrow">FINAL MODULE · OUTPUT</p>
            <h2 className="cta__title">Complete the circuit.</h2>
            <p>Connect your curiosity to a global community of engineers and makers.</p>
          </div>
          <div className="cta__side">
            <Volt className="cta__volt" />
            <a className="btn btn--pink" href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noreferrer">
              Join IEEE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
