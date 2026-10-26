export default function Footer() {
  return (
    <footer id="contact" className="foot">
      <div className="wrap foot__grid">
        <div>
          <b className="foot__brand">IEEE <i /> IGDTUW</b>
          <p>Advancing technology for humanity, one connected node at a time.</p>
        </div>
        <div>
          <h4>Find us</h4>
          <p>
            Indira Gandhi Delhi Technical University for Women,<br />
            Opp. St James Church, Kashmere Gate,<br />
            Delhi 110006
          </p>
          <p><a href="mailto:ieee@igdtuw.ac.in">ieee@igdtuw.ac.in</a></p>
        </div>
        <div>
          <h4>Quick links</h4>
          <p><a href="#about">About us</a></p>
          <p><a href="#events">Events</a></p>
          <p><a href="#team">Team</a></p>
        </div>
        <div>
          <h4>Connect</h4>
          <p><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      </div>
      <p className="foot__credit">Made by the IEEE IGDTUW web team</p>
    </footer>
  );
}
