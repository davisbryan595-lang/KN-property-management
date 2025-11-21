"use client"

import { Check } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    price: string
    period: string
    badge?: string
    description: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isPopular = service.badge === "Most Popular"

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        isPopular
          ? "ring-2 ring-amber-400 bg-gradient-to-br from-slate-800 to-slate-900"
          : "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
      }`}
    >
      {/* Badge */}
      {service.badge && (
        <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
          {service.badge}
        </div>
      )}

      <div className="p-8">
        {/* Title & Price */}
        <h3 className="font-serif text-2xl font-bold text-slate-50 mb-4">{service.title}</h3>

        <div className="mb-6">
          <div className="text-4xl font-bold text-amber-400">
            {service.price}
            <span className="text-lg text-slate-400 font-normal">{service.period}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-8">{service.description}</p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
            isPopular
              ? "bg-amber-400 text-slate-900 hover:bg-amber-500"
              : "bg-slate-700/50 text-slate-50 border border-slate-600 hover:bg-slate-700 hover:border-slate-500"
          }`}
        >
          Inquire Now
        </a>
      </div>
    </div>
  )
}
