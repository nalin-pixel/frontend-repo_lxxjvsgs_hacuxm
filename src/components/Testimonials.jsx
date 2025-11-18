import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'The programming is next-level. I hit PRs without beating up my joints.',
    name: 'Jamie L.',
    role: 'Member • 18 months',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    quote: 'The neon vibes and coaching make me actually look forward to training.',
    name: 'Chris P.',
    role: 'Member • 9 months',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    quote: 'Small groups, big energy. Booking is easy and there’s zero bro culture.',
    name: 'Tanya R.',
    role: 'Member • 2 years',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop'
  },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const item = { hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5 } } }

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(129,140,248,0.08),transparent_50%)]"/>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={container} className="text-center">
          <motion.p variants={item} className="text-cyan-300 uppercase tracking-[0.2em] text-xs md:text-sm neon-sub">Testimonials</motion.p>
          <motion.h2 variants={item} className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight neon-text">What members say</motion.h2>
          <motion.p variants={item} className="mt-4 text-white/70 max-w-2xl mx-auto">Real stories from people who train with us week after week.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }} variants={container} className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={item} className="relative rounded-2xl p-6 bg-white/5 border border-white/10 text-white overflow-hidden">
              <div className="absolute -inset-40 opacity-10 pointer-events-none bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-indigo-500 to-cyan-400 animate-[spin_12s_linear_infinite]"/>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-white/80">“{t.quote}”</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
