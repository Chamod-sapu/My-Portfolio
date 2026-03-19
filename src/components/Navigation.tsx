import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#hero',       label: 'Home'       },
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact'    },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 120

      sections.forEach((section) => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        const id = section.getAttribute('id') || ''
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass-strong shadow-2xl shadow-black/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
              <span className="text-white font-display font-bold text-lg z-10">CI</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:block text-white font-display font-semibold text-sm tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              Chamod<span className="text-primary-400">.</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-50 glass-strong rounded-2xl p-6 md:hidden shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white glass-primary'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}
              >
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
