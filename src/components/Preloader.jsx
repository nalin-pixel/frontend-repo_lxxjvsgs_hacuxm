import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ show, onFinish }) {
  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => onFinish && onFinish(), 1800)
    return () => clearTimeout(t)
  }, [show, onFinish])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-2xl"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: [0.8, 1, 0.98], rotate: [ -10, 0, -2], opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
            <motion.div className="mt-6 flex gap-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } }
              }}
            >
              {[0,1,2].map(i => (
                <motion.span key={i}
                  className="w-2 h-2 rounded-full bg-white/80"
                  variants={{
                    hidden: { y: 0, opacity: 0.4 },
                    show: { y: [0,-6,0], opacity: [0.4,1,0.7] }
                  }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.12 }}
                />
              ))}
            </motion.div>
            <p className="mt-4 text-sm text-white/70 tracking-wide">Loading your experience…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
