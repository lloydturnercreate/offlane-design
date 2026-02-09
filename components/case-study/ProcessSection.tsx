"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProcessStep } from "@/types/project";

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function ProcessSection({ title, steps }: ProcessSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section section-padding bg-cream border-t border-border">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-16 lg:mb-24"
        >
          <span className="label-mono block mb-4">Methodology</span>
          <h2 className="text-heading font-medium text-stark">{title}</h2>
        </motion.div>

        {/* Process Steps Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ delay: index * 0.15 }}
              className="border border-border p-8 lg:p-10 hover:border-accent/50 transition-colors duration-300"
            >
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-6xl lg:text-7xl font-light text-stark/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-medium text-stark">
                  {step.title}
                </h3>
                <p className="text-stark/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
