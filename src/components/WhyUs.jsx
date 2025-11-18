import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Dumbbell, Clock, HeartPulse, Zap } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Elite Programming',
    desc: 'Periodized plans that balance strength, power, and conditioning for sustainable progress.'
  },
  {
    icon: ShieldCheck,
    title: 'Coach-Led Safety',
    desc: 'Small groups with certified coaches who prioritize form, safety, and intent.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    desc: 'Early morning to late-night sessions with fast, mobile-friendly booking.'
  },
  {
    icon: HeartPulse,
    title: 'Recovery Built-In',
    desc: 'Mobility, breathwork, and recovery tools to help you train hard and bounce back.'
  },
  {
    icon: Sparkles,
    title: 'Modern Space',
    desc: 'Airy, neon-accented facility with premium equipment and clean design.'
  },
  {
    icon: Zap,
    title: 'Results Focused',
    desc: 'Metrics that matter: strength, endurance, movement quality, and consistency.'
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-cyan-500/10 blur-3xl"/>
        <div className="absolute -bottom-40 right-1/3 w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 blur-3xl"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center"
        >
          <motion.p variants={item} className="text-cyan-300 uppercase tracking-[0.2em] text-xs md:text-sm neon-sub">Why choose us</motion.p>
          <motion.h2 variants={item} className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight neon-text">
            Performance-first. Experience-led.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-white/70 max-w-2xl mx-auto">
            We blend science-backed training with an elevated atmosphere so you can push hard—and enjoy the process.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 text-white group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-40 bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-indigo-500 to-cyan-400 animate-[spin_6s_linear_infinite] opacity-20"/>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/15 border border-cyan-300/20 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                  <f.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold neon-text-soft">{f.title}</h3>
                  <p className="text-white/70 mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
