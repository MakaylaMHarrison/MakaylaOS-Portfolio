/*
=============================================================================
            Contact.jsx
=============================================================================
1. This file will display four panels that will host links for the following: 
    -email link
    -resume link
    -linkIn link
    -Github link
2. Animations: On Hover
    -Panels move slightly to the right
    -Open status [green] circle and text on the right of each panel
3. [Possibly} Email Form 
*/

/*
Contact.jsx
==============================================
This is the file for your system connection terminal / contact form
*/

/*
=========================================
Imports 
=========================================
*/

import React, { useState } from 'react';
import { motion as Motion } from "framer-motion";

// Global style variables matching Hero.jsx exact color profiles
const hotHighlight = "linear-gradient(to right, transparent, #22d3ee 20%, #ffffff 50%, #22d3ee 80%, transparent)";

// Indestructible, responsive corner brackets that scale across any width or height panel
function HudCorners({ isActive }) {
  const strokeColor = isActive ? "#22d3ee" : "#334155";
  const glowStyle = isActive ? { filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))' } : {};

  return (
    <div className="absolute inset-0 pointer-events-none z-20" style={glowStyle}>
      {/* Top Left Corner */}
      <svg className="absolute top-0 left-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 16 2 L 2 2 L 2 16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Top Right Corner */}
      <svg className="absolute top-0 right-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 0 2 L 14 2 L 14 16" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Bottom Left Corner */}
      <svg className="absolute bottom-0 left-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 16 14 L 2 14 L 2 0" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Bottom Right Corner */}
      <svg className="absolute bottom-0 right-0 w-4 h-4" viewBox="0 0 16 16">
        <path d="M 0 14 L 14 14 L 14 0" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Reusable Header Module - Text and Divider are now perfectly centered
