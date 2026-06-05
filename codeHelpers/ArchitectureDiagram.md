/*
=======================================================================
ArchitectureDiagram.jsx
=======================================================================
Master dashboard orchestration framework.Manages unified layout matrices,
HTML node injection nodes, and central path state contexts.
*/
import { useState } from "react";
import SystemCard from "./SystemCard";
import FlowLinesSVG from "./FlowLinesSVG";

// Inline Core Graphic Components for Node Header Icons
const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
);

const StreamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);

export default function ArchitectureDiagram() {
    const [activeNodeId, setActiveNodeId] = useState(null);

    const getLabelColor = (nodeId) => activeNodeId === nodeId ? 'text-cyan-400' : 'text-slate-500';

    return (
        <section className="relative w-full min-h-screen px-8 pt-4 pb-12 font-mono flex flex-col">

            {/* HEADER METADATA BRANDING */}
            <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                
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
                                <span className={`${getLabelColor('server')} font-bold`}>RUN:</span>
                                <span className="text-white">Node</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('server')} font-bold`}>RTR:</span>
                                <span className="text-white">Express</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('server')} font-bold`}>VAL:</span>
                                <span className="text-white">Zod</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 2. CLIENT_SIDE (Mid-Left Wing Anchor) */}
                    <div className="absolute top-[28%] left-[20%] -translate-x-1/2 pointer-events-auto">
                        <SystemCard title="CLIENT_SIDE" id="client" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ClientIcon}>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>FW:</span>
                                <span className="text-white">React</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>STATE:</span>
                                <span className="text-white">Query</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>CSS:</span>
                                <span className="text-white">Tailwind</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 3. DATABASE (Mid-Right Wing Anchor) */}
                    <div className="absolute top-[28%] right-[20%] translate-x-1/2 pointer-events-auto">
                        <SystemCard title="DATABASE" id="db" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={DatabaseIcon}>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>DB:</span>
                                <span className="text-white">Postgres</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>ORM:</span>
                                <span className="text-white">Drizzle</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>TYPE:</span>
                                <span className="text-white">Relational</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 4. OUTPUT_STREAM (Lower Anchor Center) */}
                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 pointer-events-auto">
                        <SystemCard title="OUTPUT_STREAM" id="output" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={StreamIcon}>
                            <div className="text-white font-light tracking-wide text-sm pt-1 text-center w-full">
                                Project_Registry
                            </div>
                        </SystemCard>
                    </div>

                </div>
            </div>
        </section>
    );
}

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
     * getLabelColor: Evaluates the active state context against a local ID.
     * Returns a highlighted cyan text class if matched, or a muted slate class if unselected.
     * * @param {string} nodeId - The target node string key ('server', 'client', 'db', 'output')
     * @returns {string} Tailwind CSS text utility class
     */
    const getLabelColor = (nodeId) => activeNodeId === nodeId ? 'text-cyan-400' : 'text-slate-500';

    return (
        // Outermost component canvas wrapping the dashboard layout in a full-viewport monospaced sandbox
        <section className="relative w-full min-h-screen px-8 pt-4 pb-12 font-mono flex flex-col">

            {/* HEADER METADATA BRANDING */}
            {/* Styled title banner slot with tracking optimizations and a subtle white glow backdrop drop-shadow */}
            <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {/* Visual placeholder for System Management Title Metadata branding text */}
            </h2>

            {/* MASTER RELATIVE WORKSPACE CONTAINER */}
            {/* Establishes the bounded 2D relational grid window within which paths and cards are absolutely mapped */}
            <div className="relative w-full max-w-5xl mx-auto flex-grow min-h-[650px] mt-4">
                
                {/* BACKPLANE PATH CIRCUITS */}
                {/* Renders the underlying vector path layer; continuously listens to state changes to flash active logic routes */}
                <FlowLinesSVG currentActiveId={activeNodeId} />

                {/* FOREGROUND HTML INTERACTIVE HOVER LAYER */}
                {/* absolute full-bleed wrapper preventing unhandled mouse capture on dead spaces via pointer-events-none */}
                <div className="absolute inset-0 z-10 pointer-events-none">

                    {/* 1. SERVER_CORE (Top Anchor Center) */}
                    {/* Anchors the server component at the horizontal midpoint along the upper boundary line */}
                    <div className="absolute top-[0%] left-1/2 -translate-x-1/2 pointer-events-auto">
                        {/* Provision Server card instance with custom labels, state monitors, and icon components */}
                        <SystemCard title="SERVER_CORE" id="server" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ServerIcon}>
                            {/* Inner key-value grid tracking the system Runtime specification details */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('server')} font-bold`}>RUN:</span>
                                <span className="text-white">Node</span>
                            </div>
                            {/* Inner key-value grid tracking the Application Router framework layer */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('server')} font-bold`}>RTR:</span>
                                <span className="text-white">Express</span>
                            </div>
                            {/* Inner key-value grid tracking the System Request Validation engine profile */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('server')} font-bold`}>VAL:</span>
                                <span className="text-white">Zod</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 2. CLIENT_SIDE (Mid-Left Wing Anchor) */}
                    {/* Maps the frontend application interface card into the upper-left horizontal quadrant */}
                    <div className="absolute top-[28%] left-[20%] -translate-x-1/2 pointer-events-auto">
                        {/* Instantiate Client subsystem card element configurations */}
                        <SystemCard title="CLIENT_SIDE" id="client" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ClientIcon}>
                            {/* Inner metadata label targeting UI Base Library Framework information */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>FW:</span>
                                <span className="text-white">React</span>
                            </div>
                            {/* Inner metadata label targeting client Async State Cache management architectures */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>STATE:</span>
                                <span className="text-white">Query</span>
                            </div>
                            {/* Inner metadata label detailing styling structure compiled style frameworks */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('client')} font-bold`}>CSS:</span>
                                <span className="text-white">Tailwind</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 3. DATABASE (Mid-Right Wing Anchor) */}
                    {/* Maps the persistence database terminal block into the upper-right horizontal quadrant */}
                    <div className="absolute top-[28%] right-[20%] translate-x-1/2 pointer-events-auto">
                        {/* Initialize storage layer instance, passing specific state bindings for persistent storage context */}
                        <SystemCard title="DATABASE" id="db" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={DatabaseIcon}>
                            {/* Database engine profile configuration label block */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>DB:</span>
                                <span className="text-white">Postgres</span>
                            </div>
                            {/* Object-Relational Mapping system schema layer assignment label */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>ORM:</span>
                                <span className="text-white">Drizzle</span>
                            </div>
                            {/* Database storage model architectural archetype labeling */}
                            <div className="w-full flex justify-between">
                                <span className={`${getLabelColor('db')} font-bold`}>TYPE:</span>
                                <span className="text-white">Relational</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* 4. OUTPUT_STREAM (Lower Anchor Center) */}
                    {/* Establishes the terminal monitoring sink block sitting vertically below the primary core cluster */}
                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 pointer-events-auto">
                        {/* Renders the output ingestion pipeline card node along the system grid floor */}
                        <SystemCard title="OUTPUT_STREAM" id="output" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={StreamIcon}>
                            {/* Central single-span subtext block identifying the target Project registry workspace location */}
                            <div className="text-white font-light tracking-wide text-sm pt-1 text-center w-full">
                                Project_Registry
                            </div>
                        </SystemCard>
                    </div>

                </div>
            </div>
        </section>
    );
}