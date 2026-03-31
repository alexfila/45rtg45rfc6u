import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    title: 'Speak Naturally',
    desc: 'No reading aloud — just talk. Accenta listens to your natural speech patterns to identify your unique accent.',
  },
  {
    num: '02',
    title: 'Get Instant Results',
    desc: 'Receive detailed insights about your accent in real time. See which of 16 English accents matches yours, with confidence scores.',
  },
  {
    num: '03',
    title: 'Train with AI',
    desc: 'Work with your personal AI coach — adapted to your interests, mood, and goals — to refine your pronunciation daily.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-inner">
        <Reveal className="how-header">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">Three steps to a better accent</h2>
          <p className="section-sub">No complicated setup. Just open the app, speak naturally, and get results in seconds.</p>
        </Reveal>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i + 1) * 0.1} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
