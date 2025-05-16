"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    particlesRef.current.forEach((particle) => {
      gsap.set(particle, {
        width: 4, // Smaller particles
        height: 4,
        opacity: 0,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });

      // Twinkle animation
      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.2, // Random opacity between 0.2-0.8
        duration: 2 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Slow drift movement
      gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 100}px`,
        y: `${(Math.random() - 0.5) * 100}px`,
        duration: 10 + Math.random() * 40,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-white/70" // Semi-transparent white
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
