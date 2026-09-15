import React from 'react';
import '../styles/FallingLeaves.css';

export default function FallingLeaves() {
  // Create an array of leaves with random properties
  const leaves = Array.from({ length: 35 }).map((_, i) => {
    const left = Math.random() * 100;
    const animDuration = 6 + Math.random() * 8; // 6 to 14 seconds to fall
    const swayDuration = 3 + Math.random() * 4; // 3 to 7 seconds to sway
    const animDelay = Math.random() * 15; 
    const size = 0.4 + Math.random() * 0.7; 
    const colorType = Math.floor(Math.random() * 3);
    
    return (
      <div 
        key={i} 
        className={`falling-leaf color-${colorType}`}
        style={{
          left: `${left}%`,
          animationDuration: `${animDuration}s, ${swayDuration}s`,
          animationDelay: `-${animDelay}s, -${animDelay}s`, // start instantly in middle of anim
          '--scale': size
        }}
      ></div>
    );
  });

  return (
    <div className="falling-leaves-container">
      {leaves}
    </div>
  );
}
