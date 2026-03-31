export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-copy">© 2026 Accenta. All rights reserved.</div>
        <div className="footer-social">
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
        <div className="footer-links">
          <a href="/terms/">Terms</a>
          <a href="/privacy/">Privacy</a>
          <a href="mailto:info@accenta.io?subject=Accenta%20Contact%20Request">Contact</a>
        </div>
      </div>
    </footer>
  )
}
