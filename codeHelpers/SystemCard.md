/*
=======================================================================
SystemCard.jsx
=======================================================================
*/
import React from 'react';
import { motion as Motion } from "framer-motion";

function HudCorners({ isActive }) {
  const strokeColor = isActive ? "#22d3ee" : "#334155";
  const glowStyle = isActive ? { filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.9))' } : {};
  
  return (
    /* MODIFICATION: Scaled viewBox to 224 to match the new 56rem/224px bounding box and updated coordinates */
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20" viewBox="0 0 224 224" style={glowStyle}>
      <polyline points="16,4 4,4 4,16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="208,4 220,4 220,16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="4,208 4,220 16,220" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="208,220 220,220 220,208" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SystemCard({ title, id, currentActiveId, activePathTrigger, icon: Icon, children }) {
  // STRICT HOVER STATE: Only active if explicitly hovered
  const isActive = currentActiveId === id;

  return (
    <Motion.div
      /* MODIFICATION: Increased size dimensions from w-44 h-44 to w-56 h-56 */
      className="relative w-56 h-56 rounded-lg select-none backdrop-blur-3xl transition-all duration-300 font-mono bg-transparent"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34, 211, 238, 0.25)" }}
      onMouseEnter={activePathTrigger ? () => activePathTrigger(id) : null}
      onMouseLeave={activePathTrigger ? () => activePathTrigger(null) : null}
    >
      <HudCorners isActive={isActive} />

      <div className={`absolute inset-2 rounded-md p-3 border-2 border-dotted flex flex-col items-center justify-between transition-all duration-300 bg-transparent
        ${isActive ? 'border-cyan-400/80 shadow-[inset_0_0_15px_rgba(34,211,238,0.1)]' : 'border-white/10'}`}
      >
        <div className="w-full flex flex-col items-center justify-center pt-0.5">
          <div className="flex items-center justify-between w-full mb-2 px-0.5">
            <div className="flex items-center space-x-2 min-w-0 flex-grow">
              {Icon && (
                <span className="w-4 h-4 flex-shrink-0 text-cyan-400">
                  <Icon />
                </span>
              )}
              {/* Removed truncate class completely so long layout names won't cut off */}
              <h3 className="uppercase text-md tracking-[0.12em] font-bold text-white whitespace-normal break-words leading-tight">
                {title}
              </h3>
            </div>
            
            <Motion.div
              className={`w-2.5 h-2.5 rounded-full flex-shrink-0 z-10 origin-center transition-colors duration-300 ml-1.5
                ${isActive ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,0.5)]'}`}
              animate={{ scale: isActive ? [1, 1.4, 1] : [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: isActive ? 1.0 : 2.0, ease: "easeInOut" }}
            />
          </div>
          
          <div className="relative w-full h-[1.5px] overflow-hidden bg-slate-900/60 mt-1">
            <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(to right, #22d3ee, #ffffff, transparent)" }} />
            <Motion.div 
              className={`absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent ${isActive ? 'opacity-100' : 'opacity-40'}`}
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>

        <div className="w-full flex-grow flex flex-col justify-center items-center font-mono text-sm text-white tracking-wide space-y-1.5 pt-2">
          {children}
        </div> 
      </div>
    </Motion.div>
  );
}