import { motion as Motion } from "framer-motion";

export default function ModuleFlowLinesSVG({ currentActiveId }) {
  // ⚡ The canvas now scales fluidly from Y=0 (top of this gap) to Y=100 (bottom of this gap)
  const paths = {
    m01Terminal: "M 165,0 C 165,50 500,50 500,200", // Left Card center-bottom -> Terminal top-center
    m02Terminal: "M 500,0 L 500,200",                 // Center Card center-bottom -> Terminal top-center
    m03Terminal: "M 835,0 C 835,50 500,50 500,200"  // Right Card center-bottom -> Terminal top-center
  };

  const isPathActive = (key) => {
    if (currentActiveId === null) return true; 
    if (key === 'm01Terminal' && currentActiveId === 'm01') return true;
    if (key === 'm02Terminal' && currentActiveId === 'm02') return true;
    if (key === 'm03Terminal' && currentActiveId === 'm03') return true;
    return false;
  };

  const getPathColors = (key) => {
    switch (key) {
      case 'm01Terminal': return { active: "#22d3ee", dim: "rgba(34, 211, 238, 0.06)" }; 
      case 'm02Terminal': return { active: "#f59e0b", dim: "rgba(245, 158, 11, 0.06)" }; 
      case 'm03Terminal': return { active: "#a855f7", dim: "rgba(168, 85, 247, 0.06)" }; 
      default: return { active: "#22d3ee", dim: "rgba(34, 211, 238, 0.06)" };
    }
  };

  return (
    <svg
      // Removed hardcoded absolute pixel bounds. It now fills its layout container perfectly.
      className="w-full h-full pointer-events-none z-0 overflow-visible"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
    >
      {Object.entries(paths).map(([key, pathD]) => {
        const isActive = isPathActive(key);
        const isUserFiltering = currentActiveId !== null;
        const theme = getPathColors(key);

        const strokeColor = isActive ? theme.active : theme.dim;
        const dashArray = isActive ? "10 10" : "0 0"; 
        const dashSpeed = isActive ? 1.2 : 0; 

        let packetRadius = 5;          
        let packetDuration = 1.6;        
        let packetOpacity = isActive ? 1.0 : 0.0;         

        if (isUserFiltering && !isActive) {
          packetOpacity = 0.0; 
        }

        return (
          <g key={key}>
            {/* BACKPLANE BUS CIRCUIT */}
            <Motion.path
              d={pathD}
              fill="none"
              strokeWidth={2}
              style={{ vectorEffect: "non-scaling-stroke", transition: "stroke 0.3s ease-in-out" }}
              strokeDasharray={dashArray}
              animate={{ 
                strokeDashoffset: isActive ? [20, 0] : 0,
                stroke: strokeColor
              }}
              transition={{
                strokeDashoffset: { repeat: Infinity, duration: dashSpeed, ease: "linear" }
              }}
            />

            {/* LIGHTNING DATA PACKET A */}
            {packetOpacity > 0 && (
              <Motion.circle
                fill={theme.active}
                style={{ offsetPath: `path('${pathD}')`, motionPath: `path('${pathD}')`, transition: "none" }}
                animate={{ 
                  offsetDistance: ["0%", "100%"],
                  r: packetRadius,
                  opacity: packetOpacity,
                  filter: `drop-shadow(0 0 6px ${theme.active})`
                }}
                transition={{
                  offsetDistance: { repeat: Infinity, duration: packetDuration, ease: "linear" }
                }}
              />
            )}

            {/* LIGHTNING DATA PACKET B */}
            {packetOpacity > 0 && (
              <Motion.circle
                fill={theme.active}
                style={{ offsetPath: `path('${pathD}')`, motionPath: `path('${pathD}')`, transition: "none" }}
                animate={{ 
                  offsetDistance: ["0%", "100%"],
                  r: packetRadius,
                  opacity: packetOpacity,
                  filter: `drop-shadow(0 0 6px ${theme.active})`
                }}
                transition={{
                  offsetDistance: { 
                    repeat: Infinity, 
                    duration: packetDuration, 
                    delay: packetDuration / 2, 
                    ease: "linear" 
                  }
                }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}