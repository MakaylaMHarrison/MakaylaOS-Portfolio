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