import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import DeployedModule from "./components/DeployedModule";

function App() {
  const [activePipeline, setActivePipeline] = useState(null);

  return (
    <div className="min-h-screen text-white bg-[#030712] flex flex-col justify-between">
      <Navbar />

      {/* Stripped parent spacing layout rules entirely */}
      <main className="max-w-6xl mx-auto px-6 pt-6 pb-12 w-full flex-grow space-y-0">
        
        <Hero name="Makayla Harrison" role="Junior Developer" />

        <ArchitectureDiagram />

        {/* Set a tight margin header directly above modules */}
        <div className="relative mt-4 space-y-12">
          <DeployedModule 
            activePipeline={activePipeline} 
            setActivePipeline={setActivePipeline} 
          />
        </div>

      </main>

      <footer className="w-full border-t border-slate-900 bg-[#070b12] py-4 px-6 text-xs text-slate-500 font-mono flex justify-between items-center">
        <div className="flex gap-6">
          <span>LATENCY: <span className="text-emerald-400">12ms</span></span>
          <span>REGION: <span className="text-cyan-400">US-EAST</span></span>
          <span>STATUS: <span className="text-emerald-400">100% Uptime</span></span>
        </div>
        <div>
          <span>© 2026 System_Portfolio. All processes terminated gracefully.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;