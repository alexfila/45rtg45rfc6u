import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (isInView) setHasPlayed(true)
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={hasPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
