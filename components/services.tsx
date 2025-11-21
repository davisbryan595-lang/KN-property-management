"use client"
import ServiceCard from "./service-card"

const services = [
  {
    id: 1,
    title: "Full Property Management",
    price: "$299",
    period: "/month",
    badge: "",
    description: "Complete property management solution for landlords and investors",
    features: [
      "Professional tenant screening",
      "Rent collection & accounting",
      "Maintenance coordination",
      "24/7 emergency response",
      "Property inspections",
      "Legal compliance management",
    ],
  },
  {
    id: 2,
    title: "AirBnB Concierge",
    price: "20%",
    period: "of revenue",
    badge: "Most Popular",
    description: "White-glove management for your short-term rental properties",
    features: [
      "Professional listing optimization",
      "Professional photography",
      "Guest communication",
      "Housekeeping coordination",
      "5-star review guarantee",
      "Dynamic pricing strategy",
    ],
  },
  {
    id: 3,
    title: "Maintenance Mastery",
    price: "$149",
    period: "/call",
    badge: "",
    description: "Premium maintenance and emergency response services",
    features: [
      "24/7 emergency response",
      "Vetted contractor network",
      "Quality inspections",
      "Budget-friendly solutions",
      "Preventative maintenance",
      "Documentation & reporting",
    ],
  },
  {
    id: 4,
    title: "Real Estate Sales",
    price: "2.5%",
    period: "commission",
    badge: "",
    description: "Exclusive off-market deals and premium sales service",
    features: [
      "Off-market property access",
      "Expert market analysis",
      "Staging & marketing",
      "Exclusive listings",
      "Investor connections",
      "Seamless transactions",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Services</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-6">Premium Property Solutions</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tailored packages designed for serious investors and property owners
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
          <h3 className="font-serif text-2xl font-bold text-slate-50 mb-4">Ready to Elevate Your Investment?</h3>
          <p className="text-slate-300 mb-6">
            Schedule a consultation with Kitty Harkey to find the perfect solution for your properties
          </p>
          <a
            href="tel:704-858-3665"
            className="inline-block px-8 py-3 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-all font-semibold"
          >
            Call 704-858-3665
          </a>
        </div>
      </div>
    </section>
  )
}
