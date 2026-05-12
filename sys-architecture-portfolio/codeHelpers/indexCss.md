/* 1. In v4, this single import replaces base, components, and utilities */
@import "tailwindcss";

/* 2. The @theme block is where we define variables and animations */
@theme {
  /* Global Colors & Fonts */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  
  /* Defining the animations as theme variables makes them available as Tailwind classes */
  --animate-fade-up: fade-up 0.8s ease-out forwards;
  --animate-blink: blink 1s step-start infinite;

  /* Custom Keyframes - Placed inside the theme block in v4 */
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
}

/* 3. Global CSS that doesn't fit into the "Utility" world goes here */
body {
  /* We use the oklch or hex values directly or reference theme variables */
  background: radial-gradient(circle at top, #0b1a2a, #050b14);
  min-height: 100vh;
  color: white;
}