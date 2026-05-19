/*
=======================================================================
ArchitectureDiagram.jsx
======================================================================
This file is the parent container that coordinated the nodes and animations
*/

/*
==============================================
            Imports
=============================================
*/
//imports the useState hook to manage interaction states across different componets
import {useState} from "react"
import SystemCard from "./SystemCard"
import FlowLinesSVG from "./FlowLinesSVG"

export default function ArchitectureDiagram() {
    //Local state to track if user is hovering of the node/system cards
    //activePath will be true when mouse is over a card and false when mouse leaves
    const [activePath, setActivePath]= useState(false)
    return (
        //Outer section wrapper or boundry with relative positioning to anchor absolute children
        <section className="relative">

            {/* RENDERS THE MAIN SECTION TITLES */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-12">
                System Overview 
            </h2>

            {/* Wrapper to stack the SVG lines and the Grid on top of each other */}
            <div className="relative">

                {/* THE SVG ANIMATION LAYER: 'active prop tells it when to start the data pulse*/}
                <FlowLinesSVG active={activePath} />

                {/* THE LAYER FRID FOR THE CARDS: 'z-10' ensures cards sit above the SVG lines*/}
                <div className="grid md:grid-cols-3 gap-10 relative z-10">

                    {/* THE FIRST NODE: Passes it title, internal text (children), and the state setter function*/}
                    <SystemCard title="CLIENT_SIDE" activePathTrigger={setActivePath}>
                        <p>Framework: React </p>
                        <p>State: React Query </p>
                        <p>Style: Tailwind </p>
                    </SystemCard>

                    {/* SECOND NODE: Reuses the logic if this is hovered activePath become true */}
                    <SystemCard title="SERVER_CORE" activePathTrigger={setActivePath} >
                        <p>Runtime: Node </p>
                        <p>Router: Express</p>
                        <p>Validation: Zod </p>
                    </SystemCard>

                    {/* THIRD NODE: The activePathTrigger prop allows this child to update the parents's state */}
                    <SystemCard title="DATABASE" activePathTrigeer={setActivePath}>
                        <p>Database: PostgreSQL</p>
                        <p>ORM: Drizzle</p>
                        <p>Schema: Relational</p>

                    </SystemCard>


                </div>
            </div>
        </section>
    )
}
