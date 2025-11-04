import React from 'react'
import { motion } from 'framer-motion'
import { User, Code2 } from 'lucide-react'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'MongoDB',
]

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
      >
        {/* Profile */}
        <div className="flex items-center gap-6">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-neutral-900">
              <User className="h-12 w-12 text-neutral-900 dark:text-white" />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">About Me</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I’m a full‑stack developer who cares about usability, performance, and craft. I enjoy
              turning complex problems into elegant, user‑friendly interfaces.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            <Code2 className="h-4 w-4" /> Skills & Tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default About
