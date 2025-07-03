import { motion } from "motion/react";

export default function Features() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen w-full text-8xl font-bold"
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Features
    </motion.div>
  );
}
