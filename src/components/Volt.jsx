// Volt, the branch mascot. Plain SVG so it scales anywhere.
export default function Volt({ className = "", label }) {
  return (
    <svg className={className} viewBox="0 0 120 150" role="img" aria-label={label || "Volt the robot mascot"}>
      <line x1="60" y1="8" x2="60" y2="24" stroke="#1b1840" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="8" r="6" fill="#ffc93c" stroke="#1b1840" strokeWidth="3" />
      <rect x="18" y="24" width="84" height="60" rx="22" fill="#2f6bff" stroke="#1b1840" strokeWidth="4" />
      <rect x="28" y="36" width="64" height="36" rx="14" fill="#fff" stroke="#1b1840" strokeWidth="3" />
      <circle cx="46" cy="54" r="8" fill="#2f6bff" stroke="#1b1840" strokeWidth="3" />
      <circle cx="74" cy="54" r="8" fill="#2f6bff" stroke="#1b1840" strokeWidth="3" />
      <circle cx="48" cy="52" r="2.5" fill="#fff" />
      <circle cx="76" cy="52" r="2.5" fill="#fff" />
      <rect x="30" y="90" width="60" height="46" rx="14" fill="#f8f6ff" stroke="#1b1840" strokeWidth="4" />
      <path d="M64 96 L50 118 H60 L56 132 L72 108 H62 Z" fill="#ffc93c" stroke="#1b1840" strokeWidth="3" strokeLinejoin="round" />
      <rect x="6" y="94" width="14" height="26" rx="7" fill="#2f6bff" stroke="#1b1840" strokeWidth="3" />
      <rect x="100" y="94" width="14" height="26" rx="7" fill="#2f6bff" stroke="#1b1840" strokeWidth="3" />
    </svg>
  );
}
