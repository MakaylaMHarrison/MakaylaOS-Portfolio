/*
====================================================================
FlowLinesSVG.jsx
====================================================================
Dual-plane vector routing engine. Remapped with fixed-width mobile 
boundary channels to guarantee true circle packet rendering.
*/

import { motion as Motion } from "framer-motion";

export default function FlowLinesSVG({ currentActiveId, mobileSegment }) {
  
  const isPathActive = (connection) => {
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

  const renderDesktopVector = (key, pathD) => {
    const isActive = isPathActive(key);
    const isUserFiltering = currentActiveId !== null;

    const strokeColor = isActive ? "#22d3ee" : "rgba(34, 211, 238, 0.15)";
    const dashArray = isActive ? "12 12" : "0 0"; 
    const dashSpeed = isActive ? 1.2 : 0; 

    let packetRadius = 5.5;          
    let packetDuration = 1.8;        
    let packetOpacity = 1.0;         
    let packetColor = "#22d3ee";     

    if (isUserFiltering && !isActive) {
      packetRadius = 3.0;            
      packetDuration = 6.0;          
      packetOpacity = 0.4;          
      packetColor = "#0e7490";       
    }

    const isDbReverse = currentActiveId === 'db' && key === 'serverDb';
    const motionRange = isDbReverse ? ["100%", "0%"] : ["0%", "100%"];

    return (
      <g key={key}>
        <Motion.path
          d={pathD}
          fill="none"
          strokeWidth={2}
          style={{ vectorEffect: "non-scaling-stroke" }}
          strokeDasharray={dashArray}
          animate={{ 
            strokeDashoffset: isActive ? [24, 0] : 0,
            stroke: strokeColor
          }}
          transition={{
            strokeDashoffset: { repeat: isActive ? Infinity : 0, duration: dashSpeed, ease: "linear" },
            stroke: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <Motion.circle
          fill={packetColor}
          style={{ offsetPath: `path('${pathD}')` }}
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
        <Motion.circle
          fill={packetColor}
          style={{ offsetPath: `path('${pathD}')` }}
          animate={{ 
            offsetDistance: motionRange,
            r: packetRadius,
            opacity: packetOpacity,
            filter: isActive ? "drop-shadow(0 0 6px #22d3ee)" : "none"
          }}
          transition={{
            offsetDistance: { repeat: Infinity, duration: packetDuration, delay: packetDuration / 2, ease: "linear" },
            default: { duration: 0.4, ease: "easeInOut" }
          }}
        />
      </g>
    );
  };

  const renderMobileSegment = (key) => {
    const isActive = isPathActive(key);
    const isUserFiltering = currentActiveId !== null;

    const strokeColor = isActive ? "#22d3ee" : "rgba(34, 211, 238, 0.2)";
    
    // Balanced dash dimensions
    const dashArray = isActive ? "6 8" : "0 0";
    
    // True geometric circle measurements
    let packetRadius = 4;
    let packetDuration = 1.6;
    let packetOpacity = 1.0;
    let packetColor = "#22d3ee";

    if (isUserFiltering && !isActive) {
      packetRadius = 2.5;
      packetDuration = 5.0;
      packetOpacity = 0.3;
      packetColor = "#0e7490";
    }

    const isDbReverse = currentActiveId === 'db' && key === 'serverDb';
    const motionRange = isDbReverse ? ["100%", "0%"] : ["0%", "100%"];
    
    // Drawn exactly on a 50px centerline
    const pathD = "M 50,0 L 50,100";

    return (
      <svg
        /* w-16 mx-auto isolates the channel width, while xMidYMid meet ensures true 1:1 scaling */
        className="w-16 h-24 pointer-events-none z-0 overflow-visible block md:hidden mx-auto"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <Motion.path
          d={pathD}
          fill="none"
          strokeWidth={3}
          strokeDasharray={dashArray}
          animate={{ 
            strokeDashoffset: isActive ? [14, 0] : 0,
            stroke: strokeColor
          }}
          transition={{
            strokeDashoffset: { repeat: isActive ? Infinity : 0, duration: 1.0, ease: "linear" },
            stroke: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <Motion.circle
          fill={packetColor}
          style={{ offsetPath: `path('${pathD}')` }}
          animate={{ 
            offsetDistance: motionRange,
            r: packetRadius,
            opacity: packetOpacity,
            filter: isActive ? "drop-shadow(0 0 4px #22d3ee)" : "none"
          }}
          transition={{
            offsetDistance: { repeat: Infinity, duration: packetDuration, ease: "linear" },
            default: { duration: 0.4, ease: "easeInOut" }
          }}
        />
      </svg>
    );
  };

  if (mobileSegment) {
    return renderMobileSegment(mobileSegment);
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      {renderDesktopVector("clientServer", "M 150,310 Q 280,310 500,110")}
      {renderDesktopVector("serverDb", "M 500,110 Q 720,310 850,310")}
      {renderDesktopVector("serverOutput", "M 500,110 L 500,600")}
      {renderDesktopVector("outputTerminal", "M 500,600 L 500,1000")}
    </svg>
  );
}
===================================
OLD CODE:
// FlowLinesSVG.jsx
// Decorative SVG lines with a highly reliable CSS-animated data packet

export default function FlowLinesSVG() {
  // Define the path geometry so we can reuse it for both the visible line and the animation track
  const pathD = "M 150 150 C 350 0, 650 0, 850 150";

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
    >
      {/* The background line track */}
      <path
        d={pathD}
        stroke="rgba(0,180,255,0.2)"
        strokeWidth="4"
        fill="none"
      />

      {/* The Data Packet Circle */}
      <circle
        r="4"
        fill="#22d3ee"
        style={{
          // Tells the browser to use this exact path geometry as the motion track
          offsetPath: `path('${pathD}')`,
          // Loops the animation smoothly along the track
          animation: "flowPacket 4s linear infinite"
        }}
      />

      {/* Injecting the keyframes directly into the SVG so it stays self-contained */}
      <style>{`
        @keyframes flowPacket {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
      `}</style>
    </svg>
  );
}