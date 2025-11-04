import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A data‑driven dashboard with real‑time charts, authentication, and role‑based access.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E‑commerce Storefront',
    description:
      'High‑performance storefront with product filters, cart, and Stripe checkout.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Creative Portfolio',
    description:
      'Immersive portfolio with fluid page transitions and 3D visuals.',
    tags: ['Next.js', 'Framer Motion', 'Spline'],
    github: '#',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">A selection of things I’ve designed and built.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
          >
            {/* Visual placeholder */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.35),transparent_40%)] transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="flex flex-col gap-4 p-5">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>

            {/* Subtle hover light sweep */}
            <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
