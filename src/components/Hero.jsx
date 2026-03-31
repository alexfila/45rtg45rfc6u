import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Reveal from './Reveal'

export default function Hero() {
  const phoneRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateY = useTransform(mouseX, [-1, 1], [-12, -4])
  const rotateX = useTransform(mouseY, [-1, 1], [7, 1])

  useEffect(() => {
    if (window.innerWidth <= 1100) return
    const handleMouse = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set((e.clientX - cx) / cx)
      mouseY.set((e.clientY - cy) / cy)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section className="hero">
      <div className="hero-content">
        <Reveal>
          <div className="hero-badge">
            <span className="badge-dot" />
            AI Accent Coaching · Free on iOS
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1>
            Speak Like<br />
            <span className="accent-line">a Native.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="hero-desc">
            Identify your English accent instantly, then train with AI coaches to sound naturally fluent — American, British, or Australian.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href="https://apps.apple.com/app/id6756681361" className="btn-app-store-official">
              <img src="/app-store-badge.svg" alt="Download on the App Store" height="54" />
            </a>
            <a href="#how-it-works" className="btn-ghost">
              How it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-social">
            <span>Follow us</span>
            <a href="https://www.instagram.com/accentaio/" target="_blank" rel="noopener noreferrer">
              <img src="/insta_green.png" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@accentaio" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok_green.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@accentaio" target="_blank" rel="noopener noreferrer">
              <img src="/youtube_green.png" alt="YouTube" />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="hero-visual">
        <div className="phone-scene">
          <div className="float-card float-card-left">
            <div className="fc-label">Accent detected</div>
            <div className="fc-value">British RP</div>
            <div className="fc-sub">94% confidence</div>
          </div>
          <div className="float-card float-card-right">
            <div className="float-stars">★★★★★</div>
            <div className="fc-value">4.9 rating</div>
            <div className="fc-sub">App Store</div>
          </div>
          <motion.div
            ref={phoneRef}
            className="phone-shell"
            style={{
              rotateY,
              rotateX,
              transformPerspective: 1200,
            }}
          >
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-status">
                <span>9:41</span>
                <span>100%</span>
              </div>
              <div className="phone-app-icon">
                <img src="/websiteLogo.png" alt="Accenta" />
              </div>
              <div className="phone-app-name">Accenta</div>
              <div className="phone-prompt">Speak naturally to begin</div>
              <div className="waveform">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="wave-bar" />
                ))}
              </div>
              <div className="phone-result-card">
                <div className="result-label">Detected Accent</div>
                <div className="result-flag">🇬🇧</div>
                <div className="result-accent">British RP</div>
                <div className="result-confidence">94% confidence</div>
              </div>
              <div className="phone-mentor-row">
                <div className="mentor-info">
                  <div className="mentor-avatar">A</div>
                  <div>
                    <div className="mentor-name">Alex</div>
                    <div className="mentor-tag">AI Coach</div>
                  </div>
                </div>
                <div className="mentor-status" />
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}
