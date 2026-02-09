"use client";

import Image from "next/image";
import { GalleryImage, GalleryLayout } from "@/types/project";

interface ImageGalleryProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
}

export default function ImageGallery({ images, layout }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  const fullWidthIndices = layout?.fullWidthIndices || [];
  const twoRowIndices = layout?.twoRowIndices || [];
  const pairedIndices = layout?.pairedIndices || [];

  return (
    <section className="py-section section-padding bg-cream border-t border-border">
      <div className="max-container">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <span className="label-mono block mb-4">Gallery</span>
          <h2 className="text-heading font-medium text-stark">Project Showcase</h2>
        </div>

        {/* Simple 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 md:grid-flow-dense">
          {images.map((image, index) => {
            const isFullWidth = fullWidthIndices.includes(index);
            const isTwoRows = twoRowIndices.includes(index);
            const isPairedStart = pairedIndices.includes(index);
            const isPairedEnd = pairedIndices.includes(index - 1);

            // Skip if this is the second image of a pair (rendered with the first)
            if (isPairedEnd) return null;

            // Paired images with matched heights
            if (isPairedStart && images[index + 1]) {
              return (
                <div key={index} className="md:col-span-2 flex flex-col md:flex-row gap-4 lg:gap-6">
                  <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                      className="h-auto md:h-[450px] w-full md:w-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg flex-grow">
                    <Image
                      src={images[index + 1].url}
                      alt={images[index + 1].alt}
                      width={1920}
                      height={1080}
                      className="h-auto md:h-[450px] w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            }

            // Two-row spanning image/video
            if (isTwoRows) {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg md:row-span-2"
                >
                  {image.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={image.url} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${isFullWidth ? 'md:col-span-2' : ''}`}
              >
                {image.isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src={image.url} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
