"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getNextProject } from "@/lib/projects";

interface NextProjectProps {
  currentSlug: string;
}

export default function NextProject({ currentSlug }: NextProjectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const nextProject = getNextProject(currentSlug);

  if (!nextProject) return null;

  return (
    <section className="py-section section-padding bg-cream border-t border-border">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="label-mono block">Next Project</span>
        </motion.div>

        <Link href={`/projects/${nextProject.slug}`}>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer border border-border hover:border-accent/50 transition-colors duration-500 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className={`${nextProject.aspectRatio} lg:aspect-auto bg-placeholder relative overflow-hidden`}>
                {nextProject.nextProjectImage && (
                  <Image
                    src={nextProject.nextProjectImage}
                    alt={`Next project: ${nextProject.client}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-stark/5 to-transparent pointer-events-none" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-stark/5 pointer-events-none"
                />

              </div>

              {/* Content Side */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-heading font-medium text-stark mb-4 group-hover:text-accent transition-colors duration-300">
                  {nextProject.client}
                </h3>
                <p className="text-stark/70 mb-6 leading-relaxed text-balance">
                  {nextProject.tagline}
                </p>
                
                {/* View Project Link */}
                <div className="flex items-center gap-2 text-sm text-stark/60 group-hover:text-accent transition-colors duration-300">
                  <span>View project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {nextProject.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="px-2 py-0.5 text-xs font-mono text-stark/50 border border-border/50"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </Link>
      </div>
    </section>
  );
}
