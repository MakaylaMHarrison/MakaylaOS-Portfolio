/*
=======================================================================
ArchitectureDiagram.jsx
=======================================================================
Master dashboard orchestration framework. Uses structural card layout flow
on mobile and absolute coordinate positions on desktop viewports.
*/

import { useState } from "react";
import SystemCard from "./SystemCard";
import FlowLinesSVG from "./FlowLinesSVG";

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
  </svg>
);

const StreamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default function ArchitectureDiagram() {
    const [activeNodeId, setActiveNodeId] = useState(null);
    const getLabelColor = () => 'text-cyan-400';

    return (
        <section className="relative w-full min-h-screen px-4 md:px-8 pt-4 md:pt-16 pb-12 font-mono flex flex-col">
            <div className="relative w-full max-w-5xl mx-auto flex-grow h-auto md:min-h-[650px] mt-4">
                
                {/* DESKTOP BACKGROUND BACKPLANE CANVAS */}
                <FlowLinesSVG currentActiveId={activeNodeId} />

                {/* FOREGROUND LAYOUT LAYER */}
                {/* Mobile maps cards and lines in a standard flex column, Desktop uses absolute placement */}
                <div className="relative flex flex-col items-center w-full pointer-events-none z-10 md:absolute md:block md:inset-0 md:h-full">

                    {/* NODE 1: CLIENT_SIDE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[28%] md:left-[15%] md:-translate-x-1/2">
                        <SystemCard title="CLIENT_SIDE" id="client" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ClientIcon}>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>FW:</span>
                                <span className="text-white">React</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>STATE:</span>
                                <span className="text-white">Query</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>CSS:</span>
                                <span className="text-white">Tailwind</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: CLIENT TO SERVER */}
                    <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="clientServer" />

                    {/* NODE 2: SERVER_CORE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[0%] md:left-1/2 md:-translate-x-1/2">
                        <SystemCard title="SERVER_CORE" id="server" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ServerIcon}>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>RUNTIME:</span>
                                <span className="text-white">Node.js</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>ROUTER:</span>
                                <span className="text-white">Express</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>TYPES:</span>
                                <span className="text-white">Zod</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: SERVER TO DATABASE */}
                    <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="serverDb" />

                    {/* NODE 3: DATABASE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[28%] md:left-[85%] md:-translate-x-1/2">
                        <SystemCard title="DATABASE" id="db" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={DatabaseIcon}>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>TYPES:</span>
                                <span className="text-white">Postgres</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>ORM:</span>
                                <span className="text-white">Drizzle</span>
                            </div>
                            <div className="w-full flex justify-between text-sm md:text-base px-2">
                                <span className={`${getLabelColor()} font-bold`}>SCHEMA:</span>
                                <span className="text-white">Relational</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: SERVER TO OUTPUT */}
                    <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="serverOutput" />

                    {/* NODE 4: OUTPUT_STREAM */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[58%] md:left-1/2 md:-translate-x-1/2">
                        <SystemCard title="OUTPUT_STREAM" id="output" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={StreamIcon}>
                            <div className="text-cyan-400 font-bold tracking-wide text-lg md:text-xl pt-1 text-center w-full">
                                Deployed_Modules
                            </div>
                        </SystemCard>
                    </div>

                </div>
            </div>
        </section>
    );
}