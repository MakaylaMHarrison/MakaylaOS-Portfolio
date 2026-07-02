/*
===============================================================
            Navbar.jsx
================================================================
Simple top navigation

*/

/*
========================================================
            Imports
========================================================
*/

//import the system icon
import CpuChip from "./CpuChip";
import React from 'react';


/*
-------------------------------------------
Naviagation Section
--------------------------------------------
<nav> is a semantic HTML element for navigation
Tailwind Classes:
    -max-w-6xl -> limits width
    -mx-auto -> centers horizontally
    -px-4 md:px-6 -> responsive mobile padding adaptive safety zone
    -py-3 md:py-2 -> tight vertical layout control
    -flex -> enables flexbox
    -flex-col md:flex-row -> stacks into grid on mobile, rows out on desktop
    -md:justify-between -> space layout handling
    -items-center -> vertically center items
*/



/*
===============================================================
            Navbar.jsx (Optimized Row Layout)
================================================================
Simple top navigation
*/

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyan-400/60 bg-slate-900/80 backdrop-blur-lg">
            {/* CHANGED: Swapped flex-row to flex-col on mobile to stack the rows cleanly, then flex-row on md screens. Centers content natively. */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 md:py-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">

                {/* TOP ROW: BRAND LINK */}
                {/* CHANGED: Added w-full and justify-center on mobile so the brand stays dead center when stacked */}
                <a 
                    href="#hero" 
                    className="flex items-center justify-center space-x-2 group cursor-pointer select-none w-full md:w-auto shrink-0"
                >
                    <div className="group-hover:scale-105 transition-transform duration-200">
                        <CpuChip />
                    </div>
                    <h1 className="text-white font-bold tracking-tighter text-xl font-mono group-hover:text-cyan-400 transition-colors duration-200">
                        MAKAYLA_OS 
                     </h1>
                    <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-500 text-[10px] px-2 py-0.5 rounded tracking-widest font-mono">
                     v1.0.0
                    </span> 
                </a>

                {/* BOTTOM ROW: STATUS & LINKS */}
                {/* CHANGED: Forces a single, un-wrapped row for your links, centers them horizontally, and uses tracking/tight gaps to look crisp */}
                <div className="flex flex-row flex-nowrap items-center justify-center gap-x-3.5 sm:gap-x-4 md:space-x-8 text-xs sm:text-sm font-mono w-full md:w-auto shrink-0">
                    
                    {/* The Online Indicator is fully preserved! */}
                    <div className="flex items-center space-x-1.5 mr-1 md:mr-0 shrink-0">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        <span className="text-white uppercase tracking-tight text-xs whitespace-nowrap"> 
                            SYSTEMS ONLINE
                        </span>
                    </div>              
            
                    <a href="#hero" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider whitespace-nowrap">About</a>
                    <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider whitespace-nowrap">Projects</a>
                    <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider whitespace-nowrap">Contact</a>
                </div>

            </div>
         </nav>
    )
}
====================================================
OLD CODE:
// Navbar.jsx
// Horizontal top navigation with logo and links

export default function Navbar() {
  return (

    // Outer header spans full width and creates the bottom border line across the entire screen
    <header className= " sticky top-0 w-full z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-md">

        {/* Nav wrapper: maximum width, center horizontally, padding, flex layout */}
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

            {/* Logo / Site name */}
                <h1 className="text-cyan-400 font-bold tracking-wider">
                    SYSTEM_OS
                </h1>

            {/* Navigation links */}
            <div className="space-x-6 text-gray-300">
                {/* GitHub link */}
                <a href="#" className="hover:text-cyan-400 transition">
                    GitHub
                </a>
                {/* Contact link */}
                <a href="#" className="hover:text-cyan-400 transition">
                    Contact
                </a>
            </div>

        </nav>
    </header>    
  )
}