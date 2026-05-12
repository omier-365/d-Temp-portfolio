"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center">
              {/* Outer glow ring */}
              <motion.div
                className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.6] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Pulsing rings */}
              <motion.div
                className="absolute w-52 h-52 md:w-72 md:h-72 rounded-full border-2 border-blue-500/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.3, 1.5], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-52 h-52 md:w-72 md:h-72 rounded-full border border-blue-400/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 1.4], opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              />

              {/* Logo container */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring", 
                  stiffness: 80,
                  damping: 12
                }}
              >
                {/* Glow behind logo */}
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 60%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo image */}
                <motion.div
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    background: "transparent",
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain drop-shadow-2xl scale-110"
                    priority
                    style={{
                      mixBlendMode: "lighten",
                    }}
                  />
                  
                  {/* Eye glow effect overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse 15% 8% at 38% 52%, rgba(59,130,246,0.8) 0%, transparent 100%), radial-gradient(ellipse 15% 8% at 62% 52%, rgba(59,130,246,0.8) 0%, transparent 100%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  />
                </motion.div>
              </motion.div>

              {/* Text animation */}
              <motion.div
                className="mt-8 text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.h1
                  className="text-2xl md:text-3xl font-bold tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Graphic Designer
                  </span>
                </motion.h1>

                <motion.p
                  className="text-gray-400 mt-2 text-sm md:text-base tracking-widest uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Precision & Creativity
                </motion.p>
              </motion.div>

              {/* Loading bar */}
              <motion.div
                className="mt-10 w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
