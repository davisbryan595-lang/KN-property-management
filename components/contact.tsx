"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: "", email: "", phone: "", address: "", service: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Let's Connect</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-6">Schedule Your Consultation</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Reach out today and discover how KN Property Management can transform your real estate portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a
                    href="tel:704-858-3665"
                    className="text-xl font-semibold text-slate-50 hover:text-amber-400 transition-colors"
                  >
                    704-858-3665
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href="mailto:Kitty.knpropertymanagement@gmail.com"
                    className="text-lg font-semibold text-slate-50 hover:text-amber-400 transition-colors break-all"
                  >
                    Kitty.knpropertymanagement
                    <br />
                    @gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-3">Serving</p>
                  <ul className="space-y-1 text-slate-50 font-semibold">
                    <li>Charlotte, NC</li>
                    <li>Winston-Salem</li>
                    <li>Surrounding Counties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="(704) 858-3665"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-slate-300 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Charlotte, NC"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="Full Property Management">Full Property Management</option>
                  <option value="AirBnB Concierge">AirBnB Concierge</option>
                  <option value="Maintenance Mastery">Maintenance Mastery</option>
                  <option value="Real Estate Sales">Real Estate Sales</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Tell us about your property needs..."
                />
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-green-400">Message sent successfully!</p>
                    <p className="text-sm text-green-300">Kitty will reach out to you shortly.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
