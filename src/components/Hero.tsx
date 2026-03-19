import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const typedRoles = [
  'Computer Engineer',
  'Full-Stack Developer',
  'AI & ML Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
]

const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = typedRoles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex))
        setCharIndex((c) => c + 1)
        if (charIndex === currentRole.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1800)
        }
      }, 80)
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex))
        setCharIndex((c) => c - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % typedRoles.length)
        }
      }, 40)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] top-[-150px] left-[-200px] animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)' }} />
      <div className="orb w-[500px] h-[500px] bottom-[-100px] right-[-150px] animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.2) 0%, transparent 70%)', animationDelay: '-2s' }} />
      <div className="orb w-[300px] h-[300px] top-[30%] right-[10%]"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }} />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-primary-300 text-sm font-medium border border-primary-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-center mb-6"
          >
            <h1 className="font-display leading-tight">
              <span className="block text-5xl md:text-7xl xl:text-8xl font-extrabold text-white mb-2">
                Hi, I'm
              </span>
              <span className="block text-5xl md:text-7xl xl:text-8xl font-extrabold gradient-text-animate pb-2">
                Chamod Illangasinghe
              </span>
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 text-xl md:text-2xl text-gray-300 font-light">
              <span className="text-gray-500">〈</span>
              <span className="font-mono font-medium text-primary-300 min-w-[280px] text-center">
                {displayText}
                <span className="cursor-blink text-accent-400 ml-0.5">|</span>
              </span>
              <span className="text-gray-500">〉</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Pursuing a Software Engineering degree at the{' '}
            <span className="text-white font-medium">University of Ruhuna</span>,
            passionate about building scalable applications that make a difference.
            Based in 🇱🇰 Sri Lanka.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </motion.a>
            <motion.a
              href="https://github.com/Chamod-sapu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: '7+', label: 'Projects' },
              { value: '1+', label: 'Year Experience' },
              { value: '3+', label: 'Tech Stacks' },
              { value: '∞', label: 'Passion' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
