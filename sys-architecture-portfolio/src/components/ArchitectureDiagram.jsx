/*
=======================================================================
ArchitectureDiagram.jsx
=======================================================================
Master dashboard orchestration framework. Manages unified layout matrices,
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