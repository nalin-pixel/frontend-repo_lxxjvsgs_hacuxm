import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Classes from './components/Classes'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen">
      <Preloader show={loading} onFinish={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Hero />
            <Classes />
            <Booking />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
