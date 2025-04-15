export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg transform transition duration-500 hover:scale-105">
          Annie
        </h1>
        <p className="text-lg md:text-xl mt-6 text-orange-200 leading-relaxed max-w-xl mx-auto">
          Full-Stack Developer | Ruby on Rails | React | JavaScript | CSS | Bootstrap | Tailwindcss | HTML | C++ | Ruby | Python.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#about"
            className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-full transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-2 text-orange-200 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
