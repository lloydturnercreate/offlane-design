"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Duality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studio" className="py-section section-padding bg-cream">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-container"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 lg:mb-24">
          <span className="label-mono block mb-4">The Studio</span>
          <h2 className="text-heading font-medium text-stark max-w-3xl text-balance">
            We bring big-tech rigour to independent business.
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - System & Speed */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 p-8 lg:p-12 border border-border bg-white/50"
          >
            <div className="flex items-start justify-between">
              <span className="label-mono text-accent">01</span>
              <span className="label-mono">Product Design</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-medium text-stark">
              System & Speed
            </h3>
            
            <p className="text-stark/70 leading-relaxed">
              From FinTech platforms to high-growth startups, we've built products 
              that scale. Our approach brings structured methodology to 
              every project—systematic thinking, rapid iteration, and 
              precision-led execution.
            </p>
          </motion.div>

          {/* Right Column - Story & Soul */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 p-8 lg:p-12 border border-border bg-white/50"
          >
            <div className="flex items-start justify-between">
              <span className="label-mono text-accent">02</span>
              <span className="label-mono">Brand Design</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-medium text-stark">
              Story & Soul
            </h3>
            
            <p className="text-stark/70 leading-relaxed">
              Crafting identities for organizations at the frontier of innovation. 
              We understand how to distill complexity into compelling narratives 
              and visual systems that resonate on a human level—brands that feel 
              inevitable, not manufactured.
            </p>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="text-lg lg:text-xl text-stark/70 max-w-2xl mx-auto text-balance">
            Two perspectives. One standard. We partner with ambitious brands who 
            value aesthetics as much as commercial outcomes.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
