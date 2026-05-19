/*
==============================================
Hero.jsx
==============================================
This is the file for your profile bio user system panel
REDO THIS FILE TO UNDERSTAND <--
*/

/*
=========================================
Imports
=========================================
*/
import avatar from "../assets/avatar.png";
import { motion as Motion } from "framer-motion";

export default function Hero({ name = "Makayla Harrison", role = "Junior Developer" }) {
  // Define the complex highlight string to reuse it for all 4 sides
  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";
  const hotHighlightVertical = "linear-gradient(to bottom, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  return (
    <Motion.section
      className="max-w-2xl mx-auto p-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative group p-[1px] bg-cyan-950/30">
        
        {/* 1. LAYERED BORDER HIGHLIGHTS (The Cyan-White-Cyan transition) */}
        {/* Top Rail */}
        <div 
          className="absolute top-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
          style={{ background: hotHighlight }}
        />
        {/* Bottom Rail */}
        <div 
          className="absolute bottom-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
          style={{ background: hotHighlight }}
        />
        {/* Left Rail */}
        <div 
          className="absolute top-0 left-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
          style={{ background: hotHighlightVertical }}
        />
        {/* Right Rail */}
        <div 
          className="absolute top-0 right-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
          style={{ background: hotHighlightVertical }}
        />

        {/* 2. GLASS PANEL BODY */}
        <div className="relative flex items-stretch bg-[#020617]/95 backdrop-blur-3xl overflow-hidden border border-white/10">
          
          {/* Subtle Grid Overlay (Matches the target's background texture) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* AVATAR SECTION */}
          <div className="w-[35%] p-6 flex items-center justify-center relative">
            <div className="relative w-full aspect-square border border-cyan-500/40 p-1 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover brightness-110 contrast-125 rounded-sm"
              />
              {/* Inner frame glow */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="w-[65%] flex flex-col justify-center py-8 pr-10 font-mono">
            
            {/* User Data Row */}
            <div className="relative mb-8 group/row">
              <div className="flex items-baseline space-x-4">
                <span className="text-cyan-400 uppercase text-md tracking-[0.3em] font-bold opacity-80">User:</span>
                <span className="text-white text-2xl font-light tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {name}
                </span>
              </div>
              {/* Data underline - also uses the cyan-white-cyan logic */}
              <div 
                className="h-[1px] w-full mt-2 opacity-40" 
                style={{ background: "linear-gradient(to right, #22d3ee, #ffffff, transparent)" }}
              />
            </div>

            {/* Role Data Row */}
            <div className="relative mb-6">
              <div className="flex items-baseline space-x-4">
                <span className="text-cyan-400 uppercase text-md tracking-[0.3em] font-bold opacity-80">Role:</span>
                <span className="text-slate-200 text-2xl font-light tracking-wide">
                  {role}
                </span>
              </div>
              <div 
                className="h-[1px] w-full mt-2 opacity-30" 
                style={{ background: "linear-gradient(to right, #22d3ee, #ffffff, transparent)" }}
              />
            </div>

           {/* Status Row */}
<div className="flex items-center space-x-4">
  <span className="text-green-500 uppercase text-md tracking-[0.3em] font-bold opacity-80">
    Status:
  </span>

  <div className="flex items-end space-x-2 leading-none">
    {/* Font size matches your 'Role' (text-2xl) and mono font stack */}
    <span className="text-green-400 text-2xl  font-mono tracking-tighter">
      Building Systems...
    </span>

    {/* THE TRIANGLE: 
        - translate-y-[2px] aligns the top edge with the center of the three dots
        - cursor-pointer makes it feel like a menu "more" button
    */}
    <Motion.div
      animate={{ opacity: [1, 0, 1] }}
      transition={{ 
        repeat: Infinity, 
        duration: 0.8, 
        ease: "steps(2)" 
      }}
      className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-green-500 translate-y-[-4px] cursor-pointer hover:border-t-white transition-colors"
      title="More Options"
    />
  </div>
</div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
}