export interface SectionName {
    title: string;
    href: string;
    index: number;
}


export interface ProjectCardProps {
    title: string;
    href?: string;
    description: string;
    dates: string;
    link?: string;
    imageUrl?: string;
    type?: string;
    video?: string;
    links?: readonly {
        type: string;
        href: string;
    }[];
    className?: string;
}

export interface Service {
    id: string;
    title: string;
}

export interface CardData {
    id: string;
    number: string;
    title: string;
    description: string;
    services: Service[];
}
