import { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const stats = [
  ["230+", "R1 · Members"],
  ["30+", "R2 · Awards"],
  ["50+", "R3 · Events"],
];

const words = ["Welcome", "to", "IEEE", "IGDTUW"];

export default function Hero() {
  const [on, setOn] = useState(true);

  return (
    <section className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <p className="mb-3 font-mono text-[10px] tracking-widest">
          MAIN_BOARD · REV 20.04
        </p>

        <h1
          className="font-display text-6xl font-bold leading-[0.95] text-brand md:text-7xl"
          style={{
            textShadow: on ? "0 0 18px rgba(47,91,255,.45)" : "none",
            opacity: on ? 1 : 0.55,
          }}
        >
          {words.map((w, i) => (
            <span key={w}>
              {i === 2 && <br />}
              <motion.span
                className="mr-4 inline-block"
                initial={{ opacity: 0, scale: 0.2, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 11, delay: i * 0.18 }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-md text-lg">
          Institute of Electrical and Electronics Engineers IGDTUW Student Branch.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setOn(!on)}
            className="brutal-sm flex items-center gap-2 rounded-full bg-white px-3 py-2"
          >
            <span
              className={`flex h-5 w-10 items-center rounded-full px-0.5 ${
                on ? "bg-sun" : "bg-gray-300"
              }`}
            >
              <span
                className={`h-4 w-4 rounded-full border-2 border-ink bg-white transition-transform ${
                  on ? "translate-x-5" : ""
                }`}
              />
            </span>
            <span className="font-mono text-[10px]">
              {on ? "POWER ON" : "POWER OFF"}
            </span>
          </button>

          <a
            href="#about"
            className="brutal rounded-xl bg-brand px-5 py-3 font-bold text-white transition hover:-translate-y-1"
          >
            Explore our student branch →
          </a>
        </div>

        <div className="mt-12 flex gap-4">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 1 + i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="brutal-sm relative flex h-14 w-36 items-center justify-center rounded-full bg-[#f0d79a]">
                <span className="absolute left-5 h-full w-2 bg-brand" />
                <span className="absolute left-9 h-full w-2 bg-sun" />
                <span className="absolute right-5 h-full w-2 bg-pink" />
                <span className="font-display text-xl font-bold">{value}</span>
              </div>
              <span className="mt-2 font-mono text-[9px]">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="brutal rounded-3xl bg-[#d8d2e6] p-5"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
          whileHover={{ rotate: 0 }}
        >
          <div className="mb-2 flex justify-between font-mono text-[9px]">
            <span>● IEEE_CAM_01</span>
            <span className="animate-pulse text-emerald-700">LIVE</span>
          </div>
          <img
            src={heroImg}
            alt="IEEE members"
            className="w-full rounded-[2rem] border-2 border-ink"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -left-8 text-7xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          🤖
        </motion.div>
      </div>
    </section>
  );
}