import { motion } from "framer-motion";

const offsets = {
  bottom: { y: 60 },
  left: { x: -70 },
  right: { x: 70 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 14, delay },
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}