'use client'

import { useEffect, useState, useRef } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  delay?: number
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' '
              if (index < iteration) return text[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplayText(text)
        }

        iteration += 1 / 2
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <span className={isAnimating ? 'opacity-100' : 'opacity-0'}>
        {displayText || text.split('').map(() => ' ').join('')}
      </span>
      <span 
        className="absolute inset-0 text-cyan-400 opacity-50 translate-x-[2px]"
        style={{ clipPath: 'inset(0 0 50% 0)' }}
      >
        {displayText}
      </span>
    </span>
  )
}
