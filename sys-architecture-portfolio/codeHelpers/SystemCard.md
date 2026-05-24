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
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20" viewBox="0 0 176 176" style={glowStyle}>
      <polyline points="16,4 4,4 4,16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="160,4 172,4 172,16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="4,160 4,172 16,172" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <polyline points="160,172 172,172 172,160" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SystemCard({ title, id, currentActiveId, activePathTrigger, icon: Icon, children }) {
  // STRICT HOVER STATE: Only active if explicitly hovered
  const isActive = currentActiveId === id;

  return (
    <Motion.div
      className="relative w-44 h-44 rounded-lg select-none backdrop-blur-3xl transition-all duration-300 font-mono bg-transparent"
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
          <div className="flex items-center justify-between w-full mb-1.5 px-0.5">
            <div className="flex items-center space-x-1.5 min-w-0">
              {Icon && (
                <span className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  <Icon />
                </span>
              )}
              <h3 className={`uppercase text-[11px] tracking-[0.15em] font-bold transition-colors duration-300 truncate ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                {title}
              </h3>
            </div>
            <Motion.div
              className={`w-2 h-2 rounded-full flex-shrink-0 z-10 origin-center ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-slate-500/80 shadow-[0_0_4px_rgba(148,163,184,0.3)]'}`}
              animate={{ scale: isActive ? [1, 1.4, 1] : [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: isActive ? 1.0 : 2.0, ease: "easeInOut" }}
            />
          </div>
          <div className="relative w-full h-[1.5px] overflow-hidden bg-slate-900/60">
            <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(to right, #22d3ee, #ffffff, transparent)" }} />
            <Motion.div 
              className={`absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent ${isActive ? 'opacity-100' : 'opacity-40'}`}
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>
        <div className="w-full flex-grow flex flex-col justify-center items-center font-mono text-sm text-slate-300 tracking-wide space-y-1">
          {children}
        </div> 
      </div>
    </Motion.div>
  );
}