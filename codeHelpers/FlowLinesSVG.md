/*
====================================================================
FlowLinesSVG.jsx
====================================================================
Single-layer vector routing matrix. Tier logic completely removed 
to guarantee visual consistency across all path types.
*/

import { motion as Motion } from "framer-motion";

export default function FlowLinesSVG({ currentActiveId }) {
  
  const paths = {
    clientServer: "M 200,390 Q 320,390 500,110",
    serverDb: "M 500,110 Q 680,390 800,390",
    serverOutput: "M 500,110 L 500,690",
    outputTerminal: "M 500,690 L 500,950"
  }; 

  const isPathActive = (connection) => {
    // On load, all paths are active (moving dash lines)
    if (currentActiveId === null) return true;

    switch (connection) {
      case 'clientServer':
        return currentActiveId === 'client' || currentActiveId === 'server' || currentActiveId === 'output';
      case 'serverDb':
        return currentActiveId === 'db' || currentActiveId === 'server' || currentActiveId === 'output';
      case 'serverOutput':
        return currentActiveId === 'server' || currentActiveId === 'output';
      case 'outputTerminal':
        return currentActiveId === 'output';
      default:
        return false;
    }
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      {Object.entries(paths).map(([key, pathD]) => {
        const isActive = isPathActive(key);
        const isUserFiltering = currentActiveId !== null;

        // --- SINGLE LAYER STYLING ---
        // If active: Bright cyan + moving dashes. If muted: Dim blue + static solid line.
        const strokeColor = isActive ? "#22d3ee" : "rgba(34, 211, 238, 0.25)";
        const dashArray = isActive ? "12 12" : "0 0"; 
        const dashSpeed = isActive ? 1.2 : 0; 

        // Packet Kinetics
        let packetRadius = 5.5;          
        let packetDuration = 1.8;        
        let packetOpacity = 1.0;         
        let packetColor = "#22d3ee";     

        if (isUserFiltering && !isActive) {
          packetRadius = 1.8;            
          packetDuration = 6.0;          
          packetOpacity = 0.25;          
          packetColor = "#475569";       
        }

        const isDbReverse = currentActiveId === 'db' && key === 'serverDb';
        const motionRange = isDbReverse ? ["100%", "0%"] : ["0%", "100%"];

        return (
          <g key={key}>
            {/* UNIFIED SINGLE PATH LAYER */}
            <Motion.path
              d={pathD}
              fill="none"
              strokeWidth={2}
              style={{ 
                vectorEffect: "non-scaling-stroke",
                transition: "none !important"
              }}
              strokeDasharray={dashArray}
              animate={{ 
                strokeDashoffset: isActive ? [24, 0] : 0,
                stroke: strokeColor
              }}
              transition={{
                strokeDashoffset: {
                  repeat: isActive ? Infinity : 0,
                  duration: dashSpeed,
                  ease: "linear",
                },
                stroke: { duration: 0.3, ease: "easeInOut" }
              }}
            />

            {/* DATA PACKET A */}
            <Motion.circle
              fill={packetColor}
              style={{ offsetPath: `path('${pathD}')`, transition: "none !important" }}
              animate={{ 
                offsetDistance: motionRange,
                r: packetRadius,
                opacity: packetOpacity,
                filter: isActive ? "drop-shadow(0 0 6px #22d3ee)" : "none"
              }}
              transition={{
                offsetDistance: { repeat: Infinity, duration: packetDuration, ease: "linear" },
                default: { duration: 0.4, ease: "easeInOut" }
              }}
            />

            {/* DATA PACKET B */}
            <Motion.circle
              fill={packetColor}
              style={{ offsetPath: `path('${pathD}')`, transition: "none !important" }}
              animate={{ 
                offsetDistance: motionRange,
                r: packetRadius,
                opacity: packetOpacity,
                filter: isActive ? "drop-shadow(0 0 6px #22d3ee)" : "none"
              }}
              transition={{
                offsetDistance: { 
                  repeat: Infinity, 
                  duration: packetDuration, 
                  delay: packetDuration / 2, 
                  ease: "linear" 
                },
                default: { duration: 0.4, ease: "easeInOut" }
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}