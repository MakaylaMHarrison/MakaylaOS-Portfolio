// SystemCard.jsx
// Node component with entry animation, hover glow, and heartbeat dot

import { motion } from "framer-motion"

export default function SystemCard({ title, children, activePathTrigger }) {
  return (
    <motion.div
      className="
        relative
        border border-cyan-500/40
        bg-slate-900/60
        backdrop-blur-md
        rounded-xl
        p-6
        shadow-[0_0_20px_rgba(0,180,255,0.15)]
        cursor-pointer
      "
      initial={{ opacity: 0, scale: 0.8 }}           // Fade and shrink at start
      animate={{ opacity: 1, scale: 1 }}           // Animate to full size
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 0 30px rgba(0,255,255,0.5)" }} // Glow on hover
      onMouseEnter={activePathTrigger ? () => activePathTrigger(true) : null}  // Activate path
      onMouseLeave={activePathTrigger ? () => activePathTrigger(false) : null} // Deactivate path
    >

      {/* Node title */}
      <h3 className="text-cyan-400 font-semibold mb-4 tracking-wide">
        {title}
      </h3>

      {/* Node content */}
      <div className="text-gray-300 text-sm space-y-2">
        {children}
      </div>

      {/* Heartbeat pulse dot */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

    </motion.div>
  )
}