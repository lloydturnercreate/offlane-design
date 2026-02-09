import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectHero from "@/components/case-study/ProjectHero";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import ChallengeSection from "@/components/case-study/ChallengeSection";
import SolutionSection from "@/components/case-study/SolutionSection";
import ProcessSection from "@/components/case-study/ProcessSection";
import ImageGallery from "@/components/case-study/ImageGallery";
import TestimonialSection from "@/components/case-study/TestimonialSection";
import NextProject from "@/components/case-study/NextProject";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.client} - Case Study | Offlane.Design`,
    description: project.description,
    openGraph: {
      title: `${project.client} - Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Simplified archive-style layout
  if (project.isArchive) {
    return (
      <main className="bg-cream">
        <ProjectHero
          client={project.client}
          tagline={project.tagline}
          heroImage={project.heroImage}
          heroVideo={project.heroVideo}
          heroLogo={project.heroLogo}
          heroGradient={project.heroGradient}
          heroDarkText={project.heroDarkText}
        />
        
        {project.introText && (
          <section className="py-section section-padding bg-cream">
            <div className="max-container">
              <p className="text-xl lg:text-2xl text-stark/80 max-w-4xl text-balance leading-relaxed">
                {project.introText}
              </p>
            </div>
          </section>
        )}
        
        <ImageGallery images={project.gallery} layout={project.galleryLayout} />
        
        <NextProject currentSlug={project.slug} />
      </main>
    );
  }

  return (
    <main className="bg-cream">
      <ProjectHero
        client={project.client}
        tagline={project.tagline}
        heroImage={project.heroImage}
        heroLogo={project.heroLogo}
        heroGradient={project.heroGradient}
      />
      
      <ProjectOverview
        client={project.client}
        industry={project.industry}
        services={project.services}
        timeline={project.timeline}
      />
      
      {project.challenge && (
        <ChallengeSection
          title="The Challenge"
          content={project.challenge}
        />
      )}
      
      {project.solution && (
        <SolutionSection
          title="Our Approach"
          content={project.solution}
        />
      )}
      
      {project.process && (
        <ProcessSection
          title="Process"
          steps={project.process}
        />
      )}
      
      <ImageGallery images={project.gallery} layout={project.galleryLayout} />
      
      {project.results && (
        <ChallengeSection
          title="Results"
          content={project.results}
        />
      )}
      
      {project.testimonial && (
        <TestimonialSection testimonial={project.testimonial} />
      )}
      
      <NextProject currentSlug={project.slug} />
    </main>
  );
}
