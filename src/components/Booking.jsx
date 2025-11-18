import { useEffect, useState } from 'react'

export default function Booking() {
  const [classes, setClasses] = useState([])
  const [form, setForm] = useState({ class_id: '', name: '', email: '', phone: '', notes: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchClasses = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/classes`)
      const data = await res.json()
      setClasses(data)
    }
    fetchClasses()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || 'Failed to book')
      }
      setMessage('✅ Booking confirmed! Check your email for details.')
      setForm({ class_id: '', name: '', email: '', phone: '', notes: '' })
    } catch (e) {
      setMessage(`❌ ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book your spot</h2>
        <p className="text-white/60 mt-2">Reserve a seat in an upcoming class. Limited spots available.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <select required value={form.class_id} onChange={e=>setForm({ ...form, class_id: e.target.value })}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3">
            <option value="">Select a class…</option>
            {classes.map(c => (
              <option key={c._id} value={c._id}>{c.title} — {new Date(c.schedule_iso).toLocaleString()}</option>
            ))}
          </select>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })}
              className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 placeholder-white/40"/>
            <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 placeholder-white/40"/>
          </div>
          <input placeholder="Phone (optional)" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 placeholder-white/40"/>
          <textarea placeholder="Notes" value={form.notes} onChange={e=>setForm({ ...form, notes: e.target.value })}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 placeholder-white/40" rows={4} />
          <button disabled={loading} className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:brightness-110 disabled:opacity-60">
            {loading ? 'Booking…' : 'Confirm Booking'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-white/80">{message}</p>
        )}
      </div>
    </section>
  )
}
