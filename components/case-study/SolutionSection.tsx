"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SolutionSectionProps {
  title: string;
  content: string;
}

export default function SolutionSection({ title, content }: SolutionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section section-padding bg-cream border-t border-border">
      <div className="max-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="label-mono block mb-4">Solution</span>
            <h2 className="text-heading font-medium text-stark">{title}</h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-subheading text-stark/80 leading-relaxed text-balance">
              {content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
