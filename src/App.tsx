import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`nav a[href*=${sectionId}]`)?.classList.add('active')
        } else {
          document.querySelector(`nav a[href*=${sectionId}]`)?.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Chamod Illangasinghe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
