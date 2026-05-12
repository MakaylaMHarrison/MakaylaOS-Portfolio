/*
=================================================================
              App.jsx
=================================================================
Application layer
Acts as index.html
Root layout of profile page
*/

/*
=============================================================
Imports
===========================================================
*/

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ArchitectureDiagram from "./components/ArchitectureDiagram"
import Terminal from "./components/Terminal"



function App() {
    return (
      <div className="min-h-screen text-white">

        {/* Navigation Bar */}
        <Navbar />

        {/*Main Content Area */}
        <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
          <Hero name= "Makayla Harrison " role= "Junior Developer"/>

          {/* System Architecture Diagram */}
          <ArchitectureDiagram/>

          {/* Terminal/ Status Log */}
          <Terminal/>

          


        </main>

      </div>
    )
}

export default App 