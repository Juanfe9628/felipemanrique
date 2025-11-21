"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isOverAbout, setIsOverAbout] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      const aboutSection = target.closest("#about")
      setIsOverAbout(!!aboutSection)

      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  if (!isDesktop) return null

  return (
    <div ref={cursorRef} className={`custom-cursor ${isHovering ? "hover" : ""} ${isOverAbout ? "over-about" : ""}`} />
  )
}
