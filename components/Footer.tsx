"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
];

export default function Footer({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className={`py-section section-padding bg-stark text-cream ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-container"
      >
        {/* Main CTA */}
        <div className="mb-20 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-6"
          >
            Start a Project
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display font-medium text-cream mb-8"
          >
            Let's Build.
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="mailto:hello@offlane.design"
            className="group inline-flex items-center gap-3 text-xl lg:text-2xl text-cream/80 hover:text-cream transition-colors duration-300"
          >
            hello@offlane.design
            <ArrowUpRight 
              size={24} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </motion.a>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 pt-12 border-t border-cream/10">
          {/* Studio Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-4">
              Studio
            </span>
            <div className="space-y-2 text-cream/70">
              <p>Offlane Design Ltd.</p>
              <p>London, United Kingdom</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-4">
              Connect
            </span>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {link.name}
                  <ArrowUpRight 
                    size={14} 
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-4">
              Navigate
            </span>
            <div className="space-y-2">
              <a href="#work" className="block text-cream/70 hover:text-cream transition-colors duration-300">
                Work
              </a>
              <a href="#services" className="block text-cream/70 hover:text-cream transition-colors duration-300">
                Services
              </a>
              <a href="#studio" className="block text-cream/70 hover:text-cream transition-colors duration-300">
                Studio
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 lg:mt-32 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="font-mono text-xs text-cream/40">
            © {new Date().getFullYear()} Offlane Design. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
