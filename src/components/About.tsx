import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    icon: '🎓',
    title: 'Education',
    description: 'B.Sc. (Hons) in Computer Engineering at University of Ruhuna, Sri Lanka.',
    color: 'from-indigo-500/20 to-violet-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: '💼',
    title: 'Industry Experience',
    description: 'Intern Software Engineer at Commercial Bank PLC — microservices, Spring Boot & React.',
    color: 'from-fuchsia-500/20 to-pink-500/10',
    border: 'border-fuchsia-500/20',
  },
  {
    icon: '🏆',
    title: 'Leadership',
    description: 'Vice President, Sports Council & Vice Captain of University Hockey Team.',
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: '🌱',
    title: 'Currently Learning',
    description: 'Deep-diving into cloud architecture, AI/ML and modern system design patterns.',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
]

const stats = [
  { value: '7+',   label: 'Projects', sub: 'Completed' },
  { value: '1+',   label: 'Year',     sub: 'Experience' },
  { value: '100%', label: 'Commit',   sub: 'Dedication' },
  { value: '∞',    label: 'Time',     sub: 'Curiosity' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const item = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      {/* Subtle blob */}
      <div className="orb w-96 h-96 top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
           style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary-500" />
            About Me
            <span className="w-8 h-px bg-primary-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-4 mb-4">
            The Person Behind <span className="text-gradient">the Code</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate engineer who believes in building software that matters.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Main bio card */}
          <motion.div
            variants={item}
            className="glass rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden card-hover"
          >
            <div className="absolute top-0 left-0 w-full h-1"
                 style={{ background: 'linear-gradient(90deg, #6366f1, #d946ef, #22d3ee)' }} />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-primary-300 glass-primary mb-6">
                  const chamod = &#123; ... &#125;
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  I'm a <span className="text-white font-semibold">Computer Engineering undergraduate</span> at
                  the University of Ruhuna with a deep passion for building scalable, real-world applications.
                  I enjoy bridging the gap between elegant code and practical problem solving.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  My internship at <span className="text-white font-medium">Commercial Bank PLC</span> gave
                  me hands-on experience with microservices, core Java, Spring Boot, React, and enterprise
                  deployment environments — sharpening both my technical depth and professional acumen.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Beyond code, I lead teams — as Vice President of the Sports Council and Vice Captain of
                  the University Hockey Team — qualities that make me a stronger engineer and collaborator.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Quote */}
                <div className="glass-primary rounded-2xl p-6 relative">
                  <svg className="w-8 h-8 text-primary-400/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-300 italic text-base leading-relaxed">
                    "First, solve the problem. Then, write the code."
                  </p>
                  <p className="text-primary-400 text-sm mt-3 font-medium">— John Johnson</p>
                </div>

                {/* Key facts */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                    { label: 'Focus', value: 'Full-Stack & AI' },
                    { label: 'Status', value: 'Open to work ✅' },
                    { label: 'Coffee', value: 'Required ☕' },
                  ].map((fact) => (
                    <div key={fact.label} className="glass rounded-xl p-3">
                      <p className="text-gray-500 text-xs mb-1">{fact.label}</p>
                      <p className="text-white text-sm font-medium">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={item}
                className={`rounded-2xl p-6 bg-gradient-to-br ${h.color} border ${h.border} card-hover`}
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h4 className="font-display font-bold text-white mb-2">{h.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="font-display text-4xl font-extrabold gradient-text-animate mb-1 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
