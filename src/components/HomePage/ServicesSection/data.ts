import type { CardData } from '@/types';

export const projects: CardData[] = [
    {
        id: 'web-development',
        number: '(01)',
        title: 'Web Development',
        description:
            'A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.',
        services: [
            { id: '01', title: 'CMS Integration' },
            { id: '02', title: 'Motion & Animations' },
            { id: '03', title: '3D Development' },
        ],
    },
    {
        id: 'digital-design',
        number: '(02)',
        title: 'Digital Design',
        description:
            "Exceptional design is the cornerstone of memorable digital experiences. I create visually stunning interfaces that not only look beautiful but function intuitively. From wireframes to final assets, every pixel is placed with purpose to enhance your brand's digital presence.",
        services: [
            { id: '01', title: 'UI/UX Design' },
            { id: '02', title: 'Brand Identity' },
            { id: '03', title: 'Responsive Layouts' },
        ],
    },
    {
        id: 'creative-strategy',
        number: '(03)',
        title: 'Creative Strategy',
        description:
            'Behind every successful digital product is a well-crafted strategy. I work closely with clients to understand their goals and audience, developing comprehensive plans that align technology with business objectives. This strategic foundation ensures your digital presence delivers measurable results.',
        services: [
            { id: '01', title: 'Market Research' },
            { id: '02', title: 'User Journey Mapping' },
            { id: '03', title: 'Performance Analytics' },
        ],
    },
];
