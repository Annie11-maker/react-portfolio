'use client';
import { useState } from 'react';

export default function Home() {
  const [fireworks, setFireworks] = useState([]);

  const handleHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newFireworks = Array.from({ length: 40 }).map((_, i) => ({
      id: i + Date.now(),
      left: `${Math.random() * rect.width}px`,
      top: `${Math.random() * rect.height}px`,
      color: ['#ff0', '#f0f', '#0ff', '#f90'][i % 4],
    }));
    setFireworks(newFireworks);

    setTimeout(() => setFireworks([]), 700); // remove after animation
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Yellow strip */}
      <div className="yellow-strip">
        React | Tailwind CSS | JavaScript | Ruby on Rails | C++
      </div>

      <div className="max-w-2xl relative">
        <h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg transform transition duration-500 hover:scale-120 relative"
          onMouseEnter={handleHover}
        >
          Annie
          {fireworks.map((fw) => (
            <span
              key={fw.id}
              className="firework"
              style={{
                left: fw.left,
                top: fw.top,
                backgroundColor: fw.color,
              }}
            />
          ))}
        </h1>
        <p className="text-lg md:text-xl mt-6 text-orange-200 leading-relaxed max-w-xl mx-auto">
          Full-Stack Developer | Ruby on Rails | React | JavaScript | CSS | Bootstrap | Tailwindcss | HTML | C++ | Ruby | Python.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#about"
            className="px-6 py-2 bg-orange-500 text-orange-200 hover:bg-orange-600 rounded-full transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-2 text-orange-200 bg-transparent border-2 border-orange rounded-full hover:bg-orange-300 hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
