"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectOverviewProps {
  client: string;
  industry: string;
  services: string[];
  timeline: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectOverview({
  client,
  industry,
  services,
  timeline,
}: ProjectOverviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 section-padding bg-cream border-b border-border">
      <div className="max-container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Client */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.1 }}
            className="border-l border-border pl-4"
          >
            <span className="label-mono block mb-3">Client</span>
            <p className="text-stark text-lg font-medium">{client}</p>
          </motion.div>

          {/* Industry */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="border-l border-border pl-4"
          >
            <span className="label-mono block mb-3">Industry</span>
            <p className="text-stark text-lg font-medium">{industry}</p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.3 }}
            className="border-l border-border pl-4 col-span-2 md:col-span-1"
          >
            <span className="label-mono block mb-3">Services</span>
            <div className="flex flex-col gap-1">
              {services.map((service) => (
                <p key={service} className="text-stark text-sm">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="border-l border-border pl-4"
          >
            <span className="label-mono block mb-3">Timeline</span>
            <p className="text-stark text-lg font-medium">{timeline}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
