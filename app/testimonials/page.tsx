"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Real Estate Investor",
      image: "/placeholder.svg",
      content:
        "KN Property Management transformed my portfolio. Their attention to detail and professionalism is unmatched. I've increased my rental income by 40% since partnering with them.",
      rating: 5,
      property: "Charlotte, NC - Multi-family Portfolio",
    },
    {
      name: "Sarah Mitchell",
      role: "Property Owner",
      image: "/placeholder.svg",
      content:
        "The AirBnB concierge service increased my short-term rental income significantly. Best investment I've made for my property. The team's professionalism and communication are exceptional.",
      rating: 5,
      property: "Winston-Salem, NC - Luxury Vacation Rental",
    },
    {
      name: "David Chen",
      role: "Multi-Property Landlord",
      image: "/placeholder.svg",
      content:
        "After 10 years of self-managing my properties, working with KN is night and day. The stress relief alone is worth it, plus I'm making more money. Highly recommend to any serious investor.",
      rating: 5,
      property: "Charlotte & Winston-Salem - 8 Properties",
    },
    {
      name: "Jennifer Reynolds",
      role: "Out-of-State Investor",
      image: "/placeholder.svg",
      content:
        "Managing properties remotely was a nightmare until I found KN. Their transparency, communication, and hands-on approach give me complete peace of mind. They truly care about their clients.",
      rating: 5,
      property: "Charlotte, NC - Out-of-State Investment",
    },
    {
      name: "Robert Williams",
      role: "Commercial Property Owner",
      image: "/placeholder.svg",
      content:
        "Outstanding service. The team handles everything from tenant relations to maintenance with professionalism and efficiency. Their investment consulting helped me optimize my portfolio strategy.",
      rating: 5,
      property: "Charlotte - Commercial & Residential Mix",
    },
    {
      name: "Angela Martinez",
      role: "Real Estate Portfolio Manager",
      image: "/placeholder.svg",
      content:
        "Working with KN Property Management has been transformational for my business. Their expertise in market analysis and investment strategy is invaluable. A true partner in success.",
      rating: 5,
      property: "Multi-State Portfolio Management",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled={true} />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-50 mb-6">Client Testimonials</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from property owners and investors who have transformed their portfolios with KN Property Management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
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

                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-serif text-lg font-bold text-slate-50">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm mb-2">{testimonial.role}</p>
                    <p className="text-slate-500 text-xs">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl p-12 text-center border border-amber-400/20">
            <h2 className="font-serif text-3xl font-bold text-slate-50 mb-4">Join Our Community of Successful Investors</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that professional property management and dedicated support can make in your real
              estate portfolio
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3 font-semibold text-lg"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
