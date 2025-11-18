export default function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PulseGym. All rights reserved.</p>
        <p>Made with sweat and science.</p>
      </div>
    </footer>
  )
}
