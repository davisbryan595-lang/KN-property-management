"use client"

import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Navbar isScrolled />
        <div className="flex items-center justify-center h-screen">
          <p className="text-slate-400 text-xl">Service not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedServices = services.filter((s) => s.category === service.category && s.id !== service.id)

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.back()}
            className="text-amber-400 hover:text-amber-300 mb-8 flex items-center gap-2"
          >
            ← Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex items-center justify-center bg-slate-900 rounded-xl overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 rounded-full text-sm font-semibold mb-4">
                  {service.category}
                </span>
                <h1 className="font-serif text-4xl font-bold text-slate-50 mb-4">{service.name}</h1>
                <p className="text-xl text-slate-300 mb-6">{service.description}</p>

                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-slate-300 leading-relaxed">{service.longDescription}</p>
                </div>
              </div>

              <Button
                onClick={() => router.push("/contact")}
                className="bg-amber-400 text-slate-900 hover:bg-amber-500 py-6 text-lg font-semibold rounded-lg w-full"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-4">Service Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-4">Complementary Services</h2>
              <p className="text-slate-400 mb-6">Enhance your property management with our other services</p>
              <div className="space-y-3">
                {relatedServices.length > 0 ? (
                  relatedServices.map((relatedService) => (
                    <button
                      key={relatedService.id}
                      onClick={() => router.push(`/services/${relatedService.id}`)}
                      className="w-full text-left p-4 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-all group"
                    >
                      <p className="font-semibold text-slate-50 group-hover:text-amber-400 transition-colors">
                        {relatedService.name}
                      </p>
                      <p className="text-sm text-slate-400">{relatedService.description}</p>
                    </button>
                  ))
                ) : (
                  <p className="text-slate-400">
                    View all our services to find the perfect combination for your property portfolio.
                  </p>
                )}
              </div>

              <Button
                onClick={() => router.push("/services")}
                variant="outline"
                className="w-full mt-6 border-amber-400 text-amber-400 hover:bg-amber-400/10"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
