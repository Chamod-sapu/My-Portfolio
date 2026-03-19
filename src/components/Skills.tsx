import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Skill {
  name: string
  icon: string
  category: string
  color: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React',        icon: '⚛️',  category: 'Frontend',  color: '#61dafb' },
  { name: 'Next.js',      icon: '▲',   category: 'Frontend',  color: '#ffffff' },
  { name: 'TypeScript',   icon: 'TS',  category: 'Frontend',  color: '#3178c6' },
  { name: 'JavaScript',   icon: 'JS',  category: 'Frontend',  color: '#f7df1e' },
  { name: 'Tailwind CSS', icon: '💨',  category: 'Frontend',  color: '#38bdf8' },
  { name: 'HTML / CSS',   icon: '🌐',  category: 'Frontend',  color: '#e34f26' },

  // Backend
  { name: 'Node.js',      icon: '🟢',  category: 'Backend',   color: '#68a063' },
  { name: 'Spring Boot',  icon: '🍃',  category: 'Backend',   color: '#6db33f' },
  { name: 'Java',         icon: '☕',  category: 'Backend',   color: '#f89820' },
  { name: 'Python',       icon: '🐍',  category: 'Backend',   color: '#3776ab' },
  { name: 'REST APIs',    icon: '🔗',  category: 'Backend',   color: '#6366f1' },
  { name: 'GraphQL',      icon: '💜',  category: 'Backend',   color: '#e10098' },

  // Data & AI
  { name: 'MongoDB',      icon: '🍃',  category: 'Data & AI', color: '#4db33d' },
  { name: 'PostgreSQL',   icon: '🐘',  category: 'Data & AI', color: '#336791' },
  { name: 'NLP / ML',     icon: '🤖',  category: 'Data & AI', color: '#ff6f00' },
  { name: 'Pandas',       icon: '🐼',  category: 'Data & AI', color: '#150458' },

  // DevOps & Tools
  { name: 'Git / GitHub', icon: '🐙',  category: 'Tools',     color: '#f05032' },
  { name: 'Docker',       icon: '🐳',  category: 'Tools',     color: '#2496ed' },
  { name: 'AWS / GCP',    icon: '☁️',  category: 'Tools',     color: '#ff9900' },
  { name: 'Linux',        icon: '🐧',  category: 'Tools',     color: '#fcc624' },

  // Low-level
  { name: 'C / C++',      icon: '⚙️',  category: 'Systems',   color: '#00599c' },
  { name: 'DSA',          icon: '📊',  category: 'Systems',   color: '#6366f1' },
]

const categories = ['All', 'Frontend', 'Backend', 'Data & AI', 'Tools', 'Systems']

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }

  const item = {
    hidden:  { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden">
      {/* Orb */}
      <div className="orb w-80 h-80 bottom-20 left-0 -translate-x-1/2"
           style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-accent-500" />
            My Arsenal
            <span className="w-8 h-px bg-accent-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-4 mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A curated stack of tools and technologies I work with to build exceptional software.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-400 hover:text-white glass hover:glass-primary'
              }`}
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #6366f1, #d946ef)' }
                : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group skill-badge flex-col gap-1 py-4 rounded-2xl text-center"
              style={{ minHeight: 90 }}
            >
              <div
                className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-125"
                style={skill.icon.length <= 2 && !/[\u{1F000}-\u{1FFFF}]/u.test(skill.icon)
                       ? { color: skill.color, fontFamily: 'JetBrains Mono', fontSize: '16px', fontWeight: 700 }
                       : {}}
              >
                {skill.icon}
              </div>
              <div className="text-xs font-medium text-center leading-tight">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-white text-center mb-6">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'React / Next.js',     level: 90, color: '#6366f1' },
              { label: 'Node.js / Express',   level: 85, color: '#d946ef' },
              { label: 'Java / Spring Boot',  level: 80, color: '#22d3ee' },
              { label: 'Python / ML',         level: 78, color: '#f59e0b' },
              { label: 'TypeScript',          level: 88, color: '#6366f1' },
              { label: 'SQL / NoSQL DBs',     level: 82, color: '#d946ef' },
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-300 font-medium">{skill.label}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
