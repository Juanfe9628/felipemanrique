"use client"

import { useEffect, useState, useRef } from "react"

const portfolioImages = [
  "/images/bdm-01.webp",
  "/images/bdm-02.webp",
  "/images/bdm-03.webp",
  "/images/bdm-04.webp",
  "/images/bdm-05.webp",
  "/images/bdm-06.webp",
  "/images/csl-01.webp",
  "/images/csl-02.webp",
  "/images/csl-03.webp",
  "/images/csl-04.webp",
  "/images/csl-05.webp",
  "/images/csl-06.webp",
  "/images/scampia-01.webp",
  "/images/scampia-02.webp",
  "/images/scampia-03.webp",
  "/images/scampia-04.webp",
  "/images/carlo-urbani-01.webp",
  "/images/carlo-urbani-02.webp",
  "/images/carlo-urbani-03.webp",
  "/images/carlo-urbani-04.webp",
  "/images/sweet-contrast-01.webp",
  "/images/sweet-contrast-02.webp",
  "/images/sweet-contrast-03.webp",
  "/images/sweet-contrast-04.webp",
  "/images/villa-m-01.webp",
  "/images/villa-m-02.webp",
  "/images/villa-m-03.webp",
  "/images/villa-m-04.webp",
  "/images/villa-m-05.webp",
  "/images/villa-m-06.webp",
  "/images/lake-view-01.webp",
  "/images/lake-view-02.webp",
  "/images/lake-view-03.webp",
  "/images/lake-view-04.webp",
  "/images/lake-view-05.webp",
  "/images/classic-boundary-01.webp",
  "/images/classic-boundary-02.webp",
  "/images/classic-boundary-03.webp",
  "/images/classic-boundary-04.webp",
  "/images/classic-boundary-05.webp",
  "/images/classic-boundary-06.webp",
]

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

    // Start preloading images immediately
    portfolioImages.forEach((src) => {
      const img = new Image()
      img.src = src
      // Images load in background, no need to wait
    })

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
