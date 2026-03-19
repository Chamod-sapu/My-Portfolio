import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  emoji: string
  gradient: string
  demoUrl: string
  githubUrl: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Crystal-Sand Hotel Management',
    description: 'Full-stack hotel & accommodation management system with financial tracking and guest portal.',
    longDescription: 'A comprehensive hotel management system built with Next.js, Prisma and PostgreSQL. Features include real-time room availability, guest management, billing, financial analytics dashboard, and a sleek booking portal. Deployed on Vercel.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    emoji: '🏨',
    gradient: 'from-indigo-600/30 to-violet-600/20',
    demoUrl: 'https://crystal-sand-jet.vercel.app/',
    githubUrl: 'https://github.com/Chamod-sapu/Crystal-Sand',
    featured: true,
  },
  {
    id: 2,
    title: 'AI-Driven HR Management',
    description: 'Automated HR platform with AI workflows for recruitment, onboarding and performance tracking.',
    longDescription: 'An intelligent HR management platform featuring automated resume screening, AI-powered candidate matching, onboarding workflows, performance analytics and an employee self-service portal. Built with React, Node.js and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
    emoji: '🤖',
    gradient: 'from-fuchsia-600/30 to-pink-600/20',
    demoUrl: '#',
    githubUrl: 'https://github.com/Tiran-Sarith/HRManagement_Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'Sentiment Analysis — Social Media',
    description: 'NLP-powered system analyzing sentiment trends across social media posts with rich data visualizations.',
    longDescription: 'A machine learning pipeline for real-time sentiment analysis on social media data. Uses NLP techniques including TF-IDF, VADER and custom neural models. Results visualized through interactive dashboards built with Python, Jupyter & Plotly.',
    tags: ['Python', 'NLP', 'Jupyter', 'Data Visualization'],
    emoji: '🧠',
    gradient: 'from-cyan-600/30 to-blue-600/20',
    demoUrl: '#',
    githubUrl: 'https://github.com/Chamod-sapu/Sentiment-Analysis-on-Social-Media',
  },
  {
    id: 4,
    title: 'E-Commerce Platform — Sumesh Store',
    description: 'Feature-rich online store with product management, shopping cart and Stripe payments.',
    longDescription: 'A fully functional e-commerce solution with user authentication, product catalog management, shopping cart, wishlist, order tracking and Stripe payment integration. Built with React, Node.js, MongoDB and ElectronJS for the admin panel.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'ElectronJS'],
    emoji: '🛒',
    gradient: 'from-amber-600/30 to-orange-600/20',
    demoUrl: '#',
    githubUrl: 'https://github.com/Chamod-sapu/Sumesh-Store',
  },
  {
    id: 5,
    title: 'Warehouse Management System (DSA)',
    description: 'High-performance inventory management leveraging advanced data structures and algorithms.',
    longDescription: 'A warehouse management system built in C/C++ demonstrating advanced DSA concepts including AVL trees, hash maps and priority queues for efficient inventory tracking, optimal storage assignment and real-time order fulfillment algorithms.',
    tags: ['C', 'C++', 'Data Structures', 'Algorithms'],
    emoji: '🏭',
    gradient: 'from-emerald-600/30 to-teal-600/20',
    demoUrl: '#',
    githubUrl: 'https://github.com/Chamod-sapu/Warehouse-Management-System-DSA-System',
  },
  {
    id: 6,
    title: 'Sports Ground Booking System',
    description: 'Mobile-first system for booking and managing university sports facilities in real time.',
    longDescription: 'A ground booking management application designed for university sports facilities. Features real-time availability calendar, booking management for multiple courts, conflict detection, administrative dashboard and notification system.',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    emoji: '⚽',
    gradient: 'from-rose-600/30 to-pink-600/20',
    demoUrl: '#',
    githubUrl: 'https://github.com/Chamod-sapu/Ground-Booking-System',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState<Project | null>(null)

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden">
      <div className="orb w-96 h-96 top-0 right-0"
           style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary-500" />
            Portfolio
            <span className="w-8 h-px bg-primary-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-4 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my range — from AI/ML to full-stack web and systems programming.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              onClick={() => setSelected(project)}
              className={`group cursor-pointer glass rounded-2xl overflow-hidden card-hover border border-white/5 hover:border-primary-500/30 relative ${
                project.featured ? 'ring-1 ring-primary-500/20' : ''
              }`}
            >
              {/* Gradient header */}
              <div className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl transform group-hover:scale-125 transition-transform duration-500">
                  {project.emoji}
                </div>
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
                    ⭐ Featured
                  </span>
                )}
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-primary-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag-pill">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <button className="text-xs text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200 flex items-center gap-1">
                    View Details
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Chamod-sapu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              className="glass-strong rounded-3xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className={`h-48 bg-gradient-to-br ${selected.gradient} flex items-center justify-center relative`}>
                <div className="text-8xl">{selected.emoji}</div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-3">{selected.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selected.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selected.demoUrl !== '#' && (
                    <motion.a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      🚀 Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${selected.demoUrl !== '#' ? 'flex-1' : 'w-full'} btn-secondary text-center`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
