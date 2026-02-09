"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LoaderContext } from "@/contexts/LoaderContext";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Ease out the progress - starts fast, slows down
        const increment = Math.max(1, (100 - prev) / 10);
        return Math.min(100, prev + increment);
      });
    }, 50);

    // Complete loading after progress reaches 100
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      // Trigger entrance animations after a small delay for the loader fade out
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoaded }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="mb-12"
            >
              <span className="text-stark font-medium text-xl tracking-tight">
                Offlane.Design
              </span>
            </motion.div>

            {/* Loader Bar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-48 h-px bg-border relative overflow-hidden"
            >
              {/* Progress Bar */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-stark"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </motion.div>

            {/* Percentage (optional - subtle) */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-4 font-mono text-xs text-stark/40"
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div>
        {children}
      </div>
    </LoaderContext.Provider>
  );
}
