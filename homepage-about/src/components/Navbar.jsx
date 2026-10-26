import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

const links = [
  { label: "About", to: "/#about" },
  { label: "Events", to: "/" },
  { label: "Team", to: "/" },
  { label: "Open Source Week 7.0", to: "/" },
  { label: "Contact", to: "/" },
];

const socials = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/ieee-igdtuw/", bg: "bg-pink", name: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/ieeeigdtuw/", bg: "bg-aqua", name: "Instagram" },
  { icon: <MdEmail />, href: "mailto: https://igdtuieee@gmail.com", bg: "bg-sun", name: "Email" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-[92%] max-w-6xl">
      <nav className="brutal flex items-center justify-between rounded-full bg-mint px-6 py-2">
        <Link to="/">
        <img src={logo} alt="IEEE IGDTUW" className="h-8" />
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="brutal-sm rounded-lg bg-white px-3 py-1.5 font-mono text-[11px] font-bold transition hover:-translate-y-0.5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className={`brutal-sm grid h-8 w-8 place-items-center rounded-full ${s.bg} transition hover:-translate-y-1`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}