import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    year: '2025 – 2026',
    title: 'Intern Software Engineer',
    company: 'Commercial Bank PLC',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    emoji: '🏦',
    gradient: 'from-indigo-500 to-violet-500',
    description: 'Worked on enterprise-grade banking software in a microservices environment. Contributed to backend systems using core Java and Spring Boot, fixed Vulnerability Assessment (VA) security issues, and developed frontend components with React within the AEE deployment platform.',
    achievements: [
      'Contributed to 2 major product releases in a high-stakes banking environment',
      'Fixed critical security vulnerabilities identified in VA assessments',
      'Built reusable React components integrated into the bank\'s customer portal',
      'Participated in agile sprints, daily standups and cross-team code reviews',
      'Gained hands-on experience with AEE enterprise deployment pipeline',
    ],
    skills: ['Java', 'Spring Boot', 'React', 'Microservices', 'REST APIs', 'AEE'],
  },
]

const education = [
  {
    year: '2022 – Present',
    degree: 'B.Sc. (Hons) in Computer Engineering',
    school: 'University of Ruhuna',
    location: 'Matara, Sri Lanka',
    emoji: '🎓',
    gradient: 'from-cyan-500 to-blue-500',
    highlights: [
      'Full-stack web development, data structures & algorithms',
      'Machine learning, operating systems & computer networks',
      'Vice President — University Sports Council',
      'Vice Captain — University Hockey Team',
    ],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const item = {
    hidden:  { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="experience" className="py-24 md:py-36 relative overflow-hidden">
      <div className="orb w-80 h-80 top-1/3 right-0 translate-x-1/3"
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
            <span className="w-8 h-px bg-accent-500" />
            Career Path
            <span className="w-8 h-px bg-accent-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-4 mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My journey from classroom to enterprise — shaped by curiosity, leadership and real-world challenges.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                   style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
                💼
              </div>
              <h3 className="font-display font-bold text-xl text-white">Work Experience</h3>
            </div>

            <motion.div variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={item} className="relative pl-8 pb-8">
                  {/* Timeline line */}
                  <div className="absolute left-3 top-4 bottom-0 w-px"
                       style={{ background: 'linear-gradient(180deg, #6366f1, transparent)' }} />

                  {/* Dot */}
                  <div className={`timeline-dot -left-1 top-3`} />

                  <div className="glass rounded-2xl p-7 hover:border-primary-500/30 transition-all duration-300 card-hover">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${exp.gradient} opacity-80`}>
                          {exp.emoji}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-white text-lg">{exp.title}</h4>
                          <p className="text-primary-300 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-white"
                              style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
                          {exp.type}
                        </span>
                        <span className="font-mono text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <h5 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-primary-500" />
                        Key Contributions
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                            <svg className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span key={s} className="tag-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                   style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1)' }}>
                🎓
              </div>
              <h3 className="font-display font-bold text-xl text-white">Education</h3>
            </div>

            {education.map((edu, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute left-3 top-4 bottom-0 w-px"
                     style={{ background: 'linear-gradient(180deg, #22d3ee, transparent)' }} />
                <div className="absolute -left-1 top-3 w-4 h-4 rounded-full border-4 border-dark-900 z-10"
                     style={{ background: 'linear-gradient(135deg, #22d3ee, #6366f1)', boxShadow: '0 0 20px rgba(34,211,238,0.6)' }} />

                <div className="glass rounded-2xl p-7 card-hover hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${edu.gradient} opacity-80`}>
                        {edu.emoji}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white text-lg">{edu.degree}</h4>
                        <p className="text-cyan-300 font-medium">{edu.school}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full h-fit">
                      {edu.year}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
