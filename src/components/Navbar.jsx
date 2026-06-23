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
import Hero from './Hero';
import DeployedModule from './DeployedModule';
import Contact from './Contact';

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

//Export a default React functional component name Navbar
export default function Navbar(){
     return(
        <nav className=" fixed top-0 left-0 w-full border-b border-cyan-400/60 bg-slate-900/80 backdrop-blur-lg z-50">
            {/* CHANGED: Swapped px-6 to px-4 md:px-6. Added flex-col on mobile, snapping to row on desktop with gap-4 */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-2 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">

{/*----------------------------------------------------------------------------
                        Logo Section
--------------------------------------------------------------------------------
    -h1 used as a logo/title
    -text-cyan-400 -> cyan color
    -font-bold -> bold text
    -tracking-wider -> increased letter spacing */}

                {/* LEFT SIDE ICON */}
                {/* LEFT SIDE BRAND LINK */}
                {/* CHANGED: Added justify-center to keep logo aligned on stacked viewports */}
                <a 
                    href="#hero" 
                    className="flex items-center justify-center space-x-2 group cursor-pointer select-none"
                >
                    
                    {/* Micro-interaction: Scale the chip subtly when hovering anywhere on the logo section */}
                    <div className="group-hover:scale-105 transition-transform duration-200">
                        <CpuChip />
                    </div>

                    {/* Micro-interaction: Change text color to match your theme on hover */}
                    <h1 className="text-white font-bold tracking-tighter text-xl font-mono group-hover:text-cyan-400 transition-colors duration-200">
                        MAKAYLA_OS 
                     </h1>

                    {/* VERSION BADGE */}
                    <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-500 text-[10px] px-2 py-0.5 rounded tracking-widest font-mono">
                     v1.0.0
                    </span> 
                </a>

                {/* RIGHT SIDE */}
                {/* CHANGED: Changed to flex-wrap and justify-center with layout gaps instead of heavy hardcoded margins */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:space-x-8 md:gap-y-0 text-sm font-mono">

                    {/*GREEN STATUS DOT */}
                    <div className="flex items-center space-x-2 mr-2 md:mr-0">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        <span className="text-white uppercase tracking-tight text-xs sm:text-sm whitespace-nowrap"> 
                            Systems Online
                        </span>
                    </div>              
            
{/*-------------------------------------------------------------------------------------
                        Links Section
---------------------------------------------------------------------------------------- 
-Container for navigation link:
    -gap-x-4 -> mobile horizontal layout safety margin
    -md:space-x-8 -> desktop horizontal margin separation
-Anchor Link:
    -Hover:text-cyan-400 -> changes color on hover
    -Transition -> smooth color transition*/}

                
                    <a href="#hero" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">About</a>
                    <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Projects</a>
                    <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Contact</a>
                    
                </div>

            </div>
        
         </nav>
        
    )
}