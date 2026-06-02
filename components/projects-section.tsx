"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Teacher Designs",
    description: "Professional teacher profile designs with modern styling and creative layouts. Perfect for educational professionals.",
    tech: ["Design", "UI/UX", "Professional"],
    image: "/projects/1.png",
    behance: "https://www.behance.net/89e5bf1f",
    isDesign: true,
  },
  {
    title: "Social Media Projects",
    description: "Engaging social media content designs and campaigns. Creative visuals that capture attention and drive engagement.",
    tech: ["Social Media", "Content Design", "Creative"],
    image: "/projects/social-media.jpg",
    behance: "https://www.behance.net/89e5bf1f",
    isDesign: true,
  },
]

export function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-semibold">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-all"
              >
                <div 
                  className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden cursor-pointer"
                  onClick={() => project.isDesign && setSelectedImage(project.image)}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary/30">{index + 1}</span>
                  )}
                  {project.isDesign && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">Click to view</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 font-semibold">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {project.isDesign && project.behance ? (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-bold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on Behance
                      </a>
                    ) : (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
