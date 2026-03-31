import Reveal from './Reveal'

const accents = [
  { flag: '🇺🇸', name: 'American', desc: 'General American, Southern, New York and regional variations' },
  { flag: '🇬🇧', name: 'British', desc: 'Received Pronunciation, Cockney, Scottish, Welsh' },
  { flag: '🇦🇺', name: 'Australian', desc: 'Distinctive Australian English pronunciation' },
  { flag: '🇨🇦', name: 'Canadian', desc: 'Canadian English with unique vowel shifts' },
  { flag: '🇮🇪', name: 'Irish', desc: 'Rich, melodic Irish English from across Ireland' },
  { flag: '🇳🇿', name: 'New Zealand', desc: 'Kiwi English with distinctive vowel sounds' },
  { flag: '🇿🇦', name: 'South African', desc: 'The unique sounds of South African English' },
  { flag: '🇮🇳', name: 'Indian', desc: 'Indian English with distinctive rhythm' },
  { flag: '🌍', name: 'And More', desc: 'Nigerian, Caribbean, Filipino and more global accents' },
]

export default function Accents() {
  return (
    <section className="accents-section" id="accents">
      <div className="section-inner">
        <div className="accents-layout">
          <Reveal className="accents-sidebar">
            <p className="section-eyebrow">Accent Detection</p>
            <h2 className="section-title">16 English<br />Accents Identified</h2>
            <p className="section-sub">From General American to British RP, Australian, Irish, and beyond — Accenta's AI recognizes them all with remarkable precision.</p>
            <a href="https://apps.apple.com/app/id6756681361" className="btn-app-store-official" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              <img src="/app-store-badge.svg" alt="Download on the App Store" height="50" />
            </a>
          </Reveal>
          <div className="accent-grid">
            {accents.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3 + 1) * 0.1} className="accent-card">
                <div className="accent-flag">{a.flag}</div>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
