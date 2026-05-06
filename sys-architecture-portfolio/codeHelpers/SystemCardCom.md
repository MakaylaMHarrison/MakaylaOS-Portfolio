// File: SystemCard.jsx - A functional component for a stylized, animated UI card
// Imports the 'motion' utility from Framer Motion for handling declarative animations
import { motion } from "framer-motion"

// Defines the main functional component with destructured props: title, children, and an optional callback function

export default function SystemCard({ title, children, activePathTrigger }) {
  return (
    // motion.div is a regular div enhanced with animation capabilities
    <motion.div
      // Tailwind CSS classes: position relative, semi-transparent cyan border, dark background
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
      // Defines the starting state of the component (invisible and smaller)
      initial={{ opacity: 0, scale: 0.8 }}
      // Defines the target state to animate toward when the component mounts
      animate={{ opacity: 1, scale: 1 }}
      // Sets the animation timing to last half a second
      transition={{ duration: 0.5 }}
      // Adds a dynamic box-shadow glow effect whenever the user hovers over the card
      whileHover={{ boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
      // Executes the trigger function (if provided) to signal that a hover event has started
      onMouseEnter={activePathTrigger ? () => activePathTrigger(true) : null}
      // Executes the trigger function (if provided) to signal that the hover event has ended
      onMouseLeave={activePathTrigger ? () => activePathTrigger(false) : null}
    >

      {/* Renders the card title with specific typography and bottom margin */}
      <h3 className="text-cyan-400 font-semibold mb-4 tracking-wide">
        {title}
      </h3>

      {/* Renders the nested children elements passed to the component with custom spacing */}
      <div className="text-gray-300 text-sm space-y-2">
        {children}
      </div>

      {/* A small decorative dot positioned at the top-right corner */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400"
        // Keyframes: pulses the scale and opacity in a loop to simulate a heartbeat
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        // Configures the pulse to repeat forever every 1 second
        transition={{ repeat: Infinity, duration: 1 }}
      />

    </motion.div>
  )
}