import React from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Terminal({ targetModuleId }) {
  const diagnosticLogs = {
    default: [
      { type: 'cmd', text: 'sys_check' },
      { type: 'response', text: 'All systems operational...' },
      { type: 'cmd', text: 'load_module --target=portfolio' },
      { type: 'response', text: 'Loading assets...' }, 
      { type: 'cmd', text: 'connect_db' },
      { type: 'response', text: 'Connection established (5ms)' },
      { type: 'cmd', text: 'render_ui' },
      { type: 'response', text: 'Interface ready.' }
    ],
    m01: [
      { type: 'cmd', text: 'initialize M_01' },
      { type: 'response', text: '✔ Next.js serverless route bound.' },
      { type: 'response', text: '↳ parsing taxonomy maps via [Zod]...' },
      { type: 'cmd', text: 'test_pipeline --mode=strict' },
      { type: 'status', text: '⚡ [CLASSICATION_ENGINE]: RUNNING' },
      { type: 'response', text: '↳ Risk Matrix loaded successfully.' },
      { type: 'success', text: '>>> OUTPUT_ENGINE: INTERFACE READY' }
    ],
    m02: [
      { type: 'cmd', text: ' M_02 // semantic_core' },
      { type: 'response', text: '⚡ Connecting to local pgvector container...' },
      { type: 'response', text: '↳ Ingesting unstructured payload stream...' },
      { type: 'cmd', text: 'load_framework --package=langchain' },
      { type: 'status', text: '⏳ [VECTOR_PIPELINE]: SCHEDULING' },
      { type: 'response', text: '↳ Initializing semantic prompt safety layer...' },
      { type: 'doc', text: '◇ System awaiting confirmation chunk...' }
    ],
    m03: [
      { type: 'cmd', text: 'listen M_03 // ws_sync_gateway' },
      { type: 'response', text: '🛰 Socket.io hub listening on PORT:8080' },
      { type: 'response', text: '↳ Initializing multi_client pooling matrix...' },
      { type: 'cmd', text: 'redis-cli ping' },
      { type: 'response', text: '↳ PONG (Redis Pub/Sub broker authenticated)' },
      { type: 'status', text: '⏳ [CONCURRENT_SYNC]: PENDING' },
      { type: 'success', text: '>>> Delta Resolution Engine compiled.' }
    ]
  };

  const baseModuleId = targetModuleId ? targetModuleId.split('_')[0] : 'default';
  const currentLogs = diagnosticLogs[baseModuleId] || diagnosticLogs.default;

  return (
    /* 1. NO MORE WRAPPERS: This single block controls the component background, outline, and layout.
      2. TARGETED RESPONSIVE SIZING: 
         - Mobile: Narrower width ('w-[84%] max-w-sm') so it shrinks in comparison to module cards.
         - Desktop: Instantly restores perfectly back to full-width format ('md:w-full md:max-w-4xl').
    */
    <div className="w-full md:max-w-4xl mx-auto font-mono select-none mt-6 mb-6 md:my-6 md:transform md:translate-y-16 bg-black/95 border border-slate-900 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.22)] transition-all duration-500">
      
      {/* Top Header Controls bar */}
      <div className="bg-[#111827] border-b border-slate-900/60 px-4 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center space-x-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
        </div>
        <div className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-widest uppercase truncate">
          CONSOLE_OUTPUT
        </div>
        <div className="text-[9px] sm:text-xs text-slate-600 font-bold tracking-wider shrink-0">
          21:52:51
        </div>
      </div>

      {/* Console Text Canvas Area with Custom Scrollbar Settings */}
      <div className="p-4 md:p-6 h-60 overflow-y-auto md:min-h-[250px] md:max-h-[380px] md:h-auto space-y-2.5 custom-scrollbar">
        <AnimatePresence mode="wait">
          <Motion.div 
            key={baseModuleId} 
            initial="hidden" 
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true, margin: "-100px"}}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.60 } 
              }
            }}
            className="space-y-1.5 md:space-y-2"
          >
            {currentLogs.map((line, i) => {
              const isCommand = line.type === 'cmd';
              const isStatus = line.type === 'status';
              const isSuccess = line.type === 'success';

              return (
                <Motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -4 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`text-xs md:text-sm leading-relaxed tracking-wide break-words ${
                    isCommand 
                      ? 'text-white font-semibold' 
                      : isStatus 
                      ? 'text-amber-400/90' 
                      : isSuccess 
                      ? 'text-emerald-400/90' 
                      : 'text-slate-400/90'
                  }`}
                >
                  {isCommand && <span className="text-cyan-500 mr-2 font-bold">➔</span>}
                  {!isCommand && <span className="inline-block w-3 md:w-5" />}
                  {line.text}
                </Motion.p>
              );
            })}

            {/* Cursor */}
            <Motion.span
              className="inline-block w-2 h-4 md:w-2 md:h-4 bg-cyan-500/90 shadow-[0_0_6px_rgba(6,182,212,0.8)] ml-3 md:ml-5 mt-0.5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
            />
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}