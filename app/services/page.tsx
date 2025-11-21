"use client"

import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled={true} />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-50 mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive property management and concierge services designed to elevate your real estate investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-amber-400 transition-all group"
              >
                <div className="relative overflow-hidden bg-slate-800 h-56">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">
                      {service.category}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-slate-50 group-hover:text-amber-400 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 flex-grow">{service.description}</p>

                  <Button
                    onClick={() => router.push(`/services/${service.id}`)}
                    className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 font-semibold flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl p-12 text-center border border-amber-400/20">
            <h2 className="font-serif text-3xl font-bold text-slate-50 mb-4">Ready to Discuss Your Needs?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team to find the perfect property management solution for your portfolio.
            </p>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3 font-semibold text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
