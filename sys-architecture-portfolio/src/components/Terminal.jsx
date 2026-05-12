/*
=========================================================
Terminal.jsx
=========================================================
This file an animated system log terminal.
This component simulates a "hacker-style" terminal log with staggered text animations.
*/

/*
===============================================================
                Imports
===============================================================
//Import the motion object from Framer Motion ti enable hardawre-accelerated animations.
*/
import {motion as Motion} from "framer-motion"


//Define the main functional component. Default export allows us to import it easily elsewhere.
export default function Terminal() {
    //Static array of strings representing the terminal output lines.
    const logs = [
        "$ sys_check",
        " All system operational...",
        "$ connect_db",
        "Connection establish (5ms)",
        "$ render_ ui",
        "Interface ready."
    ]
    return (
        //Outer container that is the upon entry animation
        <section className="animate-fade-up">
            {/*A BOLD THEMED HEADER: Using tailwind css for typography and spacing. */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                System Status Log
            </h2>


            {/*TERMINAL WINDOW CONTAINER: Using fron-mono gives it the coonsole look. */}
            <div
                className="
                bg-black
                font-mono
                text-green-400
                p-6
                rounded-xl
                border border-cyan-500/30
                "
            >
                {/* RENDER LOGS: Map through the logs array to render eacj string as a seprate animaated paragraph*/}
                {logs.map((line,i) => (
                    <Motion.p
                    //We use the index "i" as a key since the list is static.
                        key={i}
                    //Starting state: Invisible and shifted 20px to the left.
                        initial={{ opacity: 0, x: -20}}
                    //Target state: Fully visiable and in its orginial position.
                        animate={{ opacity: 1, x:0}}
                    //Staggering effect: Each line waits 0.6s times its index before starting.
                    //This creates the typing sequence feel
                        transition={{delay: i * 0.6 }}
                    >
                        {line}
                    </Motion.p>

                ))}

                {/* FLASHING CURSOR */}
                <Motion.span
                    //"animate-blink" 
                    className="animate-blink"
                    //This is the inline-block to ensure the transform properties ands margins apply correctly.
                    style={{ display: "inline-block", marginLeft: "2px"}}
                >
                    |
                </Motion.span>

                

            </div>


        </section>
    )

}