function HudHeader({ title, isActive }) {
  return (
    <div className="w-full flex flex-col pt-0.5 items-center">
      {/* Centered text and status indicator row */}
      <div className="flex items-center justify-center w-full mb-1 px-0.5">
        <h3 className="uppercase text-sm tracking-[0.12em] font-bold text-white whitespace-normal break-words leading-tight text-center">
          {title}
        </h3>
        
        <Motion.div
          className={`w-2 h-2 rounded-full flex-shrink-0 z-10 origin-center transition-colors duration-300 ml-1.5
            ${isActive ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,0.5)]'}`}
          animate={{ scale: isActive ? [1, 1.3, 1] : [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: isActive ? 1.2 : 2.0, ease: "easeInOut" }}
        />
      </div>
      
      {/* Constrained Subcard Divider - mx-auto keeps it precisely centered below text */}
      <div className="w-[75%] shrink-0 overflow-hidden relative mx-auto">
        <Motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-[2px] mt-1.5 transition-opacity duration-300 relative ${isActive ? 'opacity-80' : 'opacity-30'}`} 
          style={{ 
            background: hotHighlight,
            backgroundSize: '200% 100%' 
          }}
          
          
        />
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Independent hover states for each card component
  const [hoverEndpoints, setHoverEndpoints] = useState(false);
  const [hoverMessageBoard, setHoverMessageBoard] = useState(false);

 // ➔ Centralized endpoints configuration (Including your custom Resume vector configurations)
  const endpoints = [
    { 
      label: 'EMAIL', 
      value: 'Makaylamh.93@gmail.com', 
      href: 'mailto:makaylamh.93@gmail.com',
      isDocument: false 
    },
    { 
      label: 'RESUME_DATA', 
      value: 'MakaylaH_Resume.pdf', 
      href: '/MakaylaH_Resume.pdf', 
      isDocument: true 
    },
    { 
      label: 'LINKEDIN', 
      value: 'Linkedin/MakaylaHarrison', 
      href: 'https://www.linkedin.com/in/makayla-harrison-b192b017b/',
      isDocument: false 
    }
  ];

  return (
    <div className="w-full bg-[#030712] text-slate-300 font-mono px-6 py-12 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col">
        
        {/* ==================== SECTION TITLE HEADER ==================== */}
        <div className="mb-10 w-full flex flex-col items-center justify-center">
            <div className="flex flex-row items-center text-left max-w-2xl gap-4">
                <div className="bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-bold p-2 rounded-md text-xl shadow-[0_0_15px_rgba(34,211,238,0.1)] shrink-0">
                    &gt;_
                </div>
                
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                        ESTABLISH_CONNECTION
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                        Open a channel — Response latency typically &lt; 24h.
                    </p>
                </div>
            </div>

          {/* Hero Inspired Centered Main Divider - Sized to 45% and actively loops a scan wave */}
          <div className="w-[65%] shrink-0 overflow-hidden relative">
            <Motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="h-[2px] mt-6 opacity-50 mx-auto" 
              style={{ 
                background: hotHighlight,
                backgroundSize: '200% 100%'
              }}
          
            />
          </div>
        </div>

        {/* ==================== HUD INTERFACE GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* PANEL 1: AVAILABLE ENDPOINTS */}
          <Motion.div
            className="relative w-full rounded-lg transition-all duration-300 bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col"
            whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(34, 211, 238, 0.15)" }}
            onMouseEnter={() => setHoverEndpoints(true)}
            onMouseLeave={() => setHoverEndpoints(false)}
          >
            <HudCorners isActive={hoverEndpoints} />
            
            <div className={`flex-grow rounded-md p-5 border-2 border-dotted flex flex-col justify-between transition-all duration-300 bg-transparent
              ${hoverEndpoints ? 'border-cyan-400/60 shadow-[inset_0_0_15px_rgba(34,211,238,0.05)]' : 'border-white/10'}`}
            >
              <HudHeader title=" AVAILABLE ENDPOINTS" isActive={hoverEndpoints} />

              {/* Endpoint Link List Wrapper */}
              <div className="w-full flex-grow flex flex-col justify-center space-y-3.5 pt-6">
                {endpoints.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0a1424]/40 border border-slate-800/80 rounded-md p-3.5 flex items-center justify-between transition-all duration-300 hover:translate-x-1 hover:border-cyan-500/40 hover:bg-[#0a1424]/80 group"
                  >
                    <div className="min-w-0 flex-grow pr-2">
                      <div className="text-[10px] text-slate-500 font-bold tracking-wider uppercase group-hover:text-slate-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-white text-sm sm:text-base font-bold tracking-wide mt-0.5 truncate group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span>
                      <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">open</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* PANEL 2: TRANSMIT MESSAGE BOARD */}
          <Motion.div
            className="relative w-full rounded-lg transition-all duration-300 bg-[#070d19]/20 backdrop-blur-3xl p-1 min-h-[380px] flex flex-col"
            whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(34, 211, 238, 0.15)" }}
            onMouseEnter={() => setHoverMessageBoard(true)}
            onMouseLeave={() => setHoverMessageBoard(false)}
          >
            <HudCorners isActive={hoverMessageBoard} />

            <div className={`flex-grow rounded-md p-5 border-2 border-dotted flex flex-col justify-between transition-all duration-300 bg-transparent
              ${hoverMessageBoard ? 'border-cyan-400/60 shadow-[inset_0_0_15px_rgba(34,211,238,0.05)]' : 'border-white/10'}`}
            >
              <HudHeader title="TRANSMIT MESSAGE" isActive={hoverMessageBoard} />

              {/* Form Controls Container */}
              <form className="w-full flex-grow flex flex-col justify-center space-y-4 pt-5 pb-3">
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-0.5">
                    SENDER.EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-[#0a1424]/90 border border-slate-800 focus:border-cyan-500/60 rounded-md px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none transition-colors font-mono"
                  />
                </div>

                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-0.5">
                    PAYLOAD.MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" describe your request..."
                    className="w-full bg-[#0a1424]/90 border border-slate-800 focus:border-cyan-500/60 rounded-md px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none transition-colors resize-none font-mono"
                  />
                </div>
              </form>

              {/* Action Trigger Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-cyan-950/10 hover:bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] flex items-center justify-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 transform rotate-45 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  TRANSMIT
                </button>
              </div>

            </div>
          </Motion.div>

        </div>
        
      </div>
    </div>
  );
}