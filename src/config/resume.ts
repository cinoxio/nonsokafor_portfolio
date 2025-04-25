import { HomeIcon, NotebookIcon } from "lucide-react";
import ibgroup from '/src/assets/images/ib-group-desktop.webp';
import memento from '/src/assets/images/memento-desktop.webp';
import acc from '/src/assets/images/acc-square.webp';
import daddy from '/src/assets/images/godaddy-desktop.webp';
import sunnyside from '/src/assets/images/sunny-side-square.webp';
import { description } from '@/lib/MetaDatas/HomeMetaData';

// config.ts
export type ProjectLink = {
  type: string;
  href: string;
};

export type ProjectType = {
  images?: string[];
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  type: string;
  video?: string;
  links: ProjectLink[];
  dates: string;
  technologies: readonly string[];
};

// Define the projects array with const assertion to preserve literal types
export const projects: readonly ProjectType[] = [
    {
        id: '1',
        title: 'Ubibono',
        slug: 'ubibono',
        imageUrl: '/projects/p-2.avif',
        description: "Ubibono is a platform that connects people with the best local professionals for any project on their to-do list. From home remodeling to handyman services, Ubibono instantly matches thousands of customers every week with top-rated professionals in cities all around the world.",
        type: "Full-Stack Development",
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        links: [{
            type: "Website",
            href: "https://automatic.chat",
        }],
        dates: 'December 2024 - Jan 2025',
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        images: [
            '/projects/p-2.avif',
            '/projects/p-1.avif',
            '/projects/p-3.avif',
            '/projects/p-4.avif',
            '/projects/p-5.png',
        ]
    },
    {
        id: '2',
        title: 'BlueBrown Partners',
        slug: 'bluebrown-partners',
        imageUrl: '/projects/p-3.avif',
        description: "BlueBrown Partners is a platform that connects people with the best local professionals for any project on their to-do list. From home remodeling to handyman services, Ubibono instantly matches thousands of customers every week with top-rated professionals in cities all around the world.",
        type: "Frontend Development",
        video: "*",
        links: [{
            type: "Website",
            href: "https://automatic.chat",
        }],
        dates: '2024',
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
        ],
        images: [
            '/projects/p-2.avif',
            '/projects/p-1.avif',
            '/projects/p-3.avif',
            '/projects/p-4.avif',
            '/projects/p-5.png',
        ]
    },
    {
        id: '3',
        title: 'Mam La Viet Ignite',
        slug: 'mam-la-viet-ignite',
        imageUrl: '/projects/p-4.avif',
        description: "Mam La Viet Ignite is a platform that connects people with the best local professionals for any project on their to-do list. From home remodeling to handyman services, Ubibono instantly matches thousands of customers every week with top-rated professionals in cities all around the world.",
        type: "FullStack Development",
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        links: [{
            type: "Website",
            href: "https://automatic.chat",
        }],
        dates: '2024',
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        images: [
            '/projects/p-2.avif',
            '/projects/p-1.avif',
            '/projects/p-3.avif',
            '/projects/p-4.avif',
            '/projects/p-5.png',
        ]
    },
    {
        id: '4',
        title: 'Ubibono Network',
        slug: 'ubibono-network',
        imageUrl: '/projects/p-5.png',
        description: "Ubibono is a platform that connects people with the best local professionals for any project on their to-do list. From home remodeling to handyman services, Ubibono instantly matches thousands of customers every week with top-rated professionals in cities all around the world.",
        type: "FullStack Development",
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        links: [{
            type: "Website",
            href: "https://automatic.chat",
        }],
        dates: 'December 2024 - Jan 2025',
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Stripe",
            "Shadcn UI",
            "Magic UI",
        ],
        images: [
            '/projects/p-2.avif',
            '/projects/p-1.avif',
            '/projects/p-3.avif',
            '/projects/p-4.avif',
            '/projects/p-5.png',
        ]
    },
    {
        id: '5',
        title: "Automatic Chat",
        slug: 'automatic-chat',
        imageUrl: "/projects/p-6.png",
        description: "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        type: "Front-End Development",
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        links: [{
            type: "Website",
            href: "https://automatic.chat",
        }],
        dates: "April 2023 - March 2024",
        technologies: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Prisma",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Stripe",
            "Cloudflare Workers",
        ],
        images: [
            '/projects/p-2.avif',
            '/projects/p-1.avif',
            '/projects/p-3.avif',
            '/projects/p-4.avif',
            '/projects/p-6.png',

        ]
    }
] as const;

