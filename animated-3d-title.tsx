"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function Animated3DTitle() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return

      const rect = titleRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / 10
      const deltaY = (e.clientY - centerY) / 10

      titleRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${-deltaY}deg) 
        rotateY(${deltaX}deg) 
        translateZ(20px)
      `
    }

    const handleMouseLeave = () => {
      if (!titleRef.current) return
      titleRef.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0px)
      `
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const colors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-indigo-400",
    "text-purple-400",
    "text-pink-400",
  ]

  return (
    <motion.div
      ref={titleRef}
      className="text-2xl font-bold cursor-pointer select-none"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      style={{
        textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
        transformStyle: "preserve-3d",
      }}
    >
      {"Anonymous Stories".split("").map((char, index) => (
        <span
          key={index}
          className={colors[index % colors.length]}
          style={{
            display: "inline-block",
            transform: `translateZ(${index * 2}px)`,
            textShadow: `0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </motion.div>
  )
}
