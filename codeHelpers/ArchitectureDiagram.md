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
                <div className="relative flex flex-col items-center w-full gap-4 pointer-events-none z-10 md:absolute md:block md:inset-0 md:h-full">

                    {/* NODE 1: CLIENT_SIDE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[28%] md:left-[12%] md:-translate-x-1/2 md:w-[280px]">
                        <SystemCard title="CLIENT_SIDE SKILLS" id="client" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ClientIcon}>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap">
                                <span className={`${getLabelColor()} font-bold mr-2`}>INTERFACE:</span>
                                <span className="text-white">React / Next.js</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>STYLING:</span>
                                <span className="text-white">Tailwind CSS</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>ANIMATION:</span>
                                <span className="text-white">Framer Motion</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: CLIENT TO SERVER */}
                    <div className="md:hidden w-full flex justify-center">
                        <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="clientServer" />
                    </div>

                    {/* NODE 2: SERVER_CORE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[0%] md:left-1/2 md:-translate-x-1/2 md:w-[280px]">
                        <SystemCard title="SERVER_CORE SKILLS" id="server" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={ServerIcon}>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap">
                                <span className={`${getLabelColor()} font-bold mr-2`}>RUNTIME:</span>
                                <span className="text-white">Node.js</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>COMPILER:</span>
                                <span className="text-white">TypeScript</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>VALIDATION:</span>
                                <span className="text-white">Zod Guard</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: SERVER TO DATABASE */}
                    <div className="md:hidden w-full flex justify-center">
                        <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="serverDb" />
                    </div>

                    {/* NODE 3: DATABASE */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[28%] md:left-[88%] md:-translate-x-1/2 md:w-[280px]">
                        <SystemCard title="DATABASE SKILLS" id="db" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={DatabaseIcon}>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap">
                                <span className={`${getLabelColor()} font-bold mr-2`}>DATA_MODEL:</span>
                                <span className="text-white">Relational JSON</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>SCHEMAS:</span>
                                <span className="text-white">Typed Objects</span>
                            </div>
                            <div className="w-full flex justify-between text-xs lg:text-sm px-1 whitespace-nowrap mt-1.5">
                                <span className={`${getLabelColor()} font-bold mr-2`}>STORAGE:</span>
                                <span className="text-white">Browser / Local</span>
                            </div>
                        </SystemCard>
                    </div>

                    {/* MOBILE SEGMENT: SERVER TO OUTPUT */}
                    <div className="md:hidden w-full flex justify-center">
                        <FlowLinesSVG currentActiveId={activeNodeId} mobileSegment="serverOutput" />
                    </div>

                    {/* NODE 4: OUTPUT_STREAM */}
                    <div className="relative w-full max-w-sm flex justify-center pointer-events-auto md:absolute md:top-[58%] md:left-1/2 md:-translate-x-1/2 md:w-[280px]">
                        <SystemCard title="OUTPUT_STREAM" id="output" currentActiveId={activeNodeId} activePathTrigger={setActiveNodeId} icon={StreamIcon}>
                            <div className="text-cyan-400 font-bold tracking-wide text-base lg:text-lg pt-0.5 text-center w-full whitespace-nowrap">
                                Deployed_Modules
                            </div>
                        </SystemCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
============================================
OLD CODE:
// ArchitectureDiagram.jsx
// Combines multiple SystemCard components with FlowLinesSVG behind them

import SystemCard from "./SystemCard"       // Import reusable card
import FlowLinesSVG from "./FlowLinesSVG"   // Import decorative lines

export default function ArchitectureDiagram() {
  return (
    // Section wrapper: relative positioning allows absolutely positioned SVG inside
    <section className="relative">

      {/* Section heading */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-12">
        System Architecture
      </h2>

      {/* Relative wrapper around cards and SVG */}
      <div className="relative">

        {/* Decorative SVG lines behind the cards */}
        <FlowLinesSVG />

        {/* Grid layout for the cards */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">

          {/* First card */}
          <SystemCard title="CLIENT_SIDE">
            <p>Framework: React/ Next.js</p>
            <p>Styling: Tailwind CSS</p>
            <p>Animations: Framer Motion</p>
          </SystemCard>

          {/* Second card */}
          <SystemCard title="SERVER_CORE">
            <p>Runtime: Node</p>
            <p>Complier: TypeScript</p>
            <p>Validation: Zod Guard</p>
          </SystemCard>

          {/* Third card */}
          <SystemCard title="DATA_STORE">
            <p>Database: Relational JSON </p>
            <p>Schemas: Typed Objects </p>
            <p>Storage: Browser / Local </p>
          </SystemCard>

        </div> {/* End card grid */}
               
      </div> {/* End relative wrapper */}

    </section>
  )
}