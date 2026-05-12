// Terminal.jsx
// This component simulates a "hacker-style" terminal log with staggered text animations.

// Import the motion object from Framer Motion to enable hardware-accelerated animations.
import { motion } from "framer-motion"

// Define the main functional component. Default export allows us to import it easily elsewhere.
export default function Terminal() {
  // Static array of strings representing our terminal output lines.
  // Tip: In a real app, these might come from a prop or an API response.
  const logs = [
    "$ sys_check",
    "All systems operational...",
    "$ connect_db",
    "Connection established (5ms)",
    "$ render_ui",
    "Interface ready."
  ]

  return (
    // Outer container. The class "fade-up" likely refers to a global CSS entry animation.
    <section className="fade-up">

      {/* A bold, themed header using Tailwind CSS for typography and spacing. */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        System Status Log
      </h2>

      {/* The terminal window container. Using font-mono gives it that console look. */}
      <div
        className="
          bg-black
          font-mono
          text-green-400
          p-6
          rounded-xl
          border border-cyan-500/30
        "
      >
        {/* Map through the logs array to render each string as a separate animated paragraph. */}
        {logs.map((line, i) => (
          <motion.p
            // We use the index 'i' as a key since the list is static. 
            // Tip: Use unique IDs if the list can be reordered or deleted.
            key={i}
            // Starting state: Invisible and shifted 20px to the left.
            initial={{ opacity: 0, x: -20 }}
            // Target state: Fully visible and in its original position.
            animate={{ opacity: 1, x: 0 }}
            // Staggering effect: Each line waits 0.3s times its index before starting.
            // This creates the "typing" sequence feel.
            transition={{ delay: i * 0.3 }}
          >
            {line}
          </motion.p>
        ))}

        {/* This represents the flashing cursor at the end of the log. */}
        <motion.span
          // "animate-blink" should be defined in your tailwind.config.js or CSS.
          className="animate-blink"
          // We use inline-block to ensure transform properties and margins apply correctly.
          style={{ display: "inline-block", marginLeft: "2px" }}
        >
          |
        </motion.span>
      </div>

    </section>
  )
}