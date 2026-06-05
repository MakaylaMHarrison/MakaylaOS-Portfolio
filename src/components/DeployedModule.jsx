import React, { useState } from 'react';
import ModuleFlowLinesSVG from './ModuleFlowLinesSVG';
import Terminal from './Terminal';
import { motion as Motion } from "framer-motion";

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
          ease:"linear" 
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

const DeployedModule = () => {
  const [activePipeline, setActivePipeline] = useState(null);
  const [persistentTerminalId, setPersistentTerminalId] = useState(null);

  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  return (
    <div className="relative w-full px-6 pb-8 pt-0 mt-0 font-mono text-slate-300 flex flex-col justify-between">
      <div className="relative z-10 w-full flex-grow flex flex-col mt-0 pt-0">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div className="mb-6 pb-4 text-center max-w-3xl mx-auto w-full mt-0 pt-0 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 uppercase">
              <div className="bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-bold p-3 rounded-md text-xl hidden sm:block shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                &lt;/&gt;
              </div>
              <span className="text-cyan-500"></span> DEPLOYED_MODULES
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1.5">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* ==================== MODULE 01 (CYAN) ==================== */}
          {(() => {
            const isCardActive = activePipeline?.startsWith('m01');
            const theme = moduleThemes.m01;
            return (
              <div className="relative w-full rounded-lg bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
                <HudCorners isActive={isCardActive} activeColor={theme.baseHex} />
                
                <div className={`flex-grow rounded-md p-4 border-2 border-dotted flex flex-col justify-between transition-all duration-300 bg-transparent
                  ${isCardActive ? `${theme.borderActive} ${theme.glowClass} [inset_0_0_15px_rgba(34,211,238,0.03)]` : 'border-white/10'}`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                      <div className="flex items-center justify-between w-full mb-2 px-0.5">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full bg-cyan-400 ${isCardActive ? 'animate-pulse' : ''}`}></span>
                          <span className={`${isCardActive ? theme.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-[15px] transition-colors`}>Pipeline:Active</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold">M_01 // v1.0</span>
                      </div>
                      <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    </div>

                    {/* Title & System Brief Section */}
                    <div className="mb-4">
                      <h3 className="text-white text-base text-center font-bold tracking-wide mb-2 truncate">Unexpendable </h3>
                      
                      {/* SYSTEM BRIEF DESIGN BLOCK */}
                      <div className="mb-3 text-xs text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-2.5 py-0.5">
                        <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> A lightweight system-modeling tool that models organizational behavior under stress. The app analyzes a user’s workplace scenario processing company phases, roles, and pressure points to generate a personalized map and repositioning playbook.
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Next.js</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Tailwind</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Zod</span>
                      </div>
                    </div>

                    {/* Step Matrix Blocks */}
                    <div className="space-y-2.5 relative flex-grow mb-4">
                      
                      {/* Step 01 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm01_s1' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m01_s1'); setPersistentTerminalId('m01_s1'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm01_s1' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>01.  INPUT_LAYER</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm01_s1' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>JSON</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm01_s1' ? 'text-slate-200' : 'text-slate-400'}`}>
                          <li>↳ <span className={activePipeline === 'm01_s1' ? 'text-cyan-300' : 'text-cyan-500/90'}>roleType_Model</span>: active</li>
                          <li>↳ <span className={activePipeline === 'm01_s1' ? 'text-cyan-300' : 'text-cyan-500/90'}>companyPhase_Model</span>: checked</li>
                        </ul>
                      </div>

                      {/* Step 02 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm01_s2' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-cyan-500/20 bg-[#0c1e36]'}`}
                        onMouseEnter={() => { setActivePipeline('m01_s2'); setPersistentTerminalId('m01_s2'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm01_s2' ? theme.textAccent : 'text-cyan-400'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>02. CLASSICATION_ENGINE</span>
                          <span className="text-[9px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded animate-pulse tracking-wider">RUNNING</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm01_s2' ? 'text-slate-200' : 'text-slate-300'}`}>
                          <li>⚡ Pressure Position Mapping</li>
                          <li>⚡ Risk Matrix & Behavior </li>
                        </ul>
                      </div>

                      {/* Step 03 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm01_s3' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m01_s3'); setPersistentTerminalId('m01_s3'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm01_s3' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>03. OUTPUT_ENGINE</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm01_s3' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-emerald-400'}`}>RENDER</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm01_s3' ? 'text-slate-200' : 'text-slate-400'}`}>
                          <li>✓ Personal System Map</li>
                          <li>✓ Role Stability</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Divider Row */}
                  <div className="w-full mt-2 flex flex-col items-start">
                    <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    <div className="w-full flex justify-between text-[10px] font-medium text-slate-500 tracking-wider mt-3">
                      <span>NEXT.JS SERVERLESS</span>
                      <span>LATENCY: LOCALHOST</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ==================== MODULE 02 (AMBER/YELLOW) ==================== */}
          {(() => {
            const isCardActive = activePipeline?.startsWith('m02');
            const theme = moduleThemes.m02;
            return (
              <div className="relative w-full rounded-lg bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
                <HudCorners isActive={isCardActive} activeColor={theme.baseHex} />
                
                <div className={`flex-grow rounded-md p-4 border-2 border-dotted flex flex-col justify-between transition-all duration-300 bg-transparent
                  ${isCardActive ? `${theme.borderActive} ${theme.glowClass} [inset_0_0_15px_rgba(245,158,11,0.03)]` : 'border-white/10'}`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                      <div className="flex items-center justify-between w-full mb-2 px-0.5">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full bg-amber-500 ${isCardActive ? 'animate-pulse' : ''}`}></span>
                          <span className={`${isCardActive ? theme.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-[15px] transition-colors`}>Pipeline:In Queue</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold">M_02 // v0.1</span>
                      </div>
                      <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    </div>
                    
                    {/* Title & System Brief Section */}
                    <div className="mb-4">
                      <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate">AI Tool // Semantic Core</h3>

                       {/* SYSTEM BRIEF DESIGN BLOCK */}
                      <div className="mb-3 text-xs text-slate-400 leading-relaxed border-l-2 border-amber-500/30 pl-2.5 py-0.5">
                        <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> A semantic data pipeline that transforms unstructured text into vector-based search. By leveraging LLM workflows and embedding schemas, it parses raw data to extract clean JSON entities and generate semantic vectors for production retrieval.
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Node.js</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">LangChain</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">pgvector</span>
                      </div>
                    </div>

                    {/* Step Matrix Blocks */}
                    <div className="space-y-2.5 relative flex-grow mb-4">
                      
                      {/* Step 01 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm02_s1' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m02_s1'); setPersistentTerminalId('m02_s1'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm02_s1' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>01. UNSTRUCTURED </span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm02_s1' ? 'bg-amber-950 text-amber-500' : 'bg-slate-800 text-slate-400'}`}>INGEST</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm02_s1' ? 'text-slate-200' : 'text-slate-500'}`}>
                          <li>↳ raw_text_payload</li>
                          <li>↳ context_metadata</li>
                        </ul>
                      </div>

                      {/* Step 02 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm02_s2' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-amber-500/20 bg-[#1a1510]'}`}
                        onMouseEnter={() => { setActivePipeline('m02_s2'); setPersistentTerminalId('m02_s2'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm02_s2' ? theme.textAccent : 'text-amber-500'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>02. VECTOR_PIPELINE </span>
                          <span className="text-[9px] bg-amber-950 text-amber-500 px-1.5 py-0.5 rounded tracking-wider">SCHEDULING</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm02_s2' ? 'text-slate-200' : 'text-slate-400'}`}>
                          <li>⚡ Tokenizer / Embedding</li>
                          <li>⚡ Semantic Prompt Layer</li>
                        </ul>
                      </div>

                      {/* Step 03 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm02_s3' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m02_s3'); setPersistentTerminalId('m02_s3'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm02_s3' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>03. OUTPUT_PROCESSOR </span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm02_s3' ? 'bg-amber-950 text-amber-500' : 'bg-slate-800 text-slate-500'}`}>PENDING</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm02_s3' ? 'text-slate-200' : 'text-slate-500'}`}>
                          <li>◇ Clean JSON Entities</li>
                          <li>◇ Semantic Search Vectors</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Divider Row */}
                  <div className="w-full mt-2 flex flex-col items-start">
                    <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    <div className="w-full flex justify-between text-[10px] font-medium text-slate-500 tracking-wider mt-3">
                      <span>NODE / OPENAI / PGVECTOR</span>
                      <span>TARGET: STAGE_02</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ==================== MODULE 03 (PURPLE) ==================== */}
          {(() => {
            const isCardActive = activePipeline?.startsWith('m03');
            const theme = moduleThemes.m03;
            return (
              <div className="relative w-full rounded-lg bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col z-10">
                <HudCorners isActive={isCardActive} activeColor={theme.baseHex} />
                
                <div className={`flex-grow rounded-md p-4 border-2 border-dotted flex flex-col justify-between transition-all duration-300 bg-transparent
                  ${isCardActive ? `${theme.borderActive} ${theme.glowClass} [inset_0_0_15px_rgba(168,85,247,0.03)]` : 'border-white/10'}`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="w-full flex flex-col pt-0.5 mb-4 items-start">
                      <div className="flex items-center justify-between w-full mb-2 px-0.5">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full bg-purple-500 ${isCardActive ? 'animate-pulse' : ''}`}></span>
                          <span className={`${isCardActive ? theme.textAccent : 'text-slate-400'} font-bold uppercase tracking-wider text-[15px] transition-colors`}>Status:Init Arch</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold">M_03 // v0.1</span>
                      </div>
                      <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    </div>

                    {/* Title & System Brief Section */}
                    <div className="mb-4">
                      <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate">Sync Gateway // Real-Time</h3>

                      {/* SYSTEM BRIEF DESIGN BLOCK */}
                      <div className="mb-3 text-xs text-slate-400 leading-relaxed border-l-2 border-purple-500/30 pl-2.5 py-0.5">
                        <span className="text-white font-bold tracking-wider">SYSTEM_BRIEF:</span> Real-time state synchronization gateway designed for low-latency, multi-client events. Built on a Redis Pub/Sub architecture, manages active WebSocket client pools & resolves concurrent data payloads to keep distributed applications in sync.
                      </div>

                      
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Socket.io</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Redis</span>
                        <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Express</span>
                      </div>
                    </div>

                    {/* Step Matrix Blocks */}
                    <div className="space-y-2.5 relative flex-grow mb-4">
                      
                      {/* Step 01 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm03_s1' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m03_s1'); setPersistentTerminalId('m03_s1'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm03_s1' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>01. WS_CLIENT_POOL</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm03_s1' ? 'bg-purple-950 text-purple-400' : 'bg-slate-800 text-slate-400'}`}>SOCKET</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm03_s1' ? 'text-slate-200' : 'text-slate-500'}`}>
                          <li>↳ multi_client_events</li>
                          <li>↳ broadcast_payloads</li>
                        </ul>
                      </div>

                      {/* Step 02 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm03_s2' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-purple-500/20 bg-[#16101c]'}`}
                        onMouseEnter={() => { setActivePipeline('m03_s2'); setPersistentTerminalId('m03_s2'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm03_s2' ? theme.textAccent : 'text-purple-500'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span> 02. PUB_SUB_BROKER </span>
                          <span className="text-[9px] bg-purple-950 text-purple-400 px-1.5 py-0.5 rounded tracking-wider">PLANNING</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm03_s2' ? 'text-slate-200' : 'text-slate-400'}`}>
                          <li>⚡ WebSocket Gateway</li>
                          <li>⚡ Redis Pub/Sub Layer</li>
                        </ul>
                      </div>

                      {/* Step 03 */}
                      <div 
                        className={`p-2.5 rounded-md border cursor-pointer transition-all duration-200
                          ${activePipeline === 'm03_s3' ? `${theme.borderActiveStep} ${theme.bgActiveStep}` : 'border-slate-800/80 bg-[#0a1424]'}`}
                        onMouseEnter={() => { setActivePipeline('m03_s3'); setPersistentTerminalId('m03_s3'); }}
                        onMouseLeave={() => setActivePipeline(null)}
                      >
                        <div className={`${activePipeline === 'm03_s3' ? theme.textAccent : 'text-white'} font-bold mb-1 flex items-center justify-between text-xs transition-colors`}>
                          <span>03. CONCURRENT_SYNC</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-wider transition-colors ${activePipeline === 'm03_s3' ? 'bg-purple-950 text-purple-400' : 'bg-slate-800 text-slate-500'}`}>PENDING</span>
                        </div>
                        <ul className={`space-y-1 text-xs list-none pl-0 mb-0 transition-colors ${activePipeline === 'm03_s3' ? 'text-slate-200' : 'text-slate-500'}`}>
                          <li>◇ Real-Time State Sync</li>
                          <li>◇ Delta Resolution</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Bottom Divider Row */}
                  <div className="w-full mt-2 flex flex-col items-start">
                    <CustomLaserDivider isActive={isCardActive} colorHex={theme.baseHex} />
                    <div className="w-full flex justify-between text-[10px] font-medium text-slate-500 tracking-wider mt-3">
                      <span>SOCKET.IO / REDIS / EXP</span>
                      <span>TARGET: STAGE_03</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

        {/* ==================== BRIDGE SVG LINKAGE ==================== */}
        <div className="relative w-full h-24 my-2 block z-0">
          <ModuleFlowLinesSVG currentActiveId={activePipeline ? activePipeline.split('_')[0] : null} />
        </div>

        {/* ==================== PERSISTENT CONSOLE VIEW ==================== */}
        <div className="relative z-10 w-full mt-auto">
          <Terminal targetModuleId={persistentTerminalId} />
        </div>

      </div>
    </div>
  );
};

export default DeployedModule;