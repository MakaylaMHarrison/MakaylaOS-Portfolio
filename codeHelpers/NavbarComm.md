// Navbar.jsx
// Simple top navigation

// Export a default React functional component named Navbar
export default function Navbar() {

  // Return JSX that defines the UI structure
  return (

    // <nav> is a semantic HTML element for navigation
    // Tailwind classes:
    // max-w-6xl → limits width
    // mx-auto → centers horizontally
    // px-6 py-6 → padding
    // flex → enables flexbox
    // justify-between → space between logo and links
    // items-center → vertically center items
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

      {/* Logo section */}
      
      {/* h1 used as a logo/title */}
      {/* text-cyan-400 → cyan color */}
      {/* font-bold → bold text */}
      {/* tracking-wider → increased letter spacing */}
      <h1 className="text-cyan-400 font-bold tracking-wider">
        SYSTEM_OS {/* Displayed logo text */}
      </h1>

      {/* Links section */}
      
      {/* Container for navigation links */}
      {/* space-x-6 → horizontal spacing between links */}
      {/* text-gray-300 → default text color */}
      <div className="space-x-6 text-gray-300">

        {/* Anchor link (currently placeholder "#") */}
        {/* hover:text-cyan-400 → changes color on hover */}
        {/* transition → smooth color transition */}
        <a href="#" className="hover:text-cyan-400 transition">
          GitHub
        </a>

        {/* Another navigation link with same styling */}
        <a href="#" className="hover:text-cyan-400 transition">
          Contact
        </a>

      </div>

    </nav>
  )
}