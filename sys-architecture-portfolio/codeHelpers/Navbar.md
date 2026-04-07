// Navbar.jsx
// Simple top navigation

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-cyan-400 font-bold tracking-wider">
        SYSTEM_OS
      </h1>

      {/* Links */}
      <div className="space-x-6 text-gray-300">
        <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
        <a href="#" className="hover:text-cyan-400 transition">Contact</a>
      </div>

    </nav>
  )
}