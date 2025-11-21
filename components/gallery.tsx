"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-luxury-1.jpg",
    alt: "Modern luxury home in Charlotte",
    title: "Luxury Homes",
  },
  {
    id: 2,
    src: "/images/gallery-luxury-2.jpg",
    alt: "High-end residential property",
    title: "Premium Properties",
  },
  {
    id: 3,
    src: "/images/gallery-luxury-3.jpg",
    alt: "Contemporary architecture design",
    title: "Contemporary Design",
  },
  {
    id: 4,
    src: "/images/gallery-luxury-4.jpg",
    alt: "Executive suite apartment",
    title: "Executive Residences",
  },
  {
    id: 5,
    src: "/images/gallery-luxury-5.jpg",
    alt: "Penthouse with city views",
    title: "Penthouse Living",
  },
  {
    id: 6,
    src: "/images/gallery-luxury-6.jpg",
    alt: "Renovated historic property",
    title: "Historic Elegance",
  },
]

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Portfolio</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-6">Featured Properties</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing the exceptional properties we manage and market
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                  hoveredId === image.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-xl font-bold text-amber-400">{image.title}</p>
                  <p className="text-slate-300 text-sm mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
