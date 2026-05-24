import React, { useState } from 'react';
import ModuleFlowLinesSVG from './ModuleFlowLinesSVG';
import Terminal from './Terminal';
import { motion as Motion } from "framer-motion";

const DeployedModule = () => {
  const [activePipeline, setActivePipeline] = useState(null);
  const [persistentTerminalId, setPersistentTerminalId] = useState(null);

  const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

  const handleMouseEnter = (id) => {
    setActivePipeline(id);
    setPersistentTerminalId(id); 
  };

  const handleMouseLeave = () => {
    setActivePipeline(null); 
  };

  return (
    /* REFACTOR: Changed layout wrappers to remove all top padding, top margins, and extra layout gaps */
    <div className="relative w-full px-6 pb-8 pt-0 mt-0 font-mono text-slate-300 flex flex-col justify-between">
      <div className="relative z-10 w-full flex-grow flex flex-col mt-0 pt-0">
        
        {/* Section Title Header - Margins tightened to seamlessly pull layout up */}
        <div className="mb-6 pb-4 text-center max-w-3xl mx-auto w-full mt-0 pt-0">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 uppercase">
            <span className="text-cyan-500">&lt;/&gt;</span> DEPLOYED_MODULES
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1.5">
            Production-ready applications and planned architecture pipelines.
          </p>
          
          <Motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] mt-3 opacity-40 mx-auto" 
            style={{ background: hotHighlight }}
          />
        </div>

        {/* ==================== THE GRID LAYOUT BLOCK ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* ==================== MODULE 01 (CYAN) ==================== */}
          <div 
            className={`w-full bg-[#070d19] border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl min-h-[380px] group relative z-10
              ${activePipeline === 'm01' ? 'border-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.12)] scale-[1.01]' : 'border-slate-800 hover:border-cyan-500/40'}`}
            onMouseEnter={() => handleMouseEnter('m01')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">Pipeline: Active</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">M_01 // v1.0</span>
            </div>

            <div className="mb-4">
              <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate">Unexpendable // Classifier</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Next.js</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Tailwind</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Zod</span>
              </div>
            </div>

            <div className="space-y-2.5 relative flex-grow mb-4">
              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-cyan-500/30 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>01 // INPUT_LAYER</span>
                  <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded tracking-wider">JSON</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-400">
                  <li>↳ <span className="text-cyan-400/90">role_taxonomy</span>: active</li>
                  <li>↳ <span className="text-cyan-400/90">pressure_flags</span>: checked</li>
                </ul>
              </div>

              <div className="border border-cyan-500/20 bg-[#0c1e36] p-2.5 rounded-md hover:border-cyan-400 transition-colors">
                <div className="text-cyan-400 font-bold mb-1 flex items-center justify-between text-xs">
                  <span>02 // CLASSIFIER_CORE</span>
                  <span className="text-[9px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded animate-pulse tracking-wider">RUNNING</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-300">
                  <li>⚡ Rule-Based Evaluator</li>
                  <li>⚡ Phase Model Matrix</li>
                </ul>
              </div>

              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-emerald-500/30 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>03 // OUTPUT_ENGINE</span>
                  <span className="text-[9px] bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded tracking-wider">RENDER</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-400">
                  <li>✓ Personal System Map</li>
                  <li>✓ Reposition Directives</li>
                </ul>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex justify-between text-[10px] font-medium text-slate-500 tracking-wider">
              <span>NEXT.JS SERVERLESS</span>
              <span>LATENCY: LOCALHOST</span>
            </div>
          </div>

          {/* ==================== MODULE 02 (AMBER) ==================== */}
          <div 
            className={`w-full bg-[#070d19] border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl min-h-[380px] group relative z-10
              ${activePipeline === 'm02' ? 'border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.12)] scale-[1.01]' : 'border-slate-800 hover:border-amber-500/40'}`}
            onMouseEnter={() => handleMouseEnter('m02')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-amber-500 font-bold uppercase tracking-wider text-[10px]">Pipeline: In Queue</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">M_02 // v0.1</span>
            </div>

            <div className="mb-4">
              <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate">AI Tool // Semantic Core</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Node.js</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">LangChain</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">pgvector</span>
              </div>
            </div>

            <div className="space-y-2.5 relative flex-grow mb-4">
              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-slate-700 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>01 // UNSTRUCTURED</span>
                  <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded tracking-wider">INGEST</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-500">
                  <li>↳ raw_text_payload</li>
                  <li>↳ context_metadata</li>
                </ul>
              </div>

              <div className="border border-amber-500/20 bg-[#1a1510] p-2.5 rounded-md hover:border-amber-400/60 transition-colors">
                <div className="text-amber-500 font-bold mb-1 flex items-center justify-between text-xs">
                  <span>02 // VECTOR_PIPELINE</span>
                  <span className="text-[9px] bg-amber-950 text-amber-500 px-1.5 py-0.5 rounded tracking-wider">SCHEDULING</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-400">
                  <li>⚡ Tokenizer / Embedding</li>
                  <li>⚡ Semantic Prompt Layer</li>
                </ul>
              </div>

              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-slate-700 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>03 // OUTPUT_ENG</span>
                  <span className="text-[9px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded tracking-wider">PENDING</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-500">
                  <li>◇ Clean JSON Entities</li>
                  <li>◇ Semantic Search Vectors</li>
                </ul>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex justify-between text-[10px] font-medium text-slate-500 tracking-wider">
              <span>NODE / OPENAI / PGVECTOR</span>
              <span>TARGET: STAGE_02</span>
            </div>
          </div>

          {/* ==================== MODULE 03 (PURPLE) ==================== */}
          <div 
            className={`w-full bg-[#070d19] border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl min-h-[380px] group relative z-10
              ${activePipeline === 'm03' ? 'border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.12)] scale-[1.01]' : 'border-slate-800 hover:border-purple-500/40'}`}
            onMouseEnter={() => handleMouseEnter('m03')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-purple-500 font-bold uppercase tracking-wider text-[10px]">Status: Init Arch</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">M_03 // v0.1</span>
            </div>

            <div className="mb-4">
              <h3 className="text-white text-base font-bold tracking-wide mb-2 truncate">Sync Gateway // Real-Time</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Socket.io</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Redis</span>
                <span className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-medium">Express</span>
              </div>
            </div>

            <div className="space-y-2.5 relative flex-grow mb-4">
              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-slate-700 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>01 // WS_CLIENT_POOL</span>
                  <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded tracking-wider">SOCKET</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-500">
                  <li>↳ multi_client_events</li>
                  <li>↳ broadcast_payloads</li>
                </ul>
              </div>

              <div className="border border-purple-500/20 bg-[#16101c] p-2.5 rounded-md hover:border-purple-400/60 transition-colors">
                <div className="text-purple-500 font-bold mb-1 flex items-center justify-between text-xs">
                  <span>02 // PUB_SUB_BROKER</span>
                  <span className="text-[9px] bg-purple-950 text-purple-400 px-1.5 py-0.5 rounded tracking-wider">PLANNING</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-400">
                  <li>⚡ WebSocket Gateway</li>
                  <li>⚡ Redis Pub/Sub Layer</li>
                </ul>
              </div>

              <div className="border border-slate-800/80 bg-[#0a1424] p-2.5 rounded-md hover:border-slate-700 transition-colors">
                <div className="text-white font-bold mb-1 flex items-center justify-between text-xs">
                  <span>03 // CONCURRENT_SYNC</span>
                  <span className="text-[9px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded tracking-wider">PENDING</span>
                </div>
                <ul className="space-y-1 text-xs list-none pl-0 mb-0 text-slate-500">
                  <li>◇ Real-Time State Sync</li>
                  <li>◇ Delta Resolution</li>
                </ul>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex justify-between text-[10px] font-medium text-slate-500 tracking-wider">
              <span>SOCKET.IO / REDIS / EXP</span>
              <span>TARGET: STAGE_03</span>
            </div>
          </div>

        </div>

        {/* ==================== BRIDGE SVG LINKAGE ==================== */}
        <div className="relative w-full h-24 my-2 block z-0">
          <ModuleFlowLinesSVG currentActiveId={activePipeline} />
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