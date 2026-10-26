import Reveal from "./Reveal";

const rings = Array.from({ length: 10 });

function Rings({ side }) {
  return (
    <div
      className={`absolute top-8 flex h-[calc(100%-4rem)] flex-col justify-between ${
        side === "left" ? "-left-3" : "-right-3"
      }`}
    >
      {rings.map((_, i) => (
        <span
          key={i}
          className="block h-2 w-6 rounded-full border-2 border-ink bg-white"
        />
      ))}
    </div>
  );
}

const ieeePoints = [
  "IEEE IGDTUW began its inspiring journey as IEEE IGIT, inaugurated on February 6, 2004, with just 33 members.",
  "Now, the student branch has grown to over 200 active members, offering a vibrant community for aspiring women engineers.",
  "IEEE IGDTUW provides a wide range of platforms that allow students to host and participate in technical and non-technical events, as well as national and international conferences.",
  "Our mission is to instill technical expertise, leadership, and confidence in students through a variety of year-round events such as IEEE Week, IEEE Day Celebrations, and Student Interest Groups (SIGs).",
];

const wiePoints = [
  "At IEEE WIE IGDTUW, we aim to inspire young girls to pursue technical roles and become confident leaders.",
  "Throughout the year, we work tirelessly through various initiatives to achieve this goal, empowering the next generation of women engineers.",
  "A proud recipient of the prestigious Darrel Chong Award (Gold, 2016-17), IEEE WIE IGDTUW is recognized for its ‘Sparsh Outreach Program’.",
  "Through Sparsh, volunteers regularly visit the Kilkari orphanage to mentor and inspire the girls, sharing experiences that go beyond academics.",
  "These meaningful connections help build growth, confidence, and inspiration on both sides, and we are committed to continuing such impactful efforts in the future.",
];

function Bullets({ items }) {
  return (
    <ul className="mt-6 space-y-3 text-sm leading-relaxed">
      {items.map((p) => (
        <li key={p} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Unveiling() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t-2 border-ink bg-paper py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[10px] tracking-widest text-brand">
          MODULE 01 · DUAL PROCESSOR
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Unveiling Our Student
          <br />
          Branch &amp; Chapter
        </h2>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-2">
          {/* Card 1: IEEE IGDTUW */}
          <Reveal
            from="left"
            className="brutal relative rounded-3xl bg-lilac p-8 pb-10"
          >
            <Rings side="left" />
            <Rings side="right" />
            <p className="font-mono text-[10px]">U1 · IEEE_IGDTUW</p>
            <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
              IEEE IGDTUW
              <br />
              Student Branch
            </h3>
            <p className="mt-5 text-base font-medium italic leading-relaxed">
              “We aim to foster innovation and technical excellence among young
              engineers, promoting socially responsible advancements that
              contribute to a globally competitive India.”
            </p>
            <Bullets items={ieeePoints} />
          </Reveal>

          {/* Card 2: WIE IGDTUW */}
          <Reveal
            from="right"
            delay={0.15}
            className="brutal relative rounded-3xl bg-aqua p-8 pb-10"
          >
            <Rings side="left" />
            <Rings side="right" />
            <p className="font-mono text-[10px]">U2 · WIE_IGDTUW</p>

            <div className="absolute right-6 top-5 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full border-2 border-ink bg-sun" />
              <span className="font-mono text-[7px] leading-tight">
                Darrel Chong Award
                <br />
                GOLD · 2016-17
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
              WIE
              <br />
              IGDTUW
            </h3>
            <Bullets items={wiePoints} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}