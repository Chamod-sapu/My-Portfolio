import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  demoUrl: string
  githubUrl: string
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration',
      longDescription: 'A comprehensive e-commerce solution built with React, Node.js, and Stripe. Features include user authentication, product management, shopping cart, and secure checkout process.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      longDescription: 'A real-time task management application with team collaboration features. Built with React, TypeScript, and Firebase for real-time updates and cloud storage.',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics platform for social media metrics',
      longDescription: 'A comprehensive dashboard for tracking social media performance across multiple platforms. Features data visualization, automated reporting, and trend analysis.',
      tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'API Integration'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      description: 'Personal health and workout tracking application',
      longDescription: 'A mobile-first fitness application that helps users track workouts, nutrition, and progress. Includes workout plans, progress charts, and achievement system.',
      tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Real-time weather information and forecasts',
      longDescription: 'A beautiful weather application providing accurate forecasts, radar maps, and weather alerts. Features location-based recommendations and historical data.',
      tags: ['React', 'API Integration', 'Geolocation', 'Charts'],
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolios',
      longDescription: 'A flexible CMS designed specifically for creative professionals to showcase their work. Features drag-and-drop interface, custom themes, and SEO optimization.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
            >
              <div className="glass-effect rounded-xl overflow-hidden h-full hover:border-primary-500 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.demoUrl}
                    className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-center hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="flex-1 px-6 py-3 rounded-full glass-effect text-gray-300 font-medium text-center hover:border-primary-500 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
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
