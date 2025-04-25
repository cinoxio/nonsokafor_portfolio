"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: '1',
    title: 'Nike Concept',
    description: 'UI/UX Design, Web Development',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    category: 'ui',
    link: '/projects'
  },
  {
    id: '2',
    title: 'Apple Vision',
    description: 'Brand Strategy, Visual Identity',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1974',
    category: 'branding',
    link: '/projects'
  },
  {
    id: '3',
    title: 'Spotify Redesign',
    description: 'User Experience, Interface Design',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974',
    category: 'ui',
    link: '/projects'
  },
  {
    id: '4',
    title: 'Fashion Look Book',
    description: 'Photography, Art Direction',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976',
    category: 'photography',
    link: '/projects'
  },
  {
    id: '5',
    title: 'Coffee Brand',
    description: 'Branding, Packaging',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974',
    category: 'branding',
    link: '/projects'
  },
  {
    id: '6',
    title: 'Travel App',
    description: 'Mobile App Design, UI/UX',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974',
    category: 'ui',
    link: '/projects'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'UI/UX', value: 'ui' },
    { label: 'Branding', value: 'branding' },
    { label: 'Photography', value: 'photography' }
  ];

  return (
    <div className="min-h-screen pt-24">
      <motion.section
        className="container mx-auto px-6 sm:px-8 py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary mb-4">
            Portfolio
          </motion.span>
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Work
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            A selection of my recent projects across various disciplines and industries.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/70'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </div>
  );
};

export default Projects;
