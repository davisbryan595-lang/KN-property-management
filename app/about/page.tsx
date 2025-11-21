"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Building2, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled={true} />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-50 mb-6">About KN Property Management</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              15+ years of expertise delivering exceptional property management and concierge services to investors
              across the Carolinas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <img
                src="/placeholder.svg"
                alt="KN Property Management Team"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-50 mb-4">Our Story</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Founded on the principle that property owners deserve white-glove service, KN Property Management has
                grown to become Charlotte and Winston-Salem's most trusted property management firm. What started as a
                vision to elevate the standard of residential property management has evolved into a comprehensive
                concierge service handling 500+ properties across multiple states.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our success is built on three core values: Expertise, accountability, and genuine partnership with our
                clients. We don't just manage properties—we elevate lifestyles and build lasting relationships based on
                trust and transparency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Building2, label: "500+ Properties Managed", value: "Across Multiple States" },
              { icon: Users, label: "Expert Team", value: "15+ Years Experience" },
              { icon: Award, label: "4.9+ Star Rating", value: "From 500+ Reviews" },
              { icon: TrendingUp, label: "Portfolio Growth", value: "Consistent ROI Increases" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800">
                  <Icon size={40} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold text-slate-50 mb-2">{stat.label}</h3>
                  <p className="text-slate-400 text-sm">{stat.value}</p>
                </div>
              )
            })}
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-50 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Professional Excellence",
                  description: "15+ years of proven expertise in property management with a perfect track record",
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock emergency response and dedicated support for your peace of mind",
                },
                {
                  title: "Personal Service",
                  description: "White-glove service from our experienced team who care about your success",
                },
                {
                  title: "Technology-Driven",
                  description: "Cutting-edge property management software for transparency and efficiency",
                },
                {
                  title: "Local Expertise",
                  description: "Deep knowledge of Charlotte and Winston-Salem markets with regional connections",
                },
                {
                  title: "Transparent Communication",
                  description: "Monthly detailed reports and open communication channels with all clients",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <h3 className="font-serif text-xl font-bold text-amber-400 mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-xl p-12 text-center border border-amber-400/20">
            <h2 className="font-serif text-3xl font-bold text-slate-50 mb-4">Ready to Partner With Us?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied investors who trust KN Property Management with their most valuable assets
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3 font-semibold text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
