/*
====================================================================
FlowLinesSVG.jsx
====================================================================
The file/component that renders an animated SVG connector line between components
*/

/*
=======================================================================
                            Imports
=======================================================================
Import motion from Framer Motion to animate SVG properties like path length and offset
*/

import {motion as Motion} from "framer-motion"

//Component recieves an active prop, which is a boolean (true/false) to toggle animate states
export default function FlowLinesSVG({ active }) {
    return (
        // The SVG container spans the full parent size and ignores mouse clicks (pointer-events-none)
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 300" //Defines the coordinate system used by the internal paths
            preserveAspectRatio="none" //Allows the SVG to stretch to fill its container
        >
        /*
        ===============================================================================
                    SVG Physical Line
        ===============================================================================
        */
            {/* Main Connection Path: The physical line between the two points */}
            <Motion.path

                //'d' defines the path: M= Move to (150,150), C = Cubic Bezier curve with the two control points <--
                d="M 150 150 C 350 0, 850 150"
                //Conditional styling: turns solid cyan color when active, otherwise stays a faith blue 
                stroke={active ? "cyan" : "rgba(0,180,255,0.3)"}
                strokeWidth={2} 
                fill="none" //Ensures only the line is drawn not the space inside the curve
                // initial and animate 'pathLength' create a "drawing" effect effect when the compment loads 
                inital={{ pathLength: 0 }} // Starts at 0% drawn 
                animate={{ pathLength: 1}} //Animates to 100% drawn
                transition={{ duration: 1.5}} //The drawing animation takes 1.5 seconds
            />

            */
            ===========================================================================
                    Data Packet: Circle dot
            ===========================================================================
            */

            {/* Data Packet: A small glowing circle that "travels" along the path */}
            <Motion.circle
                r={4} //Radius of the circle (size of the "packet")
                fill="cyan"
                // style used for CSS-based motion path offset
                style={{ offsetsetDistance: "0%" }} 
                // If 'active' is true, animate the packet from start (0%) to end (100%) of the path
                animate={{ offsetDistance: active ? ["0%", "100%"] : ["0%", "0%"] }}
                transition={{
                    repeat: Infinity,  //Loops the animation forever
                    duration: 3,   // It takes 3 seconds for the packet to travel the full line
                    ease: "linear"  //Moves at a constant speed without acceleration/decelation
            
                }}
            />

                </svg>
    )
}