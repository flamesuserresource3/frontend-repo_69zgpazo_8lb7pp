import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">Let’s Connect</h2>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">I’m open to collaborations, freelance work, and new opportunities.</p>
          </div>
          <a
            href="mailto:your@email.com"
            className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:inline-flex"
          >
            <Mail className="mr-2 h-4 w-4" /> Email me
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@email.com"
                required
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Send message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
