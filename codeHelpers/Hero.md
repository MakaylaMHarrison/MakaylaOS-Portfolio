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
import { useState } from "react";
import avatar from "../assets/avatar.png";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Hero({ name = "Makayla Harrison", role = "Junior Developer" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";
  const hotHighlightVertical = "linear-gradient(to bottom, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  return (
    /* ADJUSTED: Increased mobile top padding (pt-44) to guarantee clearance of the wrapped mobile navbar */
    <section className="w-full max-w-6xl mx-auto px-2 md:px-4 pb-0 pt-24 md:pt-28 font-mono select-none space-y-12">
      
      {/* 1. STANDALONE TOP TEXT (Main Title) */}
      <Motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-5 pt-2"
      >
        {/* ADJUSTED: Removed 'overflow-hidden' so text doesn't get clipped, 
           and set font sizing to start at text-2xl for ultra-small viewports */}
        <div className="w-full text-center px-2 md:px-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.1em] sm:tracking-[0.35em] text-white uppercase leading-tight md:leading-none select-none">
            SOFTWARE <span className="text-cyan-400">DEVELOPER</span>
          </h1>
        </div>

        {/* Systems operator subtitle phrase */}
        <p className="text-[10px] xs:text-xs sm:text-base md:text-lg tracking-[0.06em] sm:tracking-[0.12em] text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed px-2">
          Systems thinking is how you <span className="text-white font-bold tracking-normal sm:tracking-[0.18em]">SEE</span>
          <span className="text-cyan-500 mx-1 sm:mx-3">•</span>
          Systems creation is how you <span className="text-cyan-400 font-bold tracking-normal sm:tracking-[0.18em]">ACT</span>
          <span className="text-cyan-500 mx-1 sm:mx-3">•</span>
          Application is where they <span className="text-emerald-400 font-bold tracking-normal sm:tracking-[0.18em]">MEET.</span>
        </p>
      </Motion.div>

      {/* 2. SYSTEM CARD PANEL (User Info) */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group p-[1px] bg-cyan-950/30 max-w-2xl mx-auto w-full"
      >
        {/* BORDER HIGHLIGHTS */}
        <div className="absolute top-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlight }} />
        <div className="absolute bottom-[-1px] left-0 w-full h-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlight }} />
        <div className="absolute top-0 left-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlightVertical }} />
        <div className="absolute top-0 right-[-1px] h-full w-[2px] z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ background: hotHighlightVertical }} />

        {/* GLASS PANEL BODY */}
        <div className="relative flex flex-col bg-[#020617]/95 backdrop-blur-3xl border border-white/10 p-4 sm:p-6">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* TOP SECTION: STACKS ON MOBILE, SPLITS ON DESKTOP */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch w-full gap-6 md:gap-0">
            
            {/* AVATAR SECTION */}
            <div className="w-full max-w-[180px] md:w-[35%] relative flex flex-col justify-between gap-4">
              <div className="relative w-full aspect-square border border-cyan-500/40 p-1 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                <img src={avatar} alt="avatar" className="w-full h-full object-cover brightness-110 contrast-125 rounded-md" />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>

              {/* Action Trigger Button */}
              <div className="w-full">
                <a
                  href="/MakaylaH_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cyan-950/10 hover:bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  RESUME
                </a>
              </div>
            </div>

            {/* INFO SECTION */}
            {/* ADJUSTED: Dropped text sizes slightly on mobile (text-sm/text-base scaling up to sm:text-2xl) 
               and changed labels from w-24 to w-20 on mobile to maximize room for data */}
            <div className="w-full md:w-[65%] flex flex-col justify-between md:pl-8 space-y-4 md:space-y-0 md:py-0.5">
              
              {/* User Data Row */}
              <Motion.div initial={{ opacity: 0, x: -20}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.5, delay: 0.5 }} className="relative w-full">
                <div className="flex flex-row items-baseline">
                  <span className="text-cyan-400 uppercase text-xs sm:text-md tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-80 w-20 sm:w-24 shrink-0">User:</span>
                  <span className="text-white text-base sm:text-2xl font-light tracking-tight ml-2 break-words">{name}</span>
                </div>
                <div className="h-[2px] mt-2 opacity-50" style={{ background: hotHighlight }} />
              </Motion.div>

              {/* Location Data Row */}
              <Motion.div initial={{ opacity: 0, x: -20}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.5, delay: 0.6 }} className="relative w-full">
                <div className="flex flex-row items-baseline">
                  <span className="text-cyan-400 uppercase text-xs sm:text-md tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-80 w-20 sm:w-24 shrink-0">LOC:</span>
                  <span className="text-white text-base sm:text-2xl font-light tracking-tight ml-2">Indiana, US</span>
                </div>
                <div className="h-[2px] mt-2 opacity-50" style={{ background: hotHighlight }} />
              </Motion.div>

              {/* Role Data Row */}
              <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="relative w-full">
                <div className="flex flex-row items-baseline">
                  <span className="text-cyan-400 uppercase text-xs sm:text-md tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-80 w-20 sm:w-24 shrink-0">Role:</span>
                  <span className="text-slate-200 text-sm sm:text-2xl font-light tracking-wide ml-2">{role}</span>
                </div>
                <div className="h-[2px] mt-2 opacity-40" style={{ background: hotHighlight }} />
              </Motion.div>

              {/* Status Row */}
              <Motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", delay: 0.8 }} className="relative w-full">
                <div className="flex flex-row items-center">
                  <span className="text-green-500 uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-80 w-20 sm:w-24 shrink-0">Status:</span>
                  <div className="flex items-center leading-none ml-2 flex-nowrap">
                    <span className="text-green-400 text-sm sm:text-2xl font-mono tracking-tighter whitespace-nowrap">Building Systems</span>

                    <div className="flex ml-0.5 shrink-0">
                      {[0, 1, 2].map((index) => (
                        <Motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            delay: index * 0.15,
                            repeatDelay: 0.2,
                            ease: "easeInOut"
                          }}
                          className="text-green-400 text-sm sm:text-2xl font-mono"
                        >
                          .
                        </Motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-[2px] mt-2 opacity-30" style={{ background: hotHighlight }} />
              </Motion.div>

            </div>
          </div>

          {/* LOWER SECTION: UNIFIED ABOUT ME BLOCK WITH EXPANSION */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full font-mono mt-6 px-1"
          >
            <div className="space-y-3">
              <div className="w-full sm:w-[45%] shrink-0">
                <span className="text-cyan-400 uppercase text-xs sm:text-md tracking-[0.2em] sm:tracking-[0.3em] font-bold opacity-80 block text-left">
                  USER SYSTEM BIO:
                </span>
                <div className="h-[2px] mt-1.5 opacity-50 w-full" style={{ background: hotHighlight }} />
              </div>

              <div className="text-slate-300 text-xs sm:text-md font-mono leading-relaxed tracking-wide font-light text-left w-full pt-1">
                <p className="inline">
                  Hello, welcome! I'm MaKayla, a full-stack junior software developer based in Indianapolis, IN.{" "}
                </p>
                
                {!isExpanded && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider uppercase cursor-pointer transition-colors duration-200 ml-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Read More...
                  </button>
                )}
                
                <AnimatePresence>
                  {isExpanded && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3">
                        As a recent graduate, I approach building systems with a unique perspective: I view system 
                        architecture as a mirror to human architecture built on foundations of 
                        purpose, integrity, and growth. I love translating complex challenges 
                        into resilient digital infrastructures built to adapt, endure, and empower.
                      </p>
                      
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="mt-3 flex items-center gap-1.5 text-slate-400 hover:text-slate-300 font-bold tracking-wider uppercase cursor-pointer transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        Show Less...
                      </button>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Motion.div>

        </div> 
      </Motion.div>

      {/* 3. CENTERED ARCHITECTURE INVITATION */}
      <Motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="text-center max-w-5xl mx-auto pt-6 mb-12 select-none uppercase px-2"
      >
        <div className="space-y-4 mb-6">
          <p className="text-sm sm:text-2xl md:text-3xl text-slate-300 font-black tracking-[0.1em] sm:tracking-[0.15em] inherit leading-tight">
            BUILDING RESILIENT SYSTEMS WITH PRECISION AND CLARITY.
          </p>
          <p className="text-xs sm:text-lg md:text-xl text-slate-400 font-bold tracking-[0.15em] sm:tracking-[0.2em]">
            VISUALIZE MY TECHNICAL SKILLSET BELOW
          </p>
        </div>

        <div className="h-[2px] opacity-40 mx-auto w-full" style={{ background: hotHighlight }} />
      </Motion.div>

    </section>
  );
}