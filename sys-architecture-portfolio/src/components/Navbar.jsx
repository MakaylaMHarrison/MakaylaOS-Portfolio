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
 import CpuChip  from "./CpuChip";
 import React from 'react';



/*
-------------------------------------------
Naviagation Section
--------------------------------------------
<nav> is a semanticc HTML element for navigation
Tailwind Classes:
    -max-w-6xl -> limits width
    -mx-auto -> centers horizontally
    -px-6 py-6 -> padding
    -flex -> enables flexbox
    -justify-between -> space between logos and links
    -items-center -> vertically center center items
*/

//Export a default React functional compenent name Navbar
export default function Navbar(){
     return(
        <nav className="border-b border-cyan-400/60 bg-slate-900/69 backdrop-blur-lg sticky top-0 z-50 ">
            <div className= "max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">

{/*----------------------------------------------------------------------------
                        Logo Section
--------------------------------------------------------------------------------
    -h1 usesd as a logo/title
    -text-cyan-400 -> cyan color
    -font-bold -> bold text
    -tracking-wider -> increased letter spaceing */}

                {/* LEFT SIDE ICON */}
                <div className="flex items-center space-x-2">
                    <CpuChip    />

                    <h1 className="text-white font-bold tracking-tighter text-xl font-mono">
                        MAKAYLA_OS 
                    </h1>

                    {/* VERSION BADGE:  */}
                    <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-500 text-[10px] px-2 py-0.5 rounded tracking-widest font-mono">
                        v1.0.0
                    </span> 
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center space-x-8 text-sm font-mono">

                    {/*GREEN STATUS DOT */}
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full 
                            rounded-full bg-green-400 opacity-75"></span>
                            </span>
                            <span className="text-white-400 uppercase tracking-tight"> 
                                Systems Online
                            </span>
                    </div>               
            
{/*-------------------------------------------------------------------------------------
                        Links Section
---------------------------------------------------------------------------------------- 
-Container for navigation link:
    -space-x-6 -> horizontal spacing between links
    -text-gray-300 -> default text color
-Anchor Link:
    -Current placeholder "#"
    -Hover:text-cyan-400 -> changes color on hover
    -Transition -> smooth color transition*/}

                
                    <a href= "#" className="hover:text-grey-300 hover:text-cyan-400 transition-colors uppercase">Github</a>
                    <a href= "#" className="hover:text-grey-300 hover:text-cyan-400 transition-colors uppercase">Contact</a>
                </div>


            </div>
        
 
        </nav>
        
    )
}
