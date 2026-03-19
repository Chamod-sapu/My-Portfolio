import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Chamod-sapu',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    color: '#ffffff',
    label: 'View GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sapumal-illangasinghe-5a031b317/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: '#0077b5',
    label: 'Connect on LinkedIn',
  },
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 4000)
    }, 1800)
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bottom-[-100px] left-1/2 -translate-x-1/2"
           style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.1) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary-500" />
            Get In Touch
            <span className="w-8 h-px bg-primary-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-4 mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations and exciting projects. Drop me a message!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Intro card */}
            <motion.div variants={item} className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1"
                   style={{ background: 'linear-gradient(90deg, #6366f1, #d946ef)' }} />
              <h3 className="font-display font-bold text-white text-lg mb-3">Say Hello 👋</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to chat about tech — I'd love to hear from you!
              </p>
            </motion.div>

            {/* Contact info */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: 'Email',
                value: 'chamodsapumal007@outlook.com',
                href: 'mailto:chamodsapumal007@outlook.com',
                color: 'from-indigo-500/20 to-violet-500/10',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: 'Phone',
                value: '+94 71 961 3299',
                href: 'tel:+94719613299',
                color: 'from-fuchsia-500/20 to-pink-500/10',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: 'Location',
                value: 'Colombo, Sri Lanka 🇱🇰',
                href: '#',
                color: 'from-cyan-500/20 to-blue-500/10',
              },
            ].map((contact, i) => (
              <motion.a
                key={i}
                variants={item}
                href={contact.href}
                className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br ${contact.color} border border-white/8 hover:border-primary-500/30 transition-all duration-300 group card-hover`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0"
                     style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                  {contact.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">{contact.label}</p>
                  <p className="text-white text-sm font-medium truncate">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div variants={item} className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass hover:border-primary-500/30 text-gray-300 hover:text-white transition-all duration-300 text-xs font-medium"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1"
                 style={{ background: 'linear-gradient(90deg, #6366f1, #d946ef, #22d3ee)' }} />

            <motion.h3 variants={item} className="font-display font-bold text-white text-xl mb-6">
              Send a Message
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div variants={item}>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>

            <motion.div variants={item} className="mb-4">
              <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Project collaboration"
              />
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>

            <motion.div variants={item}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 py-4"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>✅ Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl text-center text-sm text-emerald-300"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
              >
                🎉 Thanks for reaching out! I'll get back to you as soon as possible.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
