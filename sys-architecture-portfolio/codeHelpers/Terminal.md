// Terminal.jsx
// This component simulates a "hacker-style" terminal log with staggered text animations.

// Import the motion object from Framer Motion to enable hardware-accelerated animations.
import { motion } from "framer-motion"

// Define the main functional component. Default export allows us to import it easily elsewhere.
export default function Terminal() {
  // Static array of strings representing our terminal output lines.
  // Tip: In a real app, these might come from a prop or an API response.
  const logs = [
    "$ sys_check",
    "All systems operational...",
    "$ connect_db",
    "Connection established (5ms)",
    "$ render_ui",
    "Interface ready."
  ]

  return (
    // Outer container. The class "fade-up" likely refers to a global CSS entry animation.
    <section className="fade-up">

      {/* A bold, themed header using Tailwind CSS for typography and spacing. */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        System Status Log
      </h2>

      {/* The terminal window container. Using font-mono gives it that console look. */}
      <div
        className="
          bg-black
          font-mono
          text-green-400
          p-6
          rounded-xl
          border border-cyan-500/30
        "
      >
        {/* Map through the logs array to render each string as a separate animated paragraph. */}
        {logs.map((line, i) => (
          <motion.p
            // We use the index 'i' as a key since the list is static. 
            // Tip: Use unique IDs if the list can be reordered or deleted.
            key={i}
            // Starting state: Invisible and shifted 20px to the left.
            initial={{ opacity: 0, x: -20 }}
            // Target state: Fully visible and in its original position.
            animate={{ opacity: 1, x: 0 }}
            // Staggering effect: Each line waits 0.3s times its index before starting.
            // This creates the "typing" sequence feel.
            transition={{ delay: i * 0.3 }}
          >
            {line}
          </motion.p>
        ))}

        {/* This represents the flashing cursor at the end of the log. */}
        <motion.span
          // "animate-blink" should be defined in your tailwind.config.js or CSS.
          className="animate-blink"
          // We use inline-block to ensure transform properties and margins apply correctly.
          style={{ display: "inline-block", marginLeft: "2px" }}
        >
          |
        </motion.span>
      </div>

    </section>
  )
}
==============================
/*
=========================================================
Terminal.jsx
=========================================================
This file an animated system log terminal.
This component simulates a "hacker-style" terminal log with staggered text animations.
*/

/*
===============================================================
                Imports
===============================================================
//Import the motion object from Framer Motion ti enable hardawre-accelerated animations.
*/


import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Terminal({ activePipeline }) {
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
      { type: 'response', text: '◇ System awaiting confirmation chunk...' }
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

  const currentLogs = diagnosticLogs[activePipeline] || diagnosticLogs.default;

  return (
    // Wrap the entire component inside a centered max-width bracket to prevent flattening
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

        {/* Console Text Canvas Area - Boosted text from text-[11px] to text-sm */}
        <div className="p-6 min-h-[250px] max-h-[380px] overflow-y-auto space-y-2.5">
          <AnimatePresence mode="wait">
            <Motion.div 
              key={activePipeline || 'default'} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
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
                    transition={{ delay: i * 0.12, ease: "easeOut" }}
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