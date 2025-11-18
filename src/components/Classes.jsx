import { useEffect, useState } from 'react'

export default function Classes() {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/classes`)
        const data = await res.json()
        setClasses(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchClasses()
  }, [])

  return (
    <section id="classes" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Classes</h2>
        <p className="text-white/60 mt-2 max-w-2xl">Hand-picked sessions designed to challenge different energy systems and movement patterns.</p>

        {loading ? (
          <p className="text-white/60 mt-10">Loading classes…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {classes.map(c => (
              <div key={c._id} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-video overflow-hidden">
                  <img src={c.image_url || 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop'} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <span className="text-white/60">{c.duration_minutes}m</span>
                  </div>
                  <p className="text-white/70 mt-2 line-clamp-2">{c.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                    <span>Coach {c.coach}</span>
                    <span>{new Date(c.schedule_iso).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
