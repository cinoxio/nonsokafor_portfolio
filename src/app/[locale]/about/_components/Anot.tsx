"use client"
import React from 'react';
import { motion } from 'motion/react';
import ContactForm from '@/components/ContactForm';

const About = () => {
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
        ease: "easeOut",
      }
    }
  };

  const skills = [
    'UI/UX Design', 'Web Development', 'Brand Strategy',
    'Visual Design', 'Motion Design', 'Prototyping'
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
            About Me
          </motion.span>
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
            Designer, Developer & Creative Thinker
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            I'm passionate about creating meaningful digital experiences that connect with people.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            variants={itemVariants}
            className="aspect-square relative overflow-hidden rounded-lg bg-secondary"
          >
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">My Journey</h2>
            <p className="text-muted-foreground">
              With over 7 years of experience in design and development, I've worked with clients across various industries to create digital products that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground">
              My approach combines strategic thinking with creative problem-solving, ensuring that every project not only looks great but also delivers results.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </motion.div>

        <ContactForm />
      </motion.section>
    </div>
  );
};

export default About;