// Get all projects
export const getAllProjects = (): readonly ProjectType[] => {
    return projects;
};
// Get projects by type
export const getProjectsByType = (type: string): readonly ProjectType[] => {
    return projects.filter(project => project.type === type);
};

// Get project by ID
export const getProjectById = (id: string): ProjectType | undefined => {
    return projects.find(project => project.id === id);
};

// Get project by slug
export const getProjectBySlug = (slug: string): ProjectType | undefined => {
    return projects.find(project => project.slug === slug);
};

// Get featured projects (for example, first 3)
export const getFeaturedProjects = (): readonly ProjectType[] => {
    return projects.slice(0, 5);
};

// Utility function to generate slug from title (for reference)
export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
};



export const DATA = {
    name: 'Chinonso Okafor',
    initials: 'NSO',
    url: 'nonsokafor.vercel.app',
    location: 'Abuja, Nigeria',
    locationLink: 'https://www.google.com/maps/place/sanfrancisco',
    description:
        'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
    summary:
        'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
    avatarUrl: '/me.png',
    skills: [
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'Python',
        'Figma',
        'PhotoShop',
        'Postgres',
        'Docker',
        'Kubernetes',
    ],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    ],
    contact: {
        email: 'hello@example.com',
        tel: '+123456789',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/cibonso',
                navbar: true,
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://dub.sh/dillion-linkedin',
            },
            X: {
                name: 'X',
                url: 'https://dub.sh/dillion-twitter',
            },
            Youtube: {
                name: 'Youtube',
                url: 'https://dub.sh/dillion-youtube',
            },
            email: {
                name: 'Send Email',
                url: '#',
            },
        },
    },

    education: [
        {
            degree: 'Bachelor Degree',
            duration: '2010 - 2014',
            institution: 'Nnamdi Azikiwe University',
            course: 'History and International Studies',
            href: 'https://uwaterloo.ca',
        },
        {
            school: 'Wilfrid Laurier University',
            href: 'https://wlu.ca',
            degree: "Bachelor's Degree of Business Administration (BBA)",
            logoUrl: '/laurier.png',
            start: '2016',
            end: '2021',
        },
        {
            degree : 'Diploma in Web Development',
            duration: '2022 - 2023',
            institution: 'National International Training Institute',
            course: 'Full Stack Development',
        },
    ],
} as const;

export const educations = [
    {
        id: 1,
        title: 'Bachelor Degree',
        duration: '2010 - 2014',
        institution: 'Nnamdi Azikiwe University',
        course: 'History and International Studies',
    },

    {

        title: 'Web Development',
        duration: '2022 - 2023',
        institution: 'National ',
        course: 'Full Stack Development',
    },
] as const;

export const contactsData = {
    email: 'hello@nonsokafor.com',
    phone: '+2347026704155',
    address: 'Abuja, Nigeria',
    github: 'https://github.com/cibonso',
    facebook: 'https://www.facebook.com/chinonso.okafor',
    linkedIn: 'https://www.linkedin.com/in/chinonso-j-okafor',
    twitter: 'https://twitter.com/cibonso',
    stackOverflow: 'https://stackoverflow.com/users/16840768/',
    devUsername: '',
};


export const routes = [
    { index: 1, href: '/', title: 'index' },
    { index: 2, href: '/#services', title: 'services' },
    { index: 3, href: '#works', title: 'works' },
    { index: 4, href: '/#about', title: 'about' },
    { index: 5, href: '/contact', title: 'Contact' },
] as const;

export const footerLinks = [
    {
        title: 'Facebook',
        href: '/',
    },
    {
        title: 'LinkedIn',
        href: '/',
    },
    {
        title: 'Instagram',
        href: '/',
    },
    {
        title: 'Twitter',
        href: '/',
    },
] as const;



export const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'TypeScript', level: 60 },
    { name: 'ReactJS', level: 75 },
    { name: 'NextJS', level: 65 },
];

export const AdminPanel= [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'dashboard',
        label: 'Dashboard',
    },

    {
        title: 'Kanban',
        href: '/dashboard/kanban',
        icon: 'kanban',
        label: 'kanban',
    },
    {
        title: 'Login',
        href: '/',
        icon: 'login',
        label: 'login',
    },
] as const;

export const contacts = [
    { id: 1, title: 'Address', text: '55 Atani Road, Anambra, Nigeria' },
    { id: 2, title: 'Phone', text: '+234(07026704155)' },
    { id: 3, title: 'Email', text: 'cinonsookafor@gmail.com' },
] as const;
