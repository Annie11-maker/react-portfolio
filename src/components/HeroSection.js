'use client';

import React, { useState, useCallback } from 'react';
import FireworksEffect from './FireworksEffect';
import CTAButtons from './CTAButtons';

export default function HeroSection() {
  const [fireworks, setFireworks] = useState([]);

  const handleHover = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const colors = ['#ff0', '#f0f', '#0ff', '#f90'];

    const newFireworks = Array.from({ length: 40 }).map((_, i) => ({
      id: crypto.randomUUID(),
      left: `${Math.random() * rect.width}px`,
      top: `${Math.random() * rect.height}px`,
      color: colors[i % colors.length],
    }));

    setFireworks(newFireworks);

    setTimeout(() => setFireworks([]), 700);
  }, []);

  return (
    <div className="max-w-2xl relative">
      <h1
        className="text-5xl md:text-7xl font-extrabold drop-shadow-lg transform transition duration-500 hover:scale-110 relative"
        onMouseEnter={handleHover}
      >
        Annie
        <FireworksEffect fireworks={fireworks} />
      </h1>

      <p className="text-lg md:text-xl mt-6 text-orange-200 leading-relaxed max-w-xl mx-auto">
        Full-Stack Developer | Ruby on Rails | React | JavaScript | CSS | Bootstrap | Tailwindcss | HTML | C++ | Ruby | Python.
      </p>

      <CTAButtons />
    </div>
  );
}
