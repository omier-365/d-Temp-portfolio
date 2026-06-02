"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
            <Image
              src="/images/profile.png"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-balance"
        >
          <span className="text-primary font-bold">مرحبا عميلي العزيز</span>
          <span className="ml-3 inline-block">❤️</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            احب تحويل افكار عملائي الى مشاريع موجودة على ارض الواقع
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-bold">
            سايبلك نموذج التواصل تحت 👇
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all hover:shadow-glow"
          >
            عرض أعمالي
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border hover:border-primary text-foreground font-bold rounded-lg transition-all"
          >
            تواصل معي
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:myrahmd860@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2 font-bold">اسحب لأسفل</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
