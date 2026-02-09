import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "pace-ops",
    client: "Pace Ops",
    industry: "Technology",
    services: ["Brand Identity", "Web Design", "Web Development"],
    timeline: "8 weeks",
    aspectRatio: "aspect-[4/5]",
    heroImage: "/projects/pace-ops/pace-hero.png",
    tagline: "Accelerating digital transformation for modern enterprises",
    description: "A comprehensive brand and digital platform for a rapidly growing technology consultancy.",
    challenge: "Pace Ops needed to establish credibility in a crowded market while showcasing their unique approach to digital transformation. Their existing presence failed to reflect the sophistication of their enterprise clients or the quality of their technical execution.",
    solution: "We developed a refined brand system that balances technical authority with approachability. The visual identity uses precise geometric forms and a considered color palette to convey systematic thinking, while the digital platform showcases their work through detailed case studies and an intuitive service architecture.",
    process: [
      {
        title: "Research & Strategy",
        description: "Conducted competitive analysis across the technology consultancy landscape and stakeholder interviews to understand client perception and business goals. Defined key brand pillars and positioning strategy.",
      },
      {
        title: "Brand Development",
        description: "Created a flexible visual identity system including logomark, typography, color palette, and brand guidelines. Designed for scalability across digital and physical touchpoints.",
      },
      {
        title: "Digital Experience",
        description: "Designed and developed a high-performance website using Next.js and modern web technologies. Built a component library for consistency and future scalability.",
      },
      {
        title: "Launch & Iteration",
        description: "Coordinated launch strategy and provided ongoing support for content updates and feature enhancements based on user feedback and analytics.",
      },
    ],
    results: "The new brand and digital platform contributed to a 45% increase in qualified leads within three months and improved average session duration by 60%. Client testimonials highlighted the professional presence and ease of navigation.",
    testimonial: {
      quote: "The team at Offlane.Design didn't just create a website—they helped us articulate who we are as a company. The attention to detail and strategic thinking exceeded our expectations.",
      author: "Sarah Chen",
      role: "Head of Marketing",
      company: "Pace Ops",
    },
    gallery: [
      {
        url: "/projects/pace-ops/Pace-01.png",
        alt: "Pace Ops brand overview",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/pace-ops/Pace-02.png",
        alt: "Brand identity details",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-03.png",
        alt: "Digital interface design",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-04.png",
        alt: "Pace Ops application view",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/pace-ops/Pace-05.png",
        alt: "Mobile responsiveness",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-06.png",
        alt: "Design system components",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-07.png",
        alt: "User experience flow",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-08.png",
        alt: "Typography and color palette",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/pace-ops/Pace-09.png",
        alt: "Final product showcase",
        aspectRatio: "aspect-video",
      },
    ],
    galleryLayout: {
      fullWidthIndices: [0, 1, 2, 5, 8],
    },
    nextProjectSlug: "google-deepmind",
    nextProjectImage: "/projects/pace-ops/pace-next.png",
  },
  {
    id: 2,
    slug: "google-deepmind",
    client: "Google DeepMind",
    industry: "AI / Research",
    services: ["Website Design", "Brand Design", "Social Media"],
    timeline: "12 weeks",
    aspectRatio: "aspect-[3/4]",
    heroImage: "/projects/deepmind/Deepmind-hero.png",
    heroLogo: "/projects/deepmind/deepmind-logo.png",
    heroGradient: "bg-gradient-to-br from-blue-100/50 to-blue-300/40",
    tagline: "Communicating breakthrough AI research to the world",
    description: "A digital presence that makes cutting-edge AI research accessible and engaging.",
    challenge: "How do we communicate complex AI research and breakthroughs to diverse audiences—from academic researchers to policymakers to the general public—while maintaining scientific rigor and DeepMind's reputation for excellence?",
    solution: "We created a multi-layered content strategy and design system that adapts complexity based on audience. Interactive visualizations make abstract concepts tangible, while a sophisticated visual language conveys innovation and precision. The result is a platform that serves both expert and general audiences without compromising either experience.",
    process: [
      {
        title: "Audience Research",
        description: "Mapped diverse user personas from AI researchers to science journalists. Identified content needs and comprehension levels for each audience segment.",
      },
      {
        title: "Content Architecture",
        description: "Developed a flexible content system allowing for layered complexity. Created templates for research papers, blog posts, and interactive explainers.",
      },
      {
        title: "Visual Design",
        description: "Designed a sophisticated visual language using data visualization principles, custom illustrations, and a refined typographic system that enhances readability of technical content.",
      },
      {
        title: "Social Media Strategy",
        description: "Created templates and guidelines for sharing research across social platforms, making complex breakthroughs understandable and shareable.",
      },
    ],
    gallery: [
      {
        url: "/projects/deepmind/Deepmind-01.png",
        alt: "DeepMind brand identity and visual system",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/deepmind/Deepmind-02.png",
        alt: "DeepMind website homepage design",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-03.png",
        alt: "Research platform interface",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-04.png",
        alt: "AI visualization and data graphics",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-05.png",
        alt: "Content layout and typography system",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-06.png",
        alt: "Interactive research explainer",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/deepmind/Deepmind-07.png",
        alt: "Mobile responsive design",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-08.png",
        alt: "Social media templates",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/deepmind/Deepmind-09.png",
        alt: "Brand guidelines and specifications",
        aspectRatio: "aspect-[4/3]",
      },
    ],
    galleryLayout: {
      fullWidthIndices: [0, 3, 6],
      pairedIndices: [7], // pairs image 8 & 9 with matched heights
    },
    nextProjectSlug: "phuture-finance",
    nextProjectImage: "/projects/deepmind/deepmind-next.png",
  },
  {
    id: 3,
    slug: "phuture-finance",
    client: "Phuture Finance",
    industry: "FinTech",
    services: ["Brand Design", "Product Design", "Social Media"],
    timeline: "24 months",
    aspectRatio: "aspect-[4/3]",
    heroImage: "/projects/phuture/phuture-hero.png",
    tagline: "Simplifying complexity for passive investors",
    description: "Transforming a technically complex financial platform into a friction-free investment experience.",
    challenge: "Phuture's innovative investment platform required users to manage multiple transactions, approve numerous interactions, and manually rebalance positions—creating significant cognitive overload. The technical complexity was alienating their target audience: passive investors seeking long-term growth without active management. The interface needed to hide sophisticated financial operations while maintaining transparency and building trust in a market plagued by volatility and skepticism.",
    solution: "We employed a strategy of simplification through abstraction—concealing technical complexity while exposing data transparency. The design transformed multiple backend operations into a single, intuitive action. We developed an 'anti-crypto' aesthetic using institutional typography, calm color palettes, and balanced layouts to evoke fintech reliability rather than speculative gambling. The result was a platform that delivered sophisticated investment strategies through an experience as simple as a savings account.",
    process: [
      {
        title: "Strategic Simplification",
        description: "Shifted interface focus from individual components to the unified product, reducing decision fatigue. Designed the 'one-click' investment heuristic that hid multiple technical operations behind a single user action, making complexity invisible.",
      },
      {
        title: "Trust Through Transparency",
        description: "While hiding technical mechanics, we exposed all relevant data. Designed transparency modules showing exact compositions, fees, and automated processes—building credibility through radical clarity rather than mystification.",
      },
      {
        title: "Progressive Education",
        description: "Integrated contextual learning through in-interface tooltips and educational content. Users could onboard and invest without leaving the platform or consulting external documentation, reducing friction in the acquisition funnel.",
      },
      {
        title: "Scalable Design System",
        description: "Architected a modular design system to support multiple investment products without redesigning core navigation. This approach enabled launching new products in weeks rather than months, proving the system's flexibility and business value.",
      },
    ],
    results: "Achieved $8M+ in managed assets post-launch during a challenging market period. Average user retention of 211 days—significantly above industry benchmarks—validated the long-term engagement strategy. Social media presence grew 114% (7K to 15K followers) through trusted, educational content that extended the brand's institutional positioning.",
    testimonial: {
      quote: "The design didn't just make our platform usable—it fundamentally changed how users perceive automated investing. By hiding complexity without hiding transparency, we built trust that competitors couldn't match.",
      author: "Charles Storry",
      role: "Co-Founder",
      company: "Phuture Finance",
    },
    gallery: [
      {
        url: "/projects/phuture/phuture-1.avif",
        alt: "Platform dashboard showing simplified investment interface",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/phuture/phuture-3.webp",
        alt: "Long-term growth visualization",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/phuture/phuture-2.avif",
        alt: "One-click investment flow",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/phuture/phuture-5.avif",
        alt: "Modular design system components",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/phuture/phuture-6.webp",
        alt: "Institutional brand identity",
        aspectRatio: "aspect-video",
      },
      {
        url: "/projects/phuture/phuture-7.webp",
        alt: "User interface components and interactions",
        aspectRatio: "aspect-[4/3]",
      },
    ],
    galleryLayout: {
      fullWidthIndices: [0, 3, 4, 5],
    },
    nextProjectSlug: "design-archive",
    nextProjectImage: "/projects/phuture/phuture-next.png",
  },
  {
    id: 4,
    slug: "design-archive",
    client: "Design Archive",
    industry: "Various",
    services: ["Brand Design", "Visual Design", "Art Direction"],
    timeline: "Ongoing",
    aspectRatio: "aspect-square",
    heroVideo: "/projects/archive/archive-hero.mp4",
    heroGradient: "bg-gradient-to-br from-neutral-100/60 to-stone-200/50",
    heroDarkText: true,
    tagline: "A collection of selected work, explorations, and visual experiments",
    description: "Standalone design pieces and creative explorations that showcase our range and versatility.",
    isArchive: true,
    introText: "Not every great piece of design fits neatly into a client project. This is a curated collection of our favorite design moments—brand concepts, visual experiments, and creative explorations that represent different facets of our thinking and aesthetic sensibility.",
    gallery: [
      {
        url: "/projects/archive/archive-01.png",
        alt: "Design exploration",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-02.mp4",
        alt: "Visual experiment",
        aspectRatio: "aspect-[4/3]",
        isVideo: true,
      },
      {
        url: "/projects/archive/archive-03.png",
        alt: "Brand concept",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-04.png",
        alt: "Typographic study",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-05.png",
        alt: "Creative exploration",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-06.png",
        alt: "Visual design piece",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-07.png",
        alt: "Art direction sample",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-08.png",
        alt: "Design experiment",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-09.png",
        alt: "Visual concept",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-10.png",
        alt: "Brand exploration",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-12.png",
        alt: "Design study",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-13.png",
        alt: "Visual exploration",
        aspectRatio: "aspect-[4/3]",
      },
      {
        url: "/projects/archive/archive-14.png",
        alt: "Archive piece",
        aspectRatio: "aspect-[4/3]",
      },
    ],
    galleryLayout: {
      fullWidthIndices: [0, 4, 7, 10],
      twoRowIndices: [1],
    },
    nextProjectSlug: "pace-ops",
    nextProjectImage: "/projects/archive/archive-next.png",
  },
];

export function generateSlug(clientName: string): string {
  return clientName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return undefined;
  return getProjectBySlug(currentProject.nextProjectSlug);
}
