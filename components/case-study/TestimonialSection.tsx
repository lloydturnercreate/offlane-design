"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Testimonial } from "@/types/project";

interface TestimonialSectionProps {
  testimonial: Testimonial;
}

export default function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section section-padding bg-cream border-t border-border">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Label */}
          <span className="label-mono block mb-8 text-center">Testimonial</span>

          {/* Quote */}
          <div className="relative border-l-2 border-accent pl-8 lg:pl-12 mb-8">
            <blockquote className="text-subheading lg:text-heading font-light text-stark/90 leading-relaxed text-balance">
              "{testimonial.quote}"
            </blockquote>
          </div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:items-center gap-1 pl-8 lg:pl-0"
          >
            <p className="text-lg font-medium text-stark">{testimonial.author}</p>
            <p className="text-stark/60">
              {testimonial.role} at {testimonial.company}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
