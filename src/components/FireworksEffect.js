'use client';
import React from 'react';

export default function FireworksEffect({ fireworks }) {
  return (
    <>
      {fireworks.map((fw) => (
        <span
          key={fw.id}
          className="firework absolute w-2 h-2 rounded-full animate-ping"
          style={{
            left: fw.left,
            top: fw.top,
            backgroundColor: fw.color,
          }}
        />
      ))}
    </>
  );
}
