import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

export default function FullscreenMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Classes', href: '#classes' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Book Now', href: '#booking' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button aria-label="Close menu" onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white">
            <X size={24} />
          </button>

          <div className="h-full w-full flex flex-col items-center justify-center">
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-5 text-center"
            >
              {links.map(l => (
                <motion.li key={l.href} variants={item}>
                  <a href={l.href}
                    onClick={onClose}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-white/70"
            >
              Open 6am – 11pm daily • 24/7 Access for members
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
