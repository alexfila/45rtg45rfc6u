import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="section-inner">
        <Reveal><p className="section-eyebrow" style={{ textAlign: 'center' }}>Start today</p></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Your accent deserves<br />to be heard.</h2></Reveal>
        <Reveal delay={0.2}><p className="section-sub">Download Accenta free on iOS and discover what your unique English voice is — then make it even better.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="cta-group">
            <a href="https://apps.apple.com/app/id6756681361" className="btn-app-store-official">
              <img src="/app-store-badge.svg" alt="Download on the App Store" height="54" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
