import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    // {
    //   year: '2023 - Present',
    //   title: 'Senior Full-Stack Developer',
    //   company: 'Tech Innovators Inc.',
    //   description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.',
    //   achievements: [
    //     'Reduced application load time by 60% through optimization',
    //     'Led migration to microservices architecture',
    //     'Implemented CI/CD pipeline reducing deployment time by 75%'
    //   ]
    // },
    // {
    //   year: '2021 - 2023',
    //   title: 'Full-Stack Developer',
    //   company: 'Digital Solutions Co.',
    //   description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create exceptional user experiences.',
    //   achievements: [
    //     'Built 15+ successful client projects',
    //     'Improved code quality with comprehensive testing',
    //     'Established component library used across projects'
    //   ]
    // },
    // {
    //   year: '2019 - 2021',
    //   title: 'Frontend Developer',
    //   company: 'Creative Web Studio',
    //   description: 'Created responsive, interactive websites and web applications. Worked closely with designers to bring creative visions to life.',
    //   achievements: [
    //     'Delivered 20+ responsive websites',
    //     'Introduced modern frontend tooling and workflows',
    //     'Increased client satisfaction scores by 40%'
    //   ]
    // },
    {
      year: '2025 - 2026',
      title: 'Intern Software Engineer',
      company: 'Commercial Bank PLC',
      description: 'Gained hands-on experience in microservices architecture and core Java development, contributing to the design and improvement of backend systems. Worked on VA (Vulnerability Assessment) issue fixes to enhance system security and stability. Assisted in frontend development tasks, ensuring seamless user experiences. Additionally, gained exposure to the AEE deployment platform, supporting efficient application deployment and maintenance processes.',
      achievements: [
        'Contributed to 2 product launches',
        'Developed reusable UI components',
        'Participated in daily standups and sprint planning'
      ]
    }
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="md:w-1/2 pl-16 md:pl-0">
                <div
                  className={`glass-effect rounded-xl p-6 hover:border-primary-500 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-gray-950"
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-3">
                    {exp.year}
                  </div>

                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-accent-500 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
