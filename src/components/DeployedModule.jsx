import React, { useState } from 'react';
import ModuleFlowLinesSVG from './ModuleFlowLinesSvg';
import Terminal from './Terminal';
import { motion as Motion, AnimatePresence } from "framer-motion";

const moduleThemes = {
  m01: {
    baseHex: '#22d3ee', // Cyan
    glowClass: 'shadow-[0_0_25px_rgba(34,211,238,0.12)]',
    borderActive: 'border-cyan-500/60',
    textAccent: 'text-cyan-400',
    bgActiveStep: 'bg-[#0c1e36]',
    borderActiveStep: 'border-cyan-500/80 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
  },
  m02: {
    baseHex: '#f59e0b', // Amber/Yellow
    glowClass: 'shadow-[0_0_25px_rgba(245,158,11,0.12)]',
    borderActive: 'border-amber-500/60',
    textAccent: 'text-amber-500',
    bgActiveStep: 'bg-[#1a1510]',
    borderActiveStep: 'border-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
  },
  m03: {
    baseHex: '#a855f7', // Purple
    glowClass: 'shadow-[0_0_25px_rgba(168,85,247,0.12)]',
    borderActive: 'border-purple-500/60',
    textAccent: 'text-purple-400',
    bgActiveStep: 'bg-[#16101c]',
    borderActiveStep: 'border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
  }
};

