import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 49, perks: ['8 classes / month', 'Coach-led sessions', 'App booking'] },
  { name: 'Unlimited', price: 99, perks: ['Unlimited classes', 'Priority booking', 'Open gym access'] },
  { name: 'Elite', price: 149, perks: ['Unlimited + PT (2x/mo)', 'Movement screen', 'Priority support'] },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={container} className="text-center">
          <motion.p variants={item} className="text-cyan-300 uppercase tracking-[0.2em] text-xs md:text-sm neon-sub">Memberships</motion.p>
          <motion.h2 variants={item} className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight neon-text">Simple pricing</motion.h2>
          <motion.p variants={item} className="mt-4 text-white/70 max-w-2xl mx-auto">Choose a plan that matches your training rhythm.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }} variants={container} className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={i} variants={item} className="relative rounded-2xl p-6 bg-white/5 border border-white/10 text-white overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-40 bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-indigo-500 to-cyan-400 animate-[spin_8s_linear_infinite] opacity-20"/>
              </div>
              <div className="relative">
                <p className="text-sm text-white/60">{t.name}</p>
                <p className="mt-2 text-4xl font-extrabold"><span className="text-cyan-300">${t.price}</span><span className="text-white/60 text-base">/mo</span></p>
                <ul className="mt-4 space-y-2 text-white/80">
                  {t.perks.map((p, idx) => <li key={idx}>• {p}</li>)}
                </ul>
                <a href="#booking" className="mt-6 inline-block px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:brightness-110">Get started</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
