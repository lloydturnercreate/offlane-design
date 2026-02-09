"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectHeroProps {
  client: string;
  tagline: string;
  heroImage?: string;
  heroVideo?: string;
  heroLogo?: string;
  heroGradient?: string;
  heroDarkText?: boolean;
}

export default function ProjectHero({ client, tagline, heroImage, heroVideo, heroLogo, heroGradient, heroDarkText }: ProjectHeroProps) {
  const defaultGradient = "bg-gradient-to-br from-cyan-100/40 to-blue-200/30";
  const hasMediaBackground = heroImage || heroVideo;
  const useLightText = hasMediaBackground && !heroDarkText;
  
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end bg-placeholder overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${heroGradient || defaultGradient}`} />
      
      {/* Hero image */}
      {heroImage && (
        <div className="absolute inset-0 opacity-100">
          <Image
            src={heroImage}
            alt={`${client} hero image`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      {/* Hero video */}
      {heroVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      
      {/* Bottom gradient for text legibility (only for light text) */}
      {useLightText && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
      
      {/* Back to work link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-24 left-6 md:left-12 lg:left-20 z-10"
      >
        <Link
          href="/#work"
          className={`flex items-center gap-2 text-sm transition-colors duration-300 group ${useLightText ? 'text-white/70 hover:text-white' : 'text-stark/70 hover:text-stark'}`}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to work</span>
        </Link>
      </motion.div>
      
      {/* Hero logo - tablet/desktop (top right) */}
      {heroLogo && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block absolute top-24 right-6 md:right-12 lg:right-20 z-10"
        >
          <Image
            src={heroLogo}
            alt="Project logo"
            width={144}
            height={144}
            className="w-36 h-auto"
          />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative section-padding w-full pb-16 lg:pb-24">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero logo - mobile (above title) */}
            {heroLogo && (
              <div className="md:hidden mb-6">
                <Image
                  src={heroLogo}
                  alt="Project logo"
                  width={80}
                  height={80}
                  className="w-32 h-auto"
                />
              </div>
            )}
            <h1 className={`text-display font-medium mb-6 ${useLightText ? 'text-white' : 'text-stark'}`}>
              {client}
            </h1>
            <p className={`text-subheading max-w-3xl text-balance ${useLightText ? 'text-white/90' : 'text-stark/80'}`}>
              {tagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
