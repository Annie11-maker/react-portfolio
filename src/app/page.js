'use client'; // Enables client-side rendering in Next.js

import { useState } from 'react'; // Import useState hook for managing component state

export default function Home() {
  const [fireworks, setFireworks] = useState([]); // State to store firework effects

  // Function triggered on hover to create fireworks
  const handleHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get dimensions of the hovered element

    // Generate 40 fireworks with random positions and colors
    const newFireworks = Array.from({ length: 40 }).map((_, i) => ({
      id: i + Date.now(), // Unique ID using index and current timestamp
      left: `${Math.random() * rect.width}px`, // Random horizontal position within element
      top: `${Math.random() * rect.height}px`, // Random vertical position within element
      color: ['#ff0', '#f0f', '#0ff', '#f90'][i % 4], // Cycle through predefined colors
    }));

    setFireworks(newFireworks); // Set state to trigger render

    setTimeout(() => setFireworks([]), 700); // Clear fireworks after 700ms
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Animated yellow tech stack strip */}
      <div className="yellow-strip">
        Ruby on Rails | React | JavaScript | CSS | Bootstrap | Tailwindcss | HTML | C++ | Ruby | Python
      </div>

      {/* Main content container */}
      <div className="max-w-2xl relative">

        {/* Title with hover-triggered fireworks */}
        <h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg transform transition duration-500 hover:scale-120 relative"
          onMouseEnter={handleHover}
        >
          Annie
          {/* Map through fireworks array and render each as a styled span */}
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

        {/* Developer tagline / bio */}
        <p className="text-lg md:text-xl mt-6 text-orange-200 leading-relaxed max-w-xl mx-auto">
          Full-Stack Developer | Ruby on Rails | React | JavaScript | CSS | Bootstrap | Tailwindcss | HTML | C++ | Ruby | Python.
        </p>

        {/* Call-to-action buttons */}
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
