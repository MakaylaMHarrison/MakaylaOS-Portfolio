// Hero.jsx
// User profile section with system dashboard style

import { motion } from "framer-motion"

// Props: avatarSrc = URL/path to your bio picture

export default function Hero({ avatarSrc, name = "Your Name", role = "Junior Developer" }) {
  return (
    
    // Outer container with fade-in animation
    <motion.section
      className="max-w-4xl mx-auto p-8 rounded-xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/40 shadow-[0_0_30px_rgba(0,180,255,0.15)] flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
      initial={{ opacity: 0, scale: 0.9 }}       // Start slightly smaller and invisible
      animate={{ opacity: 1, scale: 1 }}        // Fade in and scale up
      transition={{ duration: 0.6 }}
    >

      {/* Avatar */}
      <img
        src={avatarSrc}
        alt={`${name} avatar`}
        className="w-28 h-28 rounded-full border-2 border-cyan-400 shadow-lg"
      />

      {/* User info */}
      <div className="flex-1 text-center md:text-left space-y-2">

        {/* Name */}
        <motion.h1
          className="text-3xl font-bold text-cyan-400 tracking-wide"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-gray-300 font-medium"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {role}
        </motion.p>

        {/* Status line */}
        <motion.div
          className="mt-2 inline-block px-3 py-1 rounded bg-slate-800/60 border border-cyan-500 text-cyan-300 font-mono text-sm tracking-wide shadow-[0_0_10px_rgba(0,180,255,0.2)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Status: Building systems…
        </motion.div>

      </div>
    </motion.section>
  )
}