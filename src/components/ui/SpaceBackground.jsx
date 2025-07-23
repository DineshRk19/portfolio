import React from "react";

// Star component for the space background
const Star = ({ size, top, left, delay, brightness }) => (
  <div
    className={`absolute rounded-full bg-white animate-twinkle`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      opacity: brightness,
      animationDelay: `${delay}s`,
    }}
  />
);

const SpaceBackground = ({ children }) => {
  // Generate random stars for the background - 300 stars
  const stars = Array.from({ length: 300 }, (_, i) => {
    const size = Math.random() * 3 + 0.5; // Smaller stars for more realistic space look
    const brightness = Math.random() * 0.7 + 0.3;
    return {
      id: i,
      size,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      brightness: size > 2 ? brightness + 0.2 : brightness, // Brighter for larger stars
    };
  });

  // Add some special brighter stars
  const brightStars = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1000, // Ensure unique IDs
    size: Math.random() * 2 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    brightness: 0.9,
  }));

  // Combine regular and bright stars
  const allStars = [...stars, ...brightStars];

  return (
    <div className="relative min-h-screen">
      {/* Space Background - Darker */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#020410] via-[#050814] to-[#070B20] z-0"></div>
      
      {/* Stars */}
      <div className="fixed inset-0 z-0">
        {allStars.map((star) => (
          <Star
            key={star.id}
            size={star.size}
            top={star.top}
            left={star.left}
            delay={star.delay}
            brightness={star.brightness}
          />
        ))}
      </div>
      
      {/* Nebula Effect - More subtle on darker background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,100,255,0.08),transparent_70%)] z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,100,100,0.05),transparent_70%)] z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,255,255,0.05),transparent_70%)] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;