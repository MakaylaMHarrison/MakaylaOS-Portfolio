/*
=======================================================================
ArchitectureDiagram.jsx
=======================================================================
Master dashboard orchestration framework. Manages unified layout matrices,
HTML node injection nodes, and central path state contexts.
*/

// Import the baseline state hook from the React core library
import { useState } from "react";

// Import custom application components managing individual nodes and circuit paths
import SystemCard from "./SystemCard";
import FlowLinesSVG from "./FlowLinesSVG";

// Inline Core Graphic Components for Node Header Icons
// -----------------------------------------------------------------------

/**
 * ServerIcon: Stateless vector component representing a multi-tier rack server.
 * Uses a standard 24x24 canvas coordinate matrix with absolute path geometry.
 */
const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

/**
 * ClientIcon: Stateless vector component representing a workstation/monitor interface terminal.
 */
const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);  

/**
 * DatabaseIcon: Stateless vector component displaying a multi-layered relational data storage cylinder.
 */
const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
  </svg>
);

/**
 * StreamIcon: Stateless vector component presenting a continuous telemetry frequency waveform or stream.
 */
const StreamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

// Main Component Orchestration
// -----------------------------------------------------------------------

export default function ArchitectureDiagram() {
    // State hook holding the unique identifier string of the hovered or interacted node; tracks null if idle
    const [activeNodeId, setActiveNodeId] = useState(null);

    /**
     * REFACTOR: Removed conditional ternary expression that forced labels to look slate gray.
     * Always returns static cyan utility to keep indicators glowing continuously.
     * @returns {string} Tailwind CSS text utility class
     */
    const getLabelColor = () => 'text-cyan-400';

    return (
        // Outermost component canvas wrapping the dashboard layout in a full-viewport monospaced sandbox
        <section className="relative w-full min-h-screen px-8 pt-4 pb-12 font-mono flex flex-col">

            {/* HEADER METADATA BRANDING */}
            <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {/* Visual placeholder for System Management Title Metadata branding text */}
            </h2> 

            {/* MASTER RELATIVE WORKSPACE CONTAINER */}
            <div className="relative w-full max-w-5xl mx-auto flex-grow min-h-[650px] mt-4">
                
                {/* BACKPLANE PATH CIRCUITS */}
                <FlowLinesSVG currentActiveId={activeNodeId} />

                {/* FOREGROUND HTML INTERACTIVE HOVER LAYER */}
                <div className="absolute inset-0 z-10 pointer-events-none">

                    {/* 1. SERVER_CORE (Top Anchor Center) */}
                    <div className="absolute top-[0%] left-1/2 -translate-x-1/2 pointer-events-auto">
                        <SystemCard title="SERVER_CORE" id="server" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ServerIcon}>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>RUN:</span>
                                <span className="text-white">Node</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>RTR:</span>
                                <span className="text-white">Express</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>VAL:</span>
                                <span className="text-white">Zod</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 2. CLIENT_SIDE (Mid-Left Wing Anchor) */}
                    <div className="absolute top-[28%] left-[20%] -translate-x-1/2 pointer-events-auto">
                        <SystemCard title="CLIENT_SIDE" id="client" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ClientIcon}>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>FW:</span>
                                <span className="text-white">React</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>STATE:</span>
                                <span className="text-white">Query</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>CSS:</span>
                                <span className="text-white">Tailwind</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 3. DATABASE (Mid-Right Wing Anchor) */}
                    <div className="absolute top-[28%] right-[20%] translate-x-1/2 pointer-events-auto">
                        <SystemCard title="DATABASE" id="db" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={DatabaseIcon}>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>DB:</span>
                                <span className="text-white">Postgres</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>ORM:</span>
                                <span className="text-white">Drizzle</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor()} font-bold`}>TYPE:</span>
                                <span className="text-white">Relational</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 4. OUTPUT_STREAM (Lower Anchor Center) */}
                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 pointer-events-auto">
                        <SystemCard title="OUTPUT_STREAM" id="output" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={StreamIcon}>
                            {/* MODIFICATION: Changed static descriptive labels on bottom tier module to cyan */}
                            <div className="text-cyan-400 font-bold tracking-wide text-sm pt-1 text-center w-full">
                                Project_Registry
                            </div>
                        </SystemCard>
                    </div>

                </div>
            </div>
        </section>
    );
}