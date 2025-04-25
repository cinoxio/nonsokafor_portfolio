import { getProjectBySlug, projects } from '@/config/resume';
import ProjectsClient from '@/components/Projects/ProjectsClient';
import { notFound } from 'next/navigation';

interface ProjectPageParams {
  params: {
    locale: string;
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageParams) {
    const { slug } = params;
     const project = getProjectBySlug(slug);

      // If project doesn't exist, show 404
      if (!project) {
        notFound();
      }

    // const project = projects.find((project) => project.slug === params.slug);

    const currentIndex = projects.findIndex((project) => project.slug === params.slug);
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    const nextProject = projects[nextIndex];
    const prevProject = projects[prevIndex];

   return (
       <ProjectsClient
           project={project}
           nextProject={nextProject}
           prevProject={prevProject} // This prop name
       />
   );
}

