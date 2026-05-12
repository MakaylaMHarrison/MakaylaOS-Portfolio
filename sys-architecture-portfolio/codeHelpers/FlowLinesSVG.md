==========================================// File: FlowLinesSVG.jsx - A component that renders an animated SVG connector line between components
// Imports 'motion' from Framer Motion to animate SVG properties like path length and offset
import { motion } from "framer-motion"

// Component receives an 'active' prop, which is a boolean (true/false) to toggle animation states
export default function FlowLinesSVG({ active }) {
  return (
    // The SVG container spans the full parent size and ignores mouse clicks (pointer-events-none)
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1000 300" // Defines the coordinate system used by the internal paths
      preserveAspectRatio="none" // Allows the SVG to stretch to fill its container
    >

      {/* Main connection path - The physical line between two points */}
      <motion.path
        // 'd' defines the path: M = Move to (150,150), C = Cubic Bezier curve with two control points
        d="M 150 150 C 350 0, 650 0, 850 150"
        // Conditional styling: turns solid 'cyan' when active, otherwise stays a faint blue
        stroke={active ? "cyan" : "rgba(0,180,255,0.3)"}
        strokeWidth={2}
        fill="none" // Ensures only the line is drawn, not the space inside the curve
        // initial and animate 'pathLength' create a "drawing" effect when the component loads
        initial={{ pathLength: 0 }} // Starts at 0% drawn
        animate={{ pathLength: 1 }} // Animates to 100% drawn
        transition={{ duration: 1.5 }} // The drawing animation takes 1.5 seconds
      />

      {/* Data packet - A small glowing circle that "travels" along the path */}
      <motion.circle
        r={4} // Radius of the circle (size of the "packet")
        fill="cyan"
        // style used for CSS-based motion path offset
        style={{ offsetDistance: "0%" }}
        // If 'active' is true, animate the packet from start (0%) to end (100%) of the path
        animate={{ offsetDistance: active ? ["0%", "100%"] : ["0%", "0%"] }}
        transition={{
          repeat: Infinity, // Loops the animation forever
          duration: 2,      // It takes 2 seconds for the packet to travel the full line
          ease: "linear"    // Moves at a constant speed without acceleration/deceleration
        }}
      />

    </svg>
  )
}
=======================================
import { motion as Motion } from "framer-motion"

export default function FlowLinesSVG({ active }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
    >
      {/* Main Connection Path */}
      <Motion.path
        id="mainPath" // Added ID so the circle can find this path
        d="M 150 150 C 350 0, 850 150 1000 150" // Closed the Bezier coordinates
        stroke={active ? "cyan" : "rgba(0,180,255,0.3)"}
        strokeWidth={2}
        fill="none"
        initial={{ pathLength: 0 }} // Fixed typo: 'initial'
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Data Packet: The circle traveling the line */}
      <Motion.circle
        r={4}
        fill="cyan"
        style={{ 
          /* CRITICAL: offsetPath tells the circle which line to follow.
             The 'path()' function takes the same coordinates as the 'd' attribute above.
          */
          offsetPath: "path('M 150 150 C 350 0, 850 150 1000 150')", 
          offsetDistance: "0%" 
        }}
        // If active, animate from 0% of the path to 100%
        animate={{ offsetDistance: active ? "100%" : "0%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear"
        }}
      />
    </svg>
  )
}