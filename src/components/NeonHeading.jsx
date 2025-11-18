import { motion } from 'framer-motion'

export default function NeonHeading({ lines = [], align = 'center', className = '' }){
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
  const child = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5 } } }

  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
      className={`text-4xl md:text-5xl font-extrabold text-white tracking-tight ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {lines.map((line, idx) => (
        <motion.span key={idx} variants={child} className="block neon-text">
          {line}
        </motion.span>
      ))}
    </motion.h2>
  )
}
