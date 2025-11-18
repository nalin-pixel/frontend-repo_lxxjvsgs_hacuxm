import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import FullscreenMenu from './FullscreenMenu'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_40%)]"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-white font-bold text-xl tracking-tight">PulseGym</a>
          <button onClick={() => setMenuOpen(true)}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white">
            <Menu size={22} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center py-24">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
            >
              Train Hard. Move Smart.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-white/70 max-w-xl"
            >
              Elite coaching, small-group classes, and a science-backed program to help you perform at your best.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#booking" className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:brightness-110">Book a Class</a>
              <a href="#classes" className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15">Browse Classes</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10">
              <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1400&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10 text-white">
              <p className="text-sm">Over 40 classes weekly</p>
            </div>
          </motion.div>
        </div>
      </div>

      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  )
}
