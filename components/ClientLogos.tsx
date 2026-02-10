"use client";

import Image from "next/image";

const clients = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "YouTube", logo: "/logos/youtube.png" },
  { name: "DeepMind", logo: "/logos/deepmind.png" },
  { name: "Android", logo: "/logos/android.png" },
  { name: "City Index", logo: "/logos/city index.png" },
  { name: "MoonPay", logo: "/logos/moonpay.png" },
  { name: "Phuture", logo: "/logos/phuture.png" },
  { name: "Swatch", logo: "/logos/swatch.png" },
  { name: "PaceOps", logo: "/logos/paceops.png" },
];

export default function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-cream border-y border-border overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-container {
          animation: scroll 50s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        @media (min-width: 768px) {
          .scroll-container {
            animation: scroll 30s linear infinite;
          }
        }
        
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-container section-padding mb-8">
        <span className="label-mono text-stark/50">Trusted By</span>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div className="scroll-container">
          {/* First set */}
          <div className="flex">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[240px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className={`w-auto object-contain opacity-60 ${
                    client.name === 'Amazon' 
                      ? 'h-12 md:h-12 lg:h-14' 
                      : 'h-16 md:h-16 lg:h-20'
                  }`}
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex">
            {clients.map((client, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[240px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className={`w-auto object-contain opacity-60 ${
                    client.name === 'Amazon' 
                      ? 'h-10 md:h-12 lg:h-14' 
                      : 'h-14 md:h-16 lg:h-20'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
