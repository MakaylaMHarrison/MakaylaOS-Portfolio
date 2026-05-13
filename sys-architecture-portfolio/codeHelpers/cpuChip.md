import React from 'react';
// Importing specifically from lucide-react for functional components
import { Cpu } from 'lucide-react';

/**
 * CpuChip Component
 * Renders a CPU icon with a rhythmic pulse animation to simulate "processing"
 */
const CpuChip = () => {
  return (
    <div className="flex items-center justify-center p-8">
      {/* Outer Container: 
          Relative positioning allows us to layer a glow effect behind the chip 
      */}
      <div className="relative">
        
        {/* Glow Effect: 
            An absolute positioned div that sits behind the icon to create a soft aura 
        */}
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-cpu-pulse" />

        {/* The CPU Icon:
            - size: dimensions of the icon
            - className: applying our custom pulse animation and styling
        */}
        <Cpu 
          size={64} 
          className="text-blue-400 animate-cpu-pulse relative z-10" 
          strokeWidth={1.5}
        />
        
        {/* Sub-label for the architecture feel
        */}
        <p className="text-xs text-blue-300 mt-4 text-center font-mono tracking-widest uppercase">
          System Core
        </p>
      </div>
    </div>
  );
};

export default CpuChip;