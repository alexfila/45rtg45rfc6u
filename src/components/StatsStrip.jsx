import Reveal from './Reveal'

const stats = [
  { val: '16', lbl: 'English Accents' },
  { val: 'AI', lbl: 'Powered Analysis' },
  { val: 'Free', lbl: 'on iOS' },
  { val: 'Instant', lbl: 'Results' },
]

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <Reveal key={s.val} delay={i * 0.1} className="stat-item">
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
