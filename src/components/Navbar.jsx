import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Open Source Week 7.0", href: "#osw" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", text: "in", tone: "pink" },
  { label: "Instagram", href: "https://www.instagram.com/", text: "ig", tone: "teal" },
  { label: "Email", href: "mailto:ieee@igdtuw.ac.in", text: "@", tone: "yellow" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? "nav--open" : ""}`}>
      <a className="nav__brand" href="#top" aria-label="IEEE IGDTUW home">
        <span className="nav__ieee">IEEE</span>
        <span className="nav__dot" />
        <span className="nav__college">IGDTUW</span>
      </a>

      <button
        className="nav__burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <nav className="nav__links" aria-label="Main">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="nav__btn" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav__socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label}
             className={`nav__social nav__social--${s.tone}`} target="_blank" rel="noreferrer">
            {s.text}
          </a>
        ))}
      </div>
    </header>
  );
}
