import { getProjectBySlug, projects } from '@/config/resume';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define types for route params
type ProjectPageParams = {
  params: {
    slug: string;
  };
};

// Generate static metadata for each project page
export async function generateMetadata({ params }: ProjectPageParams) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Link href="/projects" className="mb-8 flex items-center text-blue-500 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hero section */}
        <div className="relative h-96">
          <Image
            src={project.imageUrl}
                      alt={project.title}
                      fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-gray-200">{project.type} | {project.dates}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Video if available */}
          {project.video && project.video !== "*" && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Demo</h2>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  src={project.video}
                  controls
                  className="rounded-lg w-full"
                  poster={project.imageUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <div className="flex gap-4">
                {project.links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
                  >
                    <span className="mr-2">{link.type}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
