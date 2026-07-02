/*
=======================================================================
SystemCard.jsx
=======================================================================
Core display element component handling micro-animations, interaction
triggers, fluid HUD boundaries, and global system path lighting.
*/

import React from 'react';
import { motion as Motion } from "framer-motion";

/**
 * HudCorners: Renders responsive corner bracket overlays.
 * Uses percentage positions to stay perfectly locked to the edges 
 * even if the card changes dimensions between mobile stacks and desktop grids.
 */
function HudCorners({ isActive }) {
  const strokeColor = isActive ? "#22d3ee" : "#334155";
  const glowStyle = isActive ? { filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.9))' } : {};
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20" viewBox="0 0 100 100" preserveAspectRatio="none" style={glowStyle}>
      <path d="M 6,2 L 2,2 L 2,6" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d="M 94,2 L 98,2 L 98,6" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d="M 2,94 L 2,98 L 6,98" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d="M 94,98 L 98,98 L 98,94" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function SystemCard({ title, id, currentActiveId, activePathTrigger, icon: Icon, children }) {
  const isActive = currentActiveId === id;
  const isAnyActive = currentActiveId !== null;
  const isDimmed = isAnyActive && !isActive;

  const handleInteractionStart = () => activePathTrigger && activePathTrigger(id);
  const handleInteractionEnd = () => activePathTrigger && activePathTrigger(null);

  return (
    <Motion.div
      className={`relative w-full max-w-sm md:w-full min-h-[14rem] md:h-56 rounded-lg select-none backdrop-blur-3xl transition-all duration-300 font-mono bg-slate-950/40
        ${isDimmed ? 'opacity-30 filter grayscale-[30%]' : 'opacity-100'}
      `}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34, 211, 238, 0.2)" }}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
    >
      <HudCorners isActive={isActive} />

      <div className={`absolute inset-2 rounded-md p-4 border-2 border-dotted flex flex-col items-center justify-between transition-all duration-300 bg-slate-900/10
        ${isActive ? 'border-cyan-400/80 shadow-[inset_0_0_15px_rgba(34,211,238,0.1)]' : 'border-white/10'}`}
      >
        {/* HEADER BLOCK: Formatted using a strict 3-column structural layout grid */}
        <div className="w-full flex flex-col items-center justify-center pt-0.5">
          <div className="grid grid-cols-[16px_1fr_16px] items-center w-full mb-1">
            
            {/* 1. Left Column: Icon Slot */}
            <div className="flex items-center justify-start">
              {Icon && (
                <span className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 flex items-center justify-center">
                  <Icon />
                </span>
              )}
            </div>

            {/* 2. Center Column: Component Title */}
            <div className="flex items-center justify-center text-center px-1 overflow-hidden">
              <h3 className="uppercase text-xs lg:text-sm tracking-[0.05em] font-bold text-white whitespace-nowrap leading-tight">
                {title}
              </h3>
            </div>
            
            {/* 3. Right Column: Pulsing Status Beacon */}
            <div className="flex items-center justify-end">
              <Motion.div
                className={`w-2 h-2 rounded-full flex-shrink-0 z-10 transition-colors duration-300
                  ${isActive ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,0.5)]'}`}
                animate={{ scale: isActive ? [1, 1.3, 1] : [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
              />
            </div>

          </div>
          
          {/* Scanning Node Pipeline Divider Line */}
          <div className="relative w-full h-[1.5px] overflow-hidden bg-slate-800/60 mt-2">
            <div className="absolute inset-0 opacity-60" style={{ background: "linear-gradient(to right, #22d3ee, #ffffff, transparent)" }} />
            <Motion.div 
              className={`absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent ${isActive ? 'opacity-100' : 'opacity-40'}`}
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </div>
        </div>

        {/* CONTENT BLOCK: Data Payload Viewports */}
        <div className="w-full flex-grow flex flex-col justify-center items-center font-mono text-xs lg:text-sm text-white tracking-wide space-y-2 pt-3">
          {children}
        </div> 
      </div>
    </Motion.div>
  );
}

===================================
OLD CODE:
// SystemCard.jsx
// Represents a single card in the architecture diagram

export default function SystemCard({ title, children }) {
  return (
    // Card wrapper: border, translucent background, blur effect, rounded corners, padding, subtle shadow
    <div
      className="
        border border-cyan-500/40       /* cyan border with 40% opacity */
        bg-slate-900/90                /* slightly darker for text contrast  */
        rounded-xl                      /* rounded corners */
        p-6                             /* padding */
        shadow-[0_0_20px_rgba(0,180,255,0.15)] /* soft glow shadow */
        z-10                              /* ensures text layers stay on top */

        /* Interactive Hover */
        hover:border-cyan-400          /* brights the border on hover */
        hover:hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] /* amplifies the cyan glow */
        hover:-translate-y-1            /* subtle micro-interaction lift */

        /* Smooth Animation Transitions */
        transition-all 
        duration-300 
        ease-out
      "
    >
      {/* Card title */}
      <h3 className="text-cyan-400 font-semibold mb-4 tracking-wide">
        {title}
      </h3>

      {/* Card content: text children inside with spacing */}
      <div className="text-gray-300 text-sm space-y-2">
        {children}
      </div>
    </div>
  )
}