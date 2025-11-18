"use client"

import { useEffect, useState, useRef } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("loadingScreenShown")
    if (!hasShown) {
      setShouldShow(true)
      sessionStorage.setItem("loadingScreenShown", "true")
    } else {
      setIsComplete(true)
    }
  }, [])

  useEffect(() => {
    if (!shouldShow) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + 2, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [shouldShow])

  useEffect(() => {
    if (progress === 100 && shouldShow) {
      const timer = setTimeout(() => {
        setFadeOut(true)
        
        setTimeout(() => {
          setIsComplete(true)
        }, 1700) // Match total animation duration
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [progress, shouldShow])

  if (isComplete) return null

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-transform duration-1200 ease-in-out ${
        fadeOut ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
    >
      <div className={`relative text-center transition-all duration-500 ${
        fadeOut ? 'opacity-0 -translate-y-5' : 'opacity-100 translate-y-0'
      }`}>
        <div className="text-[80px] md:text-[120px] lg:text-[140px] font-thin leading-none tracking-[0.15em] mb-4">
          <span 
            className="inline-block animate-fade-up opacity-0"
            style={{ 
              animation: 'fadeUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              animationDelay: '0ms'
            }}
          >
            F
          </span>
          <span 
            className="inline-block animate-fade-up opacity-0"
            style={{ 
              animation: 'fadeUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              animationDelay: '150ms'
            }}
          >
            M
          </span>
          <span 
            className="inline-block animate-fade-up opacity-0"
            style={{ 
              animation: 'fadeUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              animationDelay: '300ms'
            }}
          >
            A
          </span>
        </div>

        <p 
          className="text-xs md:text-sm font-normal tracking-[0.3em] text-gray-600 uppercase mb-12 opacity-0"
          style={{ 
            animation: 'fadeUp 1.2s cubic-bezier(0.33, 1, 0.68, 1) forwards',
            animationDelay: '700ms'
          }}
        >
          Felipe Manrique Arquitecto
        </p>

        <div 
          className="text-sm font-light text-gray-400 tabular-nums opacity-0"
          style={{ 
            animation: 'fadeIn 1s cubic-bezier(0.33, 1, 0.68, 1) forwards',
            animationDelay: '700ms'
          }}
        >
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  )
}
