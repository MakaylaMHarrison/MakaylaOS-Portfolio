import { motion as Motion, AnimatePresence } from "framer-motion";

// 1. Changed the prop name from activePipeline to targetModuleId to match the parent
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
      { type: 'cmd', text: 'initialize M_01 // system_classifier' },
      { type: 'response', text: '✔ Next.js serverless route bound.' },
      { type: 'response', text: '↳ parsing taxonomy maps via [Zod]...' },
      { type: 'cmd', text: 'test_pipeline --mode=strict' },
      { type: 'status', text: '⚡ [CLASSIFIER_CORE]: RUNNING' },
      { type: 'response', text: '↳ Phase Model Matrix loaded successfully.' },
      { type: 'success', text: '>>> OUTPUT_ENGINE: INTERFACE READY' }
    ],
    m02: [
      { type: 'cmd', text: 'spin_up M_02 // semantic_core' },
      { type: 'response', text: '⚡ Connecting to local pgvector container...' },
      { type: 'response', text: '↳ Ingesting unstructured payload stream...' },
      { type: 'cmd', text: 'load_framework --package=langchain' },
      { type: 'status', text: '⏳ [VECTOR_PIPELINE]: SCHEDULING' },
      { type: 'response', text: '↳ Initializing semantic prompt safety layer...' },
      { type: 'doc', text: '◇ System awaiting confirmation chunk...' } // fixed 'default' type leak risk
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

  // 2. Fallback to 'default' if targetModuleId is null
  const currentLogs = diagnosticLogs[targetModuleId] || diagnosticLogs.default;

  return (
    <section className="w-full font-mono select-none px-4 py-6 max-w-4xl mx-auto">
      {/* Meta Headers */}
      <div className="flex items-center justify-between px-1 mb-3">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-500">
            SYSTEM_DIAGNOSTICS
          </span>
        </div>

        <Motion.div 
          className="flex items-center space-x-2 px-1 py-0.5"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 shadow-[0_0_6px_rgba(6,182,212,0.4)]" />
          <span className="text-xs uppercase tracking-[0.15em] font-bold text-cyan-500/60">
            CONNECTED
          </span>
        </Motion.div>
      </div>

      {/* Terminal Window Box Container */}
      <div className="w-full bg-black/95 border border-slate-900 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.22)] transition-all duration-500">
        
        {/* Top Header Controls bar */}
        <div className="bg-[#111827] border-b border-slate-900/60 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]/60" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/60" />
          </div>
          <div className="text-xs font-bold text-slate-500 tracking-widest uppercase">
            CONSOLE_OUTPUT
          </div>
          <div className="text-xs text-slate-600 font-bold tracking-wider">
            21:52:51
          </div>
        </div>

        {/* Console Text Canvas Area */}
        <div className="p-6 min-h-[250px] max-h-[380px] overflow-y-auto space-y-2.5">
          <AnimatePresence mode="wait">
            <Motion.div 
              // 3. Keep the key tied to what's actively being drawn so lines recalculate correctly
              key={targetModuleId || 'default'} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Ensures scroll trigger only hits once
              className="space-y-2"
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
                    transition={{ delay: i * 0.30, duration: 2.5, ease: "easeOut" }} // Sped up marginally for snappy UX
                    className={`text-sm leading-relaxed tracking-wide ${
                      isCommand 
                        ? 'text-white font-semibold' 
                        : isStatus 
                        ? 'text-amber-400/90' 
                        : isSuccess 
                        ? 'text-emerald-400/90' 
                        : 'text-slate-400/90'
                    }`}
                  >
                    {isCommand && <span className="text-cyan-500 mr-2.5 font-bold">➔</span>}
                    {!isCommand && <span className="inline-block w-5" />}
                    {line.text}
                  </Motion.p>
                );
              })}

              {/* Cursor */}
              <Motion.span
                className="inline-block w-2 h-4 bg-cyan-500/90 shadow-[0_0_6px_rgba(6,182,212,0.8)] ml-5 mt-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
              />
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}