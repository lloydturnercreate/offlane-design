"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    slug: "pace-ops",
    client: "Pace Ops",
    industry: "Technology",
    services: ["Brand Identity", "Web Design", "Web Development"],
    aspectRatio: "aspect-[4/5]",
    image: "/projects/pace-ops/Pace-cover.png",
  },
  {
    id: 2,
    slug: "google-deepmind",
    client: "Google DeepMind",
    industry: "AI / Research",
    services: ["Website Design", "Brand Design", "Social Media"],
    aspectRatio: "aspect-[3/4]",
    image: "/projects/deepmind/deepmind-p-cover.png",
  },
  {
    id: 3,
    slug: "phuture-finance",
    client: "Phuture Finance",
    industry: "FinTech",
    services: ["Brand Design", "Product Design", "Social Media"],
    aspectRatio: "aspect-[4/3]",
    image: "/projects/phuture/Phuture-cover.png",
  },
  {
    id: 4,
    slug: "design-archive",
    client: "Design Archive",
    industry: "Various",
    services: ["Brand Design", "Visual Design", "Art Direction"],
    aspectRatio: "aspect-[4/5]",
    image: "/projects/archive/archive-p-cover.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SelectedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-section section-padding bg-cream">
      <div className="max-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="label-mono block mb-4">Portfolio</span>
            <h2 className="text-heading font-medium text-stark">
              Selected Work
            </h2>
          </div>
          <p className="text-stark/60 max-w-md text-balance">
            A curated selection of projects for clients who value craft and commercial impact.
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <div
          ref={ref}
          className="columns-1 md:columns-2 gap-6 lg:gap-8 space-y-6 lg:space-y-8"
        >
          {projects.map((project, index) => {
            const isClickable = project.slug && project.slug !== "";
            const content = (
              <motion.article
                key={project.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className={`group break-inside-avoid ${isClickable ? "cursor-pointer" : ""}`}
              >
                {/* Image Container */}
                <div className={`${project.aspectRatio} bg-placeholder relative overflow-hidden mb-5`}>
                  {/* Project image or placeholder */}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.client} project`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <>
                      {/* Placeholder gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-stark/5 to-transparent" />

                      {/* Client name on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-stark/40 text-2xl lg:text-3xl font-light tracking-wider">
                          {project.client.split(" ")[0]}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-stark/5"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-3 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg lg:text-xl font-medium text-stark group-hover:text-accent transition-colors duration-300">
                      {project.client}
                    </h3>
                    <span className="label-mono text-stark/50 shrink-0">
                      {project.industry}
                    </span>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-0.5 text-xs font-mono text-stark/50 border border-border/50"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );

            return isClickable ? (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.client} case study`}
              >
                {content}
              </Link>
            ) : (
              <div key={project.id}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
