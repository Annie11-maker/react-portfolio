'use client';
import React from 'react';

export default function CTAButtons() {
  return (
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
  );
}
