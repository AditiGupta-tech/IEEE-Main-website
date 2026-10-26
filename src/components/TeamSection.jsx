import TeamCard from "./TeamCard.jsx";
import { team } from "../data/teamData.js";

export default function TeamSection() {
  return (
    <section id="team" className="sec sec--lilac">
      <div className="wrap">
        <p className="eyebrow">MODULE 05 · PEOPLE PROCESSORS</p>
        <h2 className="h2 h2--big">Meet Our Team</h2>

        <div className="team__grid">
          {team.map((m, i) => (
            <TeamCard key={m.role + m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