function HudCorners({ isActive, activeColor }) {
  const defaultStroke = "#334155";
  const strokeColor = isActive ? activeColor : defaultStroke;
  const glowStyle = isActive ? { filter: `drop-shadow(0 0 8px ${activeColor}cc)` } : {};

  return (
    <div className="absolute inset-0 pointer-events-none z-20" style={glowStyle}>
      <svg className="absolute top-0 left-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 16 2 L 2 2 L 2 16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute top-0 right-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 0 2 L 14 2 L 14 16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 16 14 L 2 14 L 2 0" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 0 14 L 14 14 L 14 0" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CustomLaserDivider({ isActive, colorHex }) {
  const dynamicHighlight = `linear-gradient(to right, transparent, ${colorHex} 20%, #ffffff 50%, ${colorHex} 80%, transparent)`;
 
  return (
    <div className="w-[97%] shrink-0 overflow-hidden relative">
      <Motion.div
        viewport={{ once: true }}
        whileInView={{
          backgroundPosition: ['0% 0%', '200% 0%']
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear"
        }}
        className={`h-[2px] mt-1.5 transition-opacity duration-300 relative ${isActive ? 'opacity-80' : 'opacity-30'}`}
        style={{
          background: dynamicHighlight,
          backgroundSize: '200% 100%'
        }}
      />
    </div>
  );
}

function MobileTerminalDrawer({ isVisible, targetId }) {
  const baseModuleId = targetId ? targetId.split('_')[0] : 'm01';
  const currentTheme = moduleThemes[baseModuleId] || moduleThemes.m01;

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <Motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full overflow-hidden lg:hidden flex flex-col items-center z-20"
        >
          {/* VERTICAL BRIDGE LINE & PACKET */}
          <svg className="w-6 h-16 -mt-1 mb-0 overflow-visible" viewBox="0 0 24 64">
            <Motion.line
              x1="12" y1="0" x2="12" y2="64"
              stroke={`${currentTheme.baseHex}40`}
              strokeWidth="2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -8]}}
              transition= {{ repeat: Infinity, duration: 0.4, ease: "linear" }}
            />
            <Motion.circle
              cx="12" cy="0" r="4" fill={currentTheme.baseHex}
              animate={{ cy: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              style={{ filter: `drop-shadow(0 0 4px ${currentTheme.baseHex})` }}
            />
          </svg>

          <div className="w-full px-2">
            <Terminal targetModuleId={targetId} />
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

const DeployedModule = () => {
  const [activePipeline, setActivePipeline] = useState(null);
  const [persistentTerminalId, setPersistentTerminalId] = useState(null);

  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  const m01Active = activePipeline?.startsWith('m01') || (!activePipeline && persistentTerminalId?.startsWith('m01'));
  const m02Active = activePipeline?.startsWith('m02') || (!activePipeline && persistentTerminalId?.startsWith('m02'));
  const m03Active = activePipeline?.startsWith('m03') || (!activePipeline && persistentTerminalId?.startsWith('m03'));

  // Unified selection handler for both mouse and mobile touch profiles
  const handleInteraction = (stepId) => {
    setActivePipeline(stepId);
    setPersistentTerminalId(stepId);
  };

  return (
    <div className="relative w-full px-4 sm:px-6 pb-8 pt-0 mt-0 font-mono text-slate-300 flex flex-col justify-between overflow-x-hidden scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="relative z-10 w-full flex-grow flex flex-col mt-0 pt-0">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div className="mb-6 pb-4 text-center max-w-3xl mx-auto w-full mt-0 pt-0 flex flex-col items-center">
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 uppercase">
              <div className="bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-bold p-2.5 rounded-md text-base hidden sm:block shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                &lt;/&gt;
              </div>
              <span>DEPLOYED_MODULES</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-1.5 px-2">
            Production-ready applications and planned architecture pipelines.
          </p>
          
          <div className="w-[95%] shrink-0 overflow-hidden relative mt-4">
            <Motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="h-[2px] opacity-50 mx-auto"
              style={{
                background: hotHighlight,
                backgroundSize: '200% 100%'
              }}
            />
          </div>
        </div>

        {/* ==================== HUD INTERFACE GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
          
          {/* ==================== MODULE 01 (CYAN) ==================== */}
          <div className="w-full flex flex-col">
            <div className="relative w-full rounded-lg border-2 border-dotted border-slate-800 bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
              <HudCorners isActive={activePipeline?.startsWith('m01')} activeColor={moduleThemes.m01.baseHex} />
              
              <div className={`flex-grow rounded-md p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 bg-transparent
                ${activePipeline?.startsWith('m01') ? `${moduleThemes.m01.glowClass} [inset_0_0_15px_rgba(34,211,238,0.03)]` : ''}`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                    <div className="flex items-center justify-between w-full mb-2 px-0.5 gap-1">
                      <div className="flex items-center space-x-1.5 truncate">
                        <span className={`w-2 h-2 rounded-full bg-cyan-400 shrink-0 ${activePipeline?.startsWith('m01') ? 'animate-pulse' : ''}`}></span>
                        <span className={`${activePipeline?.startsWith('m01') ? moduleThemes.m01.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-xs sm:text-[14px] transition-colors truncate`}>Pipeline: Active</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold shrink-0">M_01 // v1.0</span>
                    </div>
                    <CustomLaserDivider isActive={activePipeline?.startsWith('m01')} colorHex={moduleThemes.m01.baseHex} />
                  </div>

                  {/* Title & System Brief Section */}
                  <div className="mb-4">
                    <h3 className="text-white text-base text-center font-bold tracking-wide mb-2 truncate">Unexpendable</h3>
                    
                    <div className="mb-3 text-[11px] sm:text-xs text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-2 py-0.5">
                      <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> A lightweight system-modeling tool analyzing organizational behaviors under stress.
                    </div>

                    <div className="flex flex-wrap gap-1">
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Next.js</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Tailwind</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Zod</span>
                    </div>
                  </div>

                  {/* CALLOUT BANNER */}
                  <div className="relative w-full border border-cyan-500/20 bg-cyan-950/5 px-3 py-2 rounded-md my-4 text-center select-none overflow-hidden backdrop-blur-sm transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/60" />
                    <p className="font-mono text-[10px] min-[380px]:text-xs tracking-wide text-slate-400 flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 w-full text-center">
                      <span className="text-cyan-400 font-bold animate-pulse whitespace-nowrap">[SYSTEM_NOTICE]:</span> 
                      <span className="uppercase tracking-wider font-semibold text-slate-200">Tap a pipeline layer below</span>
                      <Motion.span animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="font-bold text-xs text-cyan-400 inline-block align-middle">↓</Motion.span>
                    </p>
                  </div>

                  {/* Step Matrix Blocks */}
                  <div className="space-y-2 relative flex-grow mb-4">
                    {/* Step m01_s1 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm01_s1' ? `${moduleThemes.m01.borderActiveStep} ${moduleThemes.m01.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m01_s1')}
                      onClick={() => handleInteraction('m01_s1')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm01_s1' ? moduleThemes.m01.textAccent : 'text-white'} uppercase truncate`}>01. INPUT_LAYER</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm01_s1' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>JSON</span>
                      </div>
                      <ul className={`space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 tracking-wide truncate ${activePipeline === 'm01_s1' ? 'text-slate-200' : 'text-slate-400'}`}>
                        <li>↳ <span className={activePipeline === 'm01_s1' ? 'text-cyan-300' : 'text-cyan-500/90'}>roleType_Model</span>: active</li>
                        <li>↳ <span className={activePipeline === 'm01_s1' ? 'text-cyan-300' : 'text-cyan-500/90'}>companyPhase_Model</span>: checked</li>
                      </ul>
                    </div>

                    {/* Step m01_s2 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm01_s2' ? `${moduleThemes.m01.borderActiveStep} ${moduleThemes.m01.bgActiveStep}` : 'border-cyan-500/20 bg-[#0c1e36]'}`}
                      onMouseEnter={() => handleInteraction('m01_s2')}
                      onClick={() => handleInteraction('m01_s2')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm01_s2' ? moduleThemes.m01.textAccent : 'text-cyan-400'} uppercase truncate`}>02. CLASSIFICATION_ENGINE</span>
                        <span className="text-[9px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded animate-pulse tracking-wider shrink-0">RUNNING</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-300">
                        <li>⚡ Pressure Position Mapping</li>
                        <li>⚡ Risk Matrix Analysis</li>
                      </ul>
                    </div>

                    {/* Step m01_s3 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm01_s3' ? `${moduleThemes.m01.borderActiveStep} ${moduleThemes.m01.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m01_s3')}
                      onClick={() => handleInteraction('m01_s3')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm01_s3' ? moduleThemes.m01.textAccent : 'text-white'} uppercase truncate`}>03. OUTPUT_ENGINE</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm01_s3' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-emerald-400'}`}>RENDER</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>✓ Personal System Map</li>
                        <li>✓ Role Stability Output</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Divider Row */}
                <div className="w-full mt-2 flex flex-col items-center">
                  <CustomLaserDivider isActive={activePipeline?.startsWith('m01')} colorHex={moduleThemes.m01.baseHex} />
                  <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch text-center sm:text-left text-[9px] sm:text-[10px] font-medium text-slate-500 tracking-wider mt-3 gap-1">
                    <span>NEXT.JS SERVERLESS</span>
                    <span>LATENCY: LOCALHOST</span>
                  </div>
                </div>
              </div>
            </div>
            <MobileTerminalDrawer isVisible={m01Active} targetId={persistentTerminalId} />
          </div>

          {/* ==================== MODULE 02 (AMBER) ==================== */}
          <div className="w-full flex flex-col">
            <div className="relative w-full rounded-lg border-2 border-dotted border-slate-800 bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
              <HudCorners isActive={activePipeline?.startsWith('m02')} activeColor={moduleThemes.m02.baseHex} />
              
              <div className={`flex-grow rounded-md p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 bg-transparent
                ${activePipeline?.startsWith('m02') ? `${moduleThemes.m02.glowClass} [inset_0_0_15px_rgba(245,158,11,0.03)]` : ''}`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                    <div className="flex items-center justify-between w-full mb-2 px-0.5 gap-1">
                      <div className="flex items-center space-x-1.5 truncate">
                        <span className={`w-2 h-2 rounded-full bg-amber-500 shrink-0 ${activePipeline?.startsWith('m02') ? 'animate-pulse' : ''}`}></span>
                        <span className={`${activePipeline?.startsWith('m02') ? moduleThemes.m02.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-xs sm:text-[14px] transition-colors truncate`}>Pipeline: In Queue</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold shrink-0">M_02 // v0.1</span>
                    </div>
                    <CustomLaserDivider isActive={activePipeline?.startsWith('m02')} colorHex={moduleThemes.m02.baseHex} />
                  </div>
                  
                  {/* Title & System Brief Section */}
                  <div className="mb-4">
                    <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate text-center">AI Tool // Semantic Core</h3>

                    <div className="mb-3 text-[11px] sm:text-xs text-slate-400 leading-relaxed border-l-2 border-amber-500/30 pl-2 py-0.5">
                      <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> A semantic data pipeline transforming unstructured files into highly contextual vectors.
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Node.js</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">LangChain</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">pgvector</span>
                    </div>
                  </div>

                  {/* CALLOUT BANNER */}
                  <div className="relative w-full border border-amber-500/20 bg-amber-950/5 px-3 py-2 rounded-md my-4 text-center select-none overflow-hidden backdrop-blur-sm transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/60" />
                    <p className="font-mono text-[10px] min-[380px]:text-xs tracking-wide text-slate-400 flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 w-full text-center">
                      <span className="text-amber-400 font-bold animate-pulse whitespace-nowrap">[SYSTEM_NOTICE]:</span> 
                      <span className="uppercase tracking-wider font-semibold text-slate-200">Tap a pipeline layer below</span>
                      <Motion.span animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="font-bold text-xs text-amber-400 inline-block align-middle">↓</Motion.span>
                    </p>
                  </div>

                  {/* Step Matrix Blocks */}
                  <div className="space-y-2 relative flex-grow mb-4">
                    {/* Step m02_s1 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm02_s1' ? `${moduleThemes.m02.borderActiveStep} ${moduleThemes.m02.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m02_s1')}
                      onClick={() => handleInteraction('m02_s1')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm02_s1' ? moduleThemes.m02.textAccent : 'text-white'} uppercase truncate`}>01. UNSTRUCTURED</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm02_s1' ? 'bg-amber-950 text-amber-500' : 'bg-slate-800 text-slate-400'}`}>INGEST</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>↳ raw_text_payload</li>
                        <li>↳ context_metadata</li>
                      </ul>
                    </div>

                    {/* Step m02_s2 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm02_s2' ? `${moduleThemes.m02.borderActiveStep} ${moduleThemes.m02.bgActiveStep}` : 'border-amber-500/20 bg-[#1a1510]'}`}
                      onMouseEnter={() => handleInteraction('m02_s2')}
                      onClick={() => handleInteraction('m02_s2')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm02_s2' ? moduleThemes.m02.textAccent : 'text-amber-500'} uppercase truncate`}>02. VECTOR_PIPELINE</span>
                        <span className="text-[9px] bg-amber-950 text-amber-500 px-1.5 py-0.5 rounded tracking-wider shrink-0">SCHEDULING</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>⚡ Tokenizer / Embedding</li>
                        <li>⚡ Semantic Prompt Layer</li>
                      </ul>
                    </div>

                    {/* Step m02_s3 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm02_s3' ? `${moduleThemes.m02.borderActiveStep} ${moduleThemes.m02.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m02_s3')}
                      onClick={() => handleInteraction('m02_s3')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm02_s3' ? moduleThemes.m02.textAccent : 'text-white'} uppercase truncate`}>03. OUTPUT_PROCESSOR</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm02_s3' ? 'bg-amber-950 text-amber-500' : 'bg-slate-800 text-slate-500'}`}>PENDING</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>◇ Clean JSON Entities</li>
                        <li>◇ Semantic Search Vectors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Divider Row */}
                <div className="w-full mt-2 flex flex-col items-center">
                  <CustomLaserDivider isActive={activePipeline?.startsWith('m02')} colorHex={moduleThemes.m02.baseHex} />
                  <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch text-center sm:text-left text-[9px] sm:text-[10px] font-medium text-slate-500 tracking-wider mt-3 gap-1">
                    <span>NODE / OPENAI / PGVECTOR</span>
                    <span>TARGET: STAGE_02</span>
                  </div>
                </div>
              </div>
            </div>
            <MobileTerminalDrawer isVisible={m02Active} targetId={persistentTerminalId} />
          </div>

          {/* ==================== MODULE 03 (PURPLE) ==================== */}
          <div className="w-full flex flex-col">
            <div className="relative w-full rounded-lg border-2 border-dotted border-slate-800 bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
              <HudCorners isActive={activePipeline?.startsWith('m03')} activeColor={moduleThemes.m03.baseHex} />
              
              <div className={`flex-grow rounded-md p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 bg-transparent
                ${activePipeline?.startsWith('m03') ? `${moduleThemes.m03.glowClass} [inset_0_0_15px_rgba(168,85,247,0.03)]` : ''}`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                    <div className="flex items-center justify-between w-full mb-2 px-0.5 gap-1">
                      <div className="flex items-center space-x-1.5 truncate">
                        <span className={`w-2 h-2 rounded-full bg-purple-500 shrink-0 ${activePipeline?.startsWith('m03') ? 'animate-pulse' : ''}`}></span>
                        <span className={`${activePipeline?.startsWith('m03') ? moduleThemes.m03.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-xs sm:text-[14px] transition-colors truncate`}>Status: Init Arch</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold shrink-0">M_03 // v0.1</span>
                    </div>
                    <CustomLaserDivider isActive={activePipeline?.startsWith('m03')} colorHex={moduleThemes.m03.baseHex} />
                  </div>

                  {/* Title & System Brief Section */}
                  <div className="mb-4">
                    <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate text-center">Sync Gateway // Real-Time</h3>

                    <div className="mb-3 text-[11px] sm:text-xs text-slate-400 leading-relaxed border-l-2 border-purple-500/30 pl-2 py-0.5">
                      <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> Real-time state synchronization engine built on top of Redis Pub/Sub client architecture.
                    </div>

                    <div className="flex flex-wrap gap-1">
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Socket.io</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Redis</span>
                      <span className="text-[9px] sm:text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-medium">Express</span>
                    </div>
                  </div>

                  {/* CALLOUT BANNER */}
                  <div className="relative w-full border border-purple-500/20 bg-purple-950/5 px-3 py-2 rounded-md my-4 text-center select-none overflow-hidden backdrop-blur-sm transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500/60" />
                    <p className="font-mono text-[10px] min-[380px]:text-xs tracking-wide text-slate-400 flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 w-full text-center">
                      <span className="text-purple-400 font-bold animate-pulse whitespace-nowrap">[SYSTEM_NOTICE]:</span> 
                      <span className="uppercase tracking-wider font-semibold text-slate-200">Tap a pipeline layer below</span>
                      <Motion.span animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="font-bold text-xs text-purple-400 inline-block align-middle">↓</Motion.span>
                    </p>
                  </div>

                  {/* Step Matrix Blocks */}
                  <div className="space-y-2 relative flex-grow mb-4">
                    {/* Step m03_s1 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm03_s1' ? `${moduleThemes.m03.borderActiveStep} ${moduleThemes.m03.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m03_s1')}
                      onClick={() => handleInteraction('m03_s1')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm03_s1' ? moduleThemes.m03.textAccent : 'text-white'} uppercase truncate`}>01. WS_CLIENT_POOL</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm03_s1' ? 'bg-purple-950 text-purple-400' : 'bg-slate-800 text-slate-400'}`}>SOCKET</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>↳ multi_client_events</li>
                        <li>↳ broadcast_payloads</li>
                      </ul>
                    </div>

                    {/* Step m03_s2 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm03_s2' ? `${moduleThemes.m03.borderActiveStep} ${moduleThemes.m03.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m03_s2')}
                      onClick={() => handleInteraction('m03_s2')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm03_s2' ? moduleThemes.m03.textAccent : 'text-white'} uppercase truncate`}>02. PUB_SUB_BROKER</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm03_s2' ? 'bg-purple-950 text-purple-400' : 'bg-slate-800 text-slate-400'}`}>PLANNING</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>⚡ WebSocket Gateway</li>
                        <li>⚡ Redis Pub/Sub Layer</li>
                      </ul>
                    </div>

                    {/* Step m03_s3 */}
                    <div
                      className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200 ${activePipeline === 'm03_s3' ? `${moduleThemes.m03.borderActiveStep} ${moduleThemes.m03.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                      onMouseEnter={() => handleInteraction('m03_s3')}
                      onClick={() => handleInteraction('m03_s3')}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs mb-1 font-bold">
                        <span className={`${activePipeline === 'm03_s3' ? moduleThemes.m03.textAccent : 'text-white'} uppercase truncate`}>03. CONCURRENT_SYNC</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider shrink-0 ${activePipeline === 'm03_s3' ? 'bg-purple-950 text-purple-400' : 'bg-slate-800 text-slate-500'}`}>PENDING</span>
                      </div>
                      <ul className="space-y-0.5 text-[11px] sm:text-xs list-none pl-0 mb-0 truncate text-slate-400">
                        <li>◇ Real-Time State Sync</li>
                        <li>◇ Delta Resolution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Divider Row */}
                <div className="w-full mt-2 flex flex-col items-center">
                  <CustomLaserDivider isActive={activePipeline?.startsWith('m03')} colorHex={moduleThemes.m03.baseHex} />
                  <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch text-center sm:text-left text-[9px] sm:text-[10px] font-medium text-slate-500 tracking-wider mt-3 gap-1">
                    <span> REDIS / SOCKET.IO</span>
                    <span>POOL_SIZE: SHARD_A</span>
                  </div>
                </div>
              </div>
            </div>
            <MobileTerminalDrawer isVisible={m03Active} targetId={persistentTerminalId} />
          </div>

        </div>

        {/* ==================== BRIDGE SVG LINKAGE ==================== */}
        <div className="relative w-full h-24 my-2 hidden lg:block z-0">
          <ModuleFlowLinesSVG currentActiveId={activePipeline ? activePipeline.split('_')[0] : null} />
        </div>

        {/* ==================== PERSISTENT CONSOLE VIEW ==================== */}
        <div className="relative z-10 w-full px-4 md:px-0 mt-auto hidden lg:block">
          <Terminal targetModuleId={persistentTerminalId} />
        </div>

      </div>
    </div>
  );
};

export default DeployedModule;