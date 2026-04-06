import { useRef, useState, useEffect } from 'react'

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-40px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: visible
          ? `opacity 0.7s ${delay}s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.7s ${delay}s cubic-bezier(0.21,0.47,0.32,0.98)`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}
