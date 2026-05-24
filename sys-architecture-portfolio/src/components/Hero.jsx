/*
==============================================
Hero.jsx
==============================================
This is the file for your profile bio user system panel
*/

/*
=========================================
Imports 
=========================================
*/
import avatar from "../assets/avatar.png";
import { motion as Motion } from "framer-motion";

export default function Hero({ name = "Makayla Harrison", role = "Junior Developer" }) {
  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";
  const hotHighlightVertical = "linear-gradient(to bottom, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-0 pt-0 font-mono select-none space-y-12">
      
      {/* 1. STANDALONE TOP TEXT (Main Title) */}
      <Motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-5 pt-2"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] text-white uppercase leading-none">
          SOFTWARE <span className="text-cyan-400">ENGINEER</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg tracking-[0.12em] text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed">
          Systems thinking is how you <span className="text-white font-bold tracking-[0.18em]">SEE</span>
          <span className="text-cyan-500 mx-3">•</span>
          Systems creation is how you <span className="text-cyan-400 font-bold tracking-[0.18em]">ACT</span>
          <span className="text-cyan-500 mx-3">•</span>
          Application is where they <span className="text-emerald-400 font-bold tracking-[0.18em]">MEET</span>
        </p>
      </Motion.div>

      {/* 2. SYSTEM CARD PANEL (User Info) */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group p-[1px] bg-cyan-950/30 max-w-2xl mx-auto"
      >
        {/* BORDER HIGHLIGHTS */}
        <div className="absolute top-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlight }} />
        <div className="absolute bottom-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlight }} />
        <div className="absolute top-0 left-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlightVertical }} />
        <div className="absolute top-0 right-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlightVertical }} />

        {/* GLASS PANEL BODY */}
        <div className="relative flex items-stretch bg-[#020617]/95 backdrop-blur-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="w-[35%] p-6 flex items-center justify-center relative">
            <div className="relative w-full aspect-square border border-cyan-500/40 p-1 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <img src={avatar} alt="avatar" className="w-full h-full object-cover brightness-110 contrast-125 rounded-md" />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </div>

          <div className="w-[65%] flex flex-col justify-center py-8 pr-10">
            <Motion.div initial={{ opacity: 0, x: -20}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.5, delay: 0.5 }} className="relative mb-6">
              <div className="flex items-baseline">
                <span className="text-cyan-400 uppercase text-md tracking-[0.3em] font-bold opacity-80 w-20 shrink-0">User:</span>
                <span className="text-white text-2xl font-light tracking-tight ml-2">{name}</span>
              </div>
              <Motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-[2px] mt-2 opacity-40" 
                style={{ background: hotHighlight }} 
              />
            </Motion.div>

            <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="relative mb-6">
              <div className="flex items-baseline">
                <span className="text-cyan-400 uppercase text-md tracking-[0.3em] font-bold opacity-80 w-20 shrink-0">Role:</span>
                <span className="text-slate-200 text-2xl font-light tracking-wide ml-2">{role}</span>
              </div>
              <Motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="h-[2px] mt-2 opacity-30" 
                style={{ background: hotHighlight }} 
              />
            </Motion.div>

            <Motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", delay: 1.1 }} className="flex items-center">
              <span className="text-green-500 uppercase text-sm tracking-[0.3em] font-bold opacity-80 w-20 shrink-0">Status:</span>
              <div className="flex items-baseline leading-none ml-2">
                <span className="text-green-400 text-2xl font-mono tracking-tighter whitespace-nowrap">Building Systems</span>
                <div className="flex ml-1">
                  {[0, 1, 2].map((i) => (
                    <Motion.span key={i} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} className="text-green-400">.</Motion.span>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div> 
        </div>
      </Motion.div>

      {/* 3. CENTERED ARCHITECTURE INVITATION (With matching animated divider) */}
      <Motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="text-center max-w-5xl mx-auto pt-8 mb-12 select-none uppercase"
      >
        <div className="space-y-4 mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-black tracking-[0.15em] leading-none">
            BUILDING RESILIENT SYSTEMS WITH PRECISION AND CLARITY.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-bold tracking-[0.2em]">
            VISUALIZE THE ARCHITECTURE BELOW
          </p>
        </div>

        {/* SYSTEM DIVIDER UNDER INVITATION TEXT */}
        <Motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-[2px] opacity-40 mx-auto" 
          style={{ background: hotHighlight }}
        />
      </Motion.div>

    </section>
  );
}