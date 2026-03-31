import Reveal from './Reveal'

const features = [
  {
    num: '01',
    title: 'Instant Accent Analysis',
    desc: 'Speak naturally and receive immediate, accurate accent identification. Our AI analyzes your pronunciation patterns in real time with deep learning models trained on thousands of speakers.',
  },
  {
    num: '02',
    title: 'AI-Generated Coaches',
    desc: 'Learn with a human-like AI coach that adapts to your interests, mood, and learning style. Every session feels personal, engaging, and tailored specifically to your progress.',
  },
  {
    num: '03',
    title: 'Smart Word Suggestions',
    desc: "No need to search for practice materials. Accenta gives you intelligent, context-aware word and sentence recommendations — the ones that actually matter for your accent.",
  },
]

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-inner">
        <Reveal className="features-header">
          <p className="section-eyebrow">Features</p>
          <h2 className="section-title">Everything you need to improve</h2>
          <p className="section-sub">Built for real learning — not gamified busywork. Every feature is designed to make your pronunciation measurably better.</p>
        </Reveal>
        <div className="features-grid">
          {features.map((f, i) => (
            <Reveal key={f.num} delay={(i + 1) * 0.1} className="feature-card">
              <div className="feature-number">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
