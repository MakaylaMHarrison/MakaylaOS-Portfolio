// App.jsx
// Root layout of the portfolio page

import Navbar from "./components/Navbar"                  // Top navigation
import ArchitectureDiagram from "./components/ArchitectureDiagram"  // System nodes + flow lines
import Terminal from "./components/Terminal"            // Status log terminal

function App() {
  return (
    // Full screen container
    <div className="min-h-screen text-white">

      {/* Navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* System architecture diagram */}
        <ArchitectureDiagram />

        {/* Terminal / Status log */}
        <Terminal />

      </main>

    </div>
  )
}

export default App
===============================================================================================
UPDATED NEW OFFICAL MAKAYLA_OS MAIN FILE:

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import DeployedModule from "./components/DeployedModule";
import Contact from "./components/Contact";

function App() {
  const [activePipeline, setActivePipeline] = useState(null);

  return (
    <div className="min-h-screen text-white bg-[#030712] flex flex-col justify-between ">
      <Navbar />

      {/* CHANGED: Swapped px-6 to px-4 md:px-6 to maximize mobile width. Added responsive vertical spacing. */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-12 w-full flex-grow ">
        
        {/* Wrap Hero with the #hero ID */}
        <section id="hero">
          <Hero name="Makayla Harrison" role="Junior Developer" />
        </section>

        <ArchitectureDiagram />

        {/* Set a tight margin header directly above modules with #projects ID */}
        <section id="projects" className="scroll-mt-20 relative mt-8 md:mt-4">
          <DeployedModule 
            activePipeline={activePipeline} 
            setActivePipeline={setActivePipeline} 
          />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* CHANGED: Added flex-col for mobile stacking, text-center, and responsive gaps to prevent clipping */}
      <footer className="w-full border-t border-slate-900 bg-[#070b12] py-6 md:py-4 px-4 md:px-6 text-xs text-slate-500 font-mono flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          <span>LATENCY: <span className="text-emerald-400">12ms</span></span>
          <span>REGION: <span className="text-cyan-400">US-EAST</span></span>
          <span>STATUS: <span className="text-emerald-400">100% Uptime</span></span>
        </div>
        <div>
          <span>© 2026 Makayla_OS Portfolio. All processes terminated gracefully.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;