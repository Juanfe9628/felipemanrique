"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const fmaRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + 2, 100)
      })
    }, 120)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      if (fmaRef.current) {
        const letters = fmaRef.current.querySelectorAll(".letter")
        tl.fromTo(
          letters,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "power3.out",
          },
        )
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8",
        )
      }

      if (progressRef.current) {
        tl.fromTo(
          progressRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        )
      }
    })

    return () => {
      clearInterval(interval)
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          // Animate content fading out first
          gsap.to([fmaRef.current, subtitleRef.current, progressRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              // Then slide the entire container up like a curtain
              gsap.to(containerRef.current, {
                y: "-100%",
                duration: 1.2,
                ease: "power3.inOut",
                onComplete: () => {
                  setIsComplete(true)
                },
              })
            },
          })
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [progress])

  if (isComplete) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative text-center">
        <div
          ref={fmaRef}
          className="text-[80px] md:text-[120px] lg:text-[140px] font-thin leading-none tracking-[0.15em] mb-4"
        >
          <span className="letter inline-block">F</span>
          <span className="letter inline-block">M</span>
          <span className="letter inline-block">A</span>
        </div>

        <p ref={subtitleRef} className="text-xs md:text-sm font-normal tracking-[0.3em] text-gray-600 uppercase mb-12">
          Felipe Manrique Arquitecto
        </p>

        <div ref={progressRef} className="text-sm font-light text-gray-400 tabular-nums">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  )
}
