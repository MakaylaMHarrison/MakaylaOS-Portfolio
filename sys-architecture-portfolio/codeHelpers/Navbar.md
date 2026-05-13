// Navbar.jsx
// Simple top navigation

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-cyan-400 font-bold tracking-wider">
        SYSTEM_OS
      </h1>

      {/* Links */}
      <div className="space-x-6 text-gray-300">
        <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
        <a href="#" className="hover:text-cyan-400 transition">Contact</a>
      </div>

    </nav>
  )
}
===============================================
import { Cpu } from "lucide-react"; // Import the system icon

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/40 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left Side: Icon + Title + Version */}
        <div className="flex items-center space-x-4">
          <Cpu className="text-cyan-400 w-6 h-6" />

          <h1 className="text-white font-bold tracking-tighter text-xl font-mono">
            SYSTEM_OS
          </h1>

          {/* Version Badge */}
          <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-500 text-[10px] px-2 py-0.5 rounded uppercase tracking-widest font-mono">
            v2.0.4
          </span>
        </div>

        {/* Right Side: Status + Links */}
        <div className="flex items-center space-x-8 text-sm font-mono">

          {/* Green Status Dot */}
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-400 uppercase tracking-tight">Systems Online</span>
          </div>

          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase">GitHub</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase">Contact</a>
        </div>

      </div>
    </nav>
  );
}