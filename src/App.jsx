import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Sun, Moon, Github } from 'lucide-react'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Initialize from system preference or saved choice
    const saved = localStorage.getItem('theme')
    if (saved) {
      setDark(saved === 'dark')
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">Your Name</a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#about" className="hidden text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:inline">
              About
            </a>
            <a href="#projects" className="hidden text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:inline">
              Projects
            </a>
            <a href="#contact" className="hidden text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:inline">
              Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-1.5 text-sm transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
            >
              <Github className="h-4 w-4" />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-1.5 text-sm transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            Built with React, Tailwind CSS, Framer Motion, and Spline.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
