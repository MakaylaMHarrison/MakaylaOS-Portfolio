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



function App() {
    return (
      <div className="min-h-screen text-white">

        {/* Navigation Bar */}
        <Navbar />

        {/*Main Content Area */}
        <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
          <Hero name= "Makayla Harrison " role= "Junior Developer"/>
          
        </main>

      </div>
    )
}

export default App 