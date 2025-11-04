import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Rocket, Github } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg"
        >
          Building modern, performant web experiences with a focus on delightful details.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <Rocket className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
