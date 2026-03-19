import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative bg-dark-900 min-h-screen overflow-x-hidden">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      {/* Global background grid */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" aria-hidden="true" />

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 py-10 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold gradient-text-animate">CI</span>
            <span className="text-gray-500 text-sm">Chamod Illangasinghe</span>
          </div>
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Built with React & Tailwind CSS ·
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Chamod-sapu" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-400 transition-colors duration-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sapumal-illangasinghe-5a031b317/" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-400 transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
