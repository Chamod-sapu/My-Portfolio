import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { name: 'React / Next.js', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js / Express', level: 88, category: 'Backend' },
    { name: 'MongoDB / SQL', level: 85, category: 'Backend' },
    { name: 'REST APIs', level: 87, category: 'Backend' },
    { name: 'Git / GitHub', level: 93, category: 'Tools' },
    { name: 'Docker / AWS / GCP', level: 80, category: 'Tools' },
  ]

  const categories = ['Frontend', 'Backend', 'Tools']

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      custom={index}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-primary-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.3 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
