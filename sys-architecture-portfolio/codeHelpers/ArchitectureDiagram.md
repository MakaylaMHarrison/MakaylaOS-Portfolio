// File: ArchitectureDiagram.jsx - The parent container that coordinates nodes and animations
// Imports the 'useState' hook to manage interaction states across different components
import { useState } from "react"
// Imports the child components we previously defined
import SystemCard from "./SystemCard"
import FlowLinesSVG from "./FlowLinesSVG"

export default function ArchitectureDiagram() {
  // Local state to track if a user is currently hovering over any node
  // activePath will be true when a mouse is over a card, and false when it leaves
  const [activePath, setActivePath] = useState(false)

  return (
    // Outer section wrapper with 'relative' positioning to anchor absolute children
    <section className="relative">

      {/* Renders the main section title with cyan coloring and bottom spacing */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-12">
        System Overview
      </h2>

      {/* Wrapper to stack the SVG lines and the Grid on top of each other */}
      <div className="relative">

        {/* The SVG animation layer; 'active' prop tells it when to start the data pulse */}
        <FlowLinesSVG active={activePath} />

        {/* The layout grid for the cards; 'z-10' ensures cards sit above the SVG lines */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">

          {/* First Node: Passes its title, internal text (children), and the state setter function */}
          <SystemCard title="CLIENT_SIDE" activePathTrigger={setActivePath}>
            <p>Framework: React</p>
            <p>State: React Query</p>
            <p>Style: Tailwind</p>
          </SystemCard>

          {/* Second Node: Reuses the logic; if this is hovered, 'activePath' becomes true */}
          <SystemCard title="SERVER_CORE" activePathTrigger={setActivePath}>
            <p>Runtime: Node</p>
            <p>Router: Express</p>
            <p>Validation: Zod</p>
          </SystemCard>

          {/* Third Node: The 'activePathTrigger' prop allows this child to update the parent's state */}
          <SystemCard title="DATA_STORE" activePathTrigger={setActivePath}>
            <p>Database: PostgreSQL</p>
            <p>ORM: Drizzle</p>
            <p>Schema: Relational</p>
          </SystemCard>

        </div>
      </div>
    </section>
  )
}