import Reveal from './Reveal'

export default function ComingSoon() {
  return (
    <section className="coming-section" id="coming-soon">
      <div className="coming-inner">
        <Reveal className="coming-left">
          <p className="section-eyebrow">Coming Spring 2026</p>
          <h2 className="section-title">Accenta 2.0 is on its way</h2>
          <p className="section-sub">Full accent courses, handpicked AI mentors, and a built-in sentence library. Everything you need to speak like a native — in one app.</p>
          <div className="coming-chips">
            <div className="chip"><div className="chip-dot" /> American Accent</div>
            <div className="chip"><div className="chip-dot" /> British RP</div>
            <div className="chip"><div className="chip-dot" /> Australian</div>
          </div>
        </Reveal>

        <div className="coming-right">
          <Reveal delay={0.1} className="coming-card">
            <div className="coming-card-head">
              <div className="coming-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Three Full Accent Courses</h4>
            </div>
            <p>Structured, step-by-step courses for American, British, and Australian English. Learn at your own pace with guided lessons designed by accent experts.</p>
          </Reveal>

          <Reveal delay={0.2} className="coming-card">
            <div className="coming-card-head">
              <div className="coming-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4>Choose Your AI Mentor</h4>
            </div>
            <div className="mentor-list">
              {[
                { initial: 'A', name: 'Alex', desc: 'Calm, focused, patient' },
                { initial: 'K', name: 'Keisha', desc: 'Fast, energetic, motivational' },
                { initial: 'M', name: 'Mateo', desc: 'Treats you like a close friend' },
              ].map((m) => (
                <div key={m.name} className="mentor-item">
                  <div className="mentor-av">{m.initial}</div>
                  <div className="mentor-item-text">
                    <strong>{m.name}</strong>
                    <span>{m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
