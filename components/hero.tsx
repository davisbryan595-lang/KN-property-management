"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-charlotte-luxury.jpg"
          alt="Luxury Charlotte homes at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 transition-all duration-1000 opacity-100">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <div className="mb-6 inline-block">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
              Charlotte's Premier Concierge
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
            KN Property
            <span className="block text-amber-400">Management</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            We Don't Manage Properties. <span className="text-amber-400 font-semibold">We Elevate Lifestyles.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-all font-semibold text-lg shadow-lg hover:shadow-amber-400/50"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-slate-50 text-slate-50 rounded-lg hover:bg-slate-50/10 transition-all font-semibold text-lg"
            >
              View Packages
            </a>
          </div>

          {/* Serving Areas */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-slate-300 text-sm">
            <div>📍 Charlotte, NC</div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div>📍 Winston-Salem</div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div>📍 Surrounding Counties</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 z-20 animate-bounce">
          <ChevronDown size={32} className="text-amber-400" />
        </div>
      </div>
    </section>
  )
}
