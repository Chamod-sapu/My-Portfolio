import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Who I Am
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m a passionate Computer Engineering undergraduate at the University of Ruhuna with a strong interest in full-stack development, cloud computing, and DevOps. I enjoy building scalable, real-world applications and have hands-on industry experience from my internship at Commercial Bank PLC, where I worked with microservices, core Java, Spring Boot, React, and enterprise deployment environments.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Beyond technical skills, I bring strong leadership and teamwork experience through my roles as Vice President of the Sports Council and Vice Captain of the University Hockey team. I’m continuously learning new technologies, exploring modern architectures, and striving to create impactful software solutions that combine clean design, performance, and reliability.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: '7+', label: 'Projects Completed' },
              { number: '1+', label: 'Years Experience' },
              { number: '2+', label: 'Happy Clients' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 glass-effect rounded-xl hover:border-primary-500 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
