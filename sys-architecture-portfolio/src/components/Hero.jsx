/*
==============================================
Hero.jsx
==============================================
This is the file for your profile bio user system panel
*/

/*
=========================================
Imports
=========================================
*/

import avatar from "../assets/avatar.png"
import {motion as Motion } from "framer-motion"

//React component that displays a hero section witha name and role (uses default values if none are provided)
export default function Hero({ name= "Makayla  Harrison", role= "Junior Developer"}) {
    return (
        <Motion.section
        
            //Main container width + center alignment on page
            className="max-w-5xl mx-auto"

            //Entry animation (slight zoom + fade in)
            initial={{ opacity: 0, scale: 0.96 }} //starting state of animation scale:slightly smaller than normal
            animate={{ opacity: 1, scale: 1}} //opacity: fully visiable scale: normal size
            transition={{ duration: 0.6 }}// animation takes 0.6 secs
        >
             {/* OUTER FRAME 
                -Acts like a glowing border container
                -No padding to aviod "white frame illusion
                -Strong neon glow for the sci-fi effect */ }

            <div className="border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.6)]">

                {/* MAIN RECTANGLE
                    -No rounded edges
                    -Radical gradient: darker center, darker edges (less washed out) 
                    -Gives depth instead of flat bright blue*/}

                <div className="flex items-stretch border border-cyan-500"
                    style={{
                        background: "radial-gradient(circle at center, #020617 0%, #0a1f44 40%, #020617 100%)"
                    }}
                >

                    {/*Avatar Section 30%
                        -Fixed proporation of layout
                        -Centered image with glow border
                        -Created the box visually */}

                    
                    <div className="w-[30%] flex items-center justify-center p-4">

                         
                        <div className="w-full h-full border border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                        >
                            <img src={avatar} alt="avatar"
                             // Makes image fully fills container
                                className="w-full h-full object-cover"

                            />

                            
                        </div>
                    </div>

                    {/* INFO SECTION (70%)
                         -Vertically aligned toward top (like header UI)
                         -Hortizontally centered text block
                         -Pulled closer to avatar visually */}

                    <div className="w-[70%] flex flex-col justify-start pt-4 items-center">


                        {/* TEXT CONTAINER
                            -Controls max width so lines stretch nicely
                            -Centered text for balanced layout */}
                        <div className="w-full max-w-2xl text-center">


                            {/* USER SECTION */}
                            <Motion.div
                              className="py-3"
                              initial={{ y: 20, opacity: 0}}
                              animate={{ y:0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                                {/*Label + Value */}
                                <p className="text-cyan-400 text-2xl font-semibold">
                                    User: <span className="text-white"> {name} </span>
                              </p>


                                {/* Divider line
                                    -Full width of container
                                    -Gradient creates soft glowing center */}
                            
                                <div 
                                  className="mt-2 h-[2px] w-full"
                                    style={{
                                        background:"linear-gradient(to right, #020617, #38bdf8, #ffffff, #38bdf8, #020617)"
                                    
                                    }}
                                />        
                            </Motion.div>

                            {/* Role Section */}
                            <Motion.div
                                className="py-3"
                                initial={{y: 20, opacity: 0 }}
                                animate={{y: 0, opacity: 1}}
                                transition={{ delay: 0.35 }}
                            >
                                <p className="text-cyan-400 text-2xl font-semibold">
                                    Role: <span className="text-white">{role}</span>
                                </p>

                                <div
                                    className="mt-2 h-[2px] w-full"
                                    style={{
                                        background:"linear-gradient(to right, #020617, #38bdf8, #ffffff, #38bdf8, #020617)"
                                    
                                    }}
                                />
 
                            </Motion.div>

                            {/* Status Section */}
                            <Motion.div
                                className="py-3"
                                initial={{y: 20, opacity: 0}}
                                animate={{y: 0, opacity: 1 }}
                                transition={{delay: 0.5}}
                            >
                                <p className="text-green-400 text-2xl font-semibold">
                                    Status: <span className="text-white">Building Systems...</span>
                                </p>

                                <div
                                    className="mt-2 h-[2px] w-full"
                                    style={{
                                        background:"linear-gradient(to right, #020617, #38bdf8, #ffffff, #38bdf8, #020617)"
                                    
                                    }}

                                />
                            </Motion.div>
                        </div>
                    </div>

                </div>
            </div>

            
        
        </Motion.section>

        
        
    )

}
