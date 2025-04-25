import { getAllProjects } from '@/config/resume';
import Link from 'next/link';

export default function Projects() {

   const projects = getAllProjects();
    return (
        <main className="w-screen h-full mx-auto py-12">
            <ul className="screen-max-width project-list grid gap-0.5 list-none">
                {projects.map((project, index) => (
                    <li key={index}>
                        {/* <span>&#8594;</span> */}
                     <Link href={`projects/${project.slug}`} key={index} className='flex link'>
                       <h3>{project.title}</h3>
                       <p>{project.type}</p>
                   </Link>
                  </li>
               ))}
            </ul>
      </main>

  );
}
