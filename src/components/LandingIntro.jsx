import { motion } from "framer-motion";

function LandingIntro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-sky-200 to-blue-500 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white drop-shadow-lg"
      >
        🌤️ Weather Explorer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-white/90"
      >
        Search and compare live weather across the globe
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-white/80"
      >
        Start by entering a city above 👆
      </motion.p>
    </div>
  );
}

export default LandingIntro;
