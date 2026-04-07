/*
===============================================================
            Navbar.jsx
================================================================
Simple top navigation


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
        <nav className= "max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

{/*----------------------------------------------------------------------------
                        Logo Section
--------------------------------------------------------------------------------
    -h1 usesd as a logo/title
    -text-cyan-400 -> cyan color
    -font-bold -> bold text
    -tracking-wider -> increased letter spaceing */}

            <h1 className="text-cyan-400 font-bold tracking-wider">
            System_OS
            </h1>
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

            <div className="space-x-6 text-gray-300">
                <a href= "#" className="hover:text-cyan-400 transition">Github</a>
                <a href= "#" className="hover:text-cyan-400 transition">Contact</a>
            </div>
 
        </nav>
        
    )
}
