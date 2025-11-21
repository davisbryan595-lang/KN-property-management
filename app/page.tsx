"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { products } from "@/lib/products"
import ProductCard from "@/components/ecommerce/product-card"
import { Star, Zap, Shield, Users } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 overflow-hidden">
      <ScrollProgress />
      <Navbar isScrolled={isScrolled} />
      <Hero />

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Featured Services</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
              Premium Solutions for Your Properties
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive range of property management services designed for serious investors
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              onClick={() => router.push("/products")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3 font-semibold text-lg"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Why KN Property Management
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50">Why Our Clients Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Professional Excellence",
                description: "15+ years of proven expertise in property management",
              },
              {
                icon: Zap,
                title: "24/7 Support",
                description: "Round-the-clock emergency response and support",
              },
              {
                icon: Users,
                title: "Personal Service",
                description: "White-glove service from our experienced team",
              },
              {
                icon: Star,
                title: "Proven Results",
                description: "500+ properties managed with 4.9-star ratings",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-amber-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-50 mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Client Success Stories
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Thompson",
                role: "Real Estate Investor",
                content:
                  "KN Property Management transformed my portfolio. Their attention to detail and professionalism is unmatched.",
                rating: 5,
              },
              {
                name: "Sarah Mitchell",
                role: "Property Owner",
                content: "The AirBnB concierge service increased my rental income by 40%. Best investment I've made.",
                rating: 5,
              },
              {
                name: "David Chen",
                role: "Multi-Property Landlord",
                content: "After 10 years of self-management, working with KN is night and day. Highly recommend.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl border border-slate-800 p-8 hover:border-amber-400 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-serif text-lg font-bold text-slate-50">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
            Ready to Elevate Your Investment?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join 500+ satisfied investors and property owners who trust KN Property Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/products")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3 font-semibold text-lg"
            >
              Explore Services
            </Button>
            <a
              href="tel:704-858-3665"
              className="bg-slate-900 border border-slate-700 text-amber-400 hover:bg-slate-800 px-8 py-3 font-semibold text-lg rounded-lg transition-colors"
            >
              Call 704-858-3665
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
