import { useState } from "react";

function initials(name) {
  return name.split(/[\s&,]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function TeamCard({ member, index }) {
  const [broken, setBroken] = useState(false);

  return (
    <article className={`card card--${member.ring}`}>
      <span className="card__pins card__pins--l" aria-hidden="true" />
      <span className="card__pins card__pins--r" aria-hidden="true" />

      <p className="card__tag">U{index + 1} · {member.role}</p>
      <span className={`card__led ${member.lit ? "card__led--on" : ""}`} aria-hidden="true" />

      <div className="card__avatar">
        {broken ? (
          <span>{initials(member.name)}</span>
        ) : (
          <img src={member.image} alt={member.name} loading="lazy" onError={() => setBroken(true)} />
        )}
      </div>

      <h3 className="card__name">{member.name}</h3>
      <p className="card__society">{member.society}</p>
      {member.linkedin && (
        <a className="card__link" href={member.linkedin} target="_blank" rel="noreferrer">
          say hi on LinkedIn
        </a>
      )}
    </article>
  );
}
