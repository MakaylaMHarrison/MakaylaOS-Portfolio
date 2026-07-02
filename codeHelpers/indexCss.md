/* 1. Core Framework Architecture */
/* In Tailwind v4, this single import replaces base, components, and utilities */
@import "tailwindcss";

/* 2. Unified Hardware Token Engine */
/* The @theme block is where we define design variables and animation hooks */
@theme {
  /* Global Typography Sets */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  
  /* Defining animations as theme variables makes them universally accessible via class names */
  --animate-fade-up: fade-up 0.8s ease-out forwards;
  --animate-blink: blink 1s step-start infinite;
  --animate-cpu-pulse: slow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  /* --- CORES AND PIPELINE ENGINES --- */
  --animate-dash: dash 1.2s linear infinite;
  --animate-packet-forward: packetForward 3.2s linear infinite;
  --animate-packet-reverse: packetReverse 3.2s linear infinite;

  /* Custom Compile Keyframes Matrix */
  @keyframes fade-up {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Micro-Processor Runtime Loop Pulse */
  @keyframes slow-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05); /* Slight tactical glow */
      opacity: 0.8;          /* Hardware thermal dip */
    }
  }

  /* CRITICAL VECTOR GRAPHICS REWRITE */
  @keyframes dash {
    from {
      stroke-dashoffset: 24;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  /* High-Velocity Data Stream packets (Downstream Operations) */
  @keyframes packetForward {
    0% {
      offset-distance: 0%;
      opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  /* High-Velocity Data Stream packets (Upstream Database Inversion Operations) */
  @keyframes packetReverse {
    0% {
      offset-distance: 100%;
      opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% {
      offset-distance: 0%;
      opacity: 0;
    }
  }
}

/* 3. Global Static Style Layer overrides */
html {
  overflow-y: auto;
  overflow-x: hidden;
}

body {
  background: radial-gradient(circle at top, #0b1a2a, #050b14);
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
}

/* BROWSERS VECTOR HARMONIZATION HOOKS */
circle {
  offset-rotate: auto;
}

/* 4. Custom Utilities (Updated for Tailwind v4 Syntax) */
@utility custom-scrollbar {
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #090d16;
  }

  &::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 9999px;
    
    &:hover {
      background: #334155;
    }
  }
}

@utility no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
}