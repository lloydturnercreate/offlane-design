"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLoader } from "@/contexts/LoaderContext";
import dynamic from "next/dynamic";

// Dynamically import the 3D component to avoid SSR issues
const HeroVisual3D = dynamic(() => import("./HeroVisual3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const { isLoaded } = useLoader();

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.querySelector("#work");
    if (workSection) {
      const navHeight = 80;
      const elementPosition = workSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="fixed inset-0 min-h-screen flex flex-col justify-center overflow-hidden z-0">
      {/* 3D Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <HeroVisual3D />
      </motion.div>

      {/* Content - Centered (pointer-events-none so 3D is always interactive) */}
      <div className="relative z-10 section-padding pointer-events-none">
        <div className="max-container w-full">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="label-mono block mb-4">Design Studio</span>
              <h1 className="text-display font-medium text-stark text-balance">
                Distinct by design.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-subheading text-stark/70 max-w-xl text-balance"
            >
              We help ambitious businesses establish high-fidelity brands. 
              Bringing a higher standard of design and engineering to independent business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#work"
                onClick={handleViewProjects}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-stark text-stark text-sm font-medium tracking-wide hover:bg-stark hover:text-cream transition-all duration-300 ease-out-expo bg-cream/80 backdrop-blur-sm pointer-events-auto"
              >
                View Projects
                <ArrowDown 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-y-1" 
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-stark/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
