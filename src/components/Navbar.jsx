import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.div
      className="navbar-wrap"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <nav>
        <a href="#" className="nav-logo">
          <img src="/websiteLogo.png" alt="Accenta" />
          <span>Accenta</span>
        </a>
        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#accents">Accents</a>
          <a href="#coming-soon">Version 2.0</a>
        </div>
        <div className="nav-cta">
          <a href="https://apps.apple.com/app/id6756681361">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M17.05 20.28C16.03 21.23 14.96 21.08 13.95 20.59C12.89 20.09 11.92 20.07 10.79 20.59C9.37 21.23 8.59 21.05 7.69 20.28C2.78 15.25 3.51 7.59 9.05 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.09C19.01 17.6 18.27 19.1 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="currentColor" />
            </svg>
            Download Free
          </a>
        </div>
      </nav>
    </motion.div>
  )
}
