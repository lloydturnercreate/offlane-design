"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "The Brand System",
    description:
      "Strategic identity development that positions your business for growth. We craft visual systems, brand guidelines, and tone of voice that scales.",
    offerings: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Physical Touchpoints"],
  },
  {
    number: "02",
    title: "The Digital Platform",
    description:
      "High-fidelity digital experiences built for performance. From marketing sites to complex web applications, we ship products that work beautifully.",
    offerings: ["Web Design", "Framer Development", "Easy-to-manage Content", "E-commerce"],
  },
  {
    number: "03",
    title: "The Experience",
    description:
      "Elevate every touchpoint with motion, dimension, and craft. We create assets that make your brand unforgettable across channels.",
    offerings: ["Social Media", "3D Visualization", "Motion & Content", "Art Direction"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-section section-padding bg-cream">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-16 lg:mb-24"
        >
          <span className="label-mono block mb-4">The Offer</span>
          <h2 className="text-heading font-medium text-stark max-w-2xl text-balance">
            Positioned for Distinction.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="group p-8 lg:p-10 border border-border bg-cream hover:border-accent/30 transition-colors duration-500"
            >
              {/* Large Number */}
              <span className="text-service-number font-light text-stark/10 group-hover:text-accent/20 transition-colors duration-500 block leading-none">
                {service.number}
              </span>

              {/* Content */}
              <div className="mt-6 space-y-4">
                <h3 className="text-xl lg:text-2xl font-medium text-stark">
                  {service.title}
                </h3>
                
                <p className="text-stark/60 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Offerings Tags */}
                <div className="pt-6 flex flex-wrap gap-2">
                  {service.offerings.map((offering) => (
                    <span
                      key={offering}
                      className="px-3 py-1 text-xs font-mono text-stark/60 border border-border bg-white/50"
                    >
                      {offering}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
