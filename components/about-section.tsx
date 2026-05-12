"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building responsive and interactive UIs with React, Next.js, and Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating robust APIs and services with Node.js, Python, and databases",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Ensuring seamless experiences across all devices and screen sizes",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            I&apos;m a passionate developer with experience in building full-stack web applications.
            I love solving complex problems and creating intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
