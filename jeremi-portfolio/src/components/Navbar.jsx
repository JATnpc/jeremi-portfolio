export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full shadow-lg px-8 py-2 flex items-center space-x-8 border border-white/20">
      <a href="#home" className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition">Home</a>
      <a href="#about" className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition">About</a>
      <a href="#projects" className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition">Projects</a>
      <a href="#contact" className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition">Contact</a>
    </nav>
  );
} 