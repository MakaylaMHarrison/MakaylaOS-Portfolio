/*
=========================================================
SystemCard.jsx
=========================================================
This file is the system card component for stylized animated UI card
*/

/*
===============================
Imports
===============================
*/

//motion utility from Framer Motion for animations
import {motion as Motion} from "framer-motion"


//Defines the main functional component with destructured props: title, children, and optional callback function
export default function SystemCard({ title, children, activePathTrigger}) {
    return (
        <Motion.div
            className="relative 
                 border-cyan-500/40
                 bg-slate-900/60
                backfrop-blur-md
                rounded-xl 
                 p-6
                shadow-[0_0_20px_rgba(0,180,255,0.15)]
                cursor-pointer
            "
            //Defines the starting state of the component (invisible and smaller)
            initial={{ opacity: 0, scale: 0.8}}

            //Animate to full size
            animate={{ opacity: 1, scale: 1}}

            //Set animation timing to last half a second
            transiton={{ duration: 0.5 }}

            //Adds glow effect on hover 
            whileHover={{ boxShadow: "0 0 30px rgba(0,255,255,0.5)"}}

            //This triggers a function to signal a hover event has started
            onMouseEnter={activePathTrigger ? () => activePathTrigger(true) : null}

            //Trigger function to signal the hover has event
            onMouseLeave={activePathTrigger ? () => activePathTrigger(false) : null}
        >

            {/* Card Title */}
            <h3 className="text-cyan-400 font-semibolf mb-4 tracking-wide">
                {title}
            </h3>

            {/* NODE CONTENT:Renders the nested children pass to the component to custom spacing*/}
            <div className="text-gray-300 text-sm space-y-2">
                {children}
            </div> 

            {/* Heartbeat pulse dot */}
            <Motion.div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400"
                //Pulses the scal and opacity in a loop to similate a heartbeat
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                //Configures the pulse to repeat forever every 1 second
                transition={{ repeat: Infinity, duration: 1 }}
            />

        
        </Motion.div>





    )
}

