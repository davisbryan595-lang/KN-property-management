"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using FormspreeInstead of a real backend, we'll just show a success message
      // In production, you'd integrate with Formspree, Netlify Forms, or your own backend
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
        })
        setIsSubmitting(false)
        return
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. Our team will contact you within 24 hours.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled={true} />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-50 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your property portfolio? Our team is ready to discuss how we can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 h-fit">
              <Phone size={32} className="text-amber-400 mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-50 mb-2">Phone</h3>
              <a href="tel:704-858-3665" className="text-amber-400 hover:text-amber-300 font-semibold">
                704-858-3665
              </a>
              <p className="text-slate-400 text-sm mt-2">Available 24/7 for emergencies</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 h-fit">
              <Mail size={32} className="text-amber-400 mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-50 mb-2">Email</h3>
              <a
                href="mailto:Kitty.knpropertymanagement@gmail.com"
                className="text-amber-400 hover:text-amber-300 font-semibold break-all"
              >
                Kitty.knpropertymanagement@gmail.com
              </a>
              <p className="text-slate-400 text-sm mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 h-fit">
              <MapPin size={32} className="text-amber-400 mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-50 mb-2">Locations</h3>
              <p className="text-slate-300">
                <span className="block">📍 Charlotte, NC</span>
                <span className="block">📍 Winston-Salem, NC</span>
                <span className="block text-sm text-slate-400 mt-2">Serving surrounding areas</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-50 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    placeholder="(704) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="">Select a service of interest</option>
                    <option value="full-management">Full Property Management</option>
                    <option value="short-term">Short-Term Rental Concierge</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="advisory">Real Estate Advisory</option>
                    <option value="consulting">Investment Consulting</option>
                    <option value="tenant">Tenant Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                    placeholder="Tell us about your property portfolio and what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 py-3 text-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-50 mb-6">What to Expect</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Quick Response",
                    description:
                      "Our team reviews all inquiries within 24 hours and reaches out to discuss your needs.",
                  },
                  {
                    step: "2",
                    title: "Consultation Call",
                    description:
                      "We schedule a free consultation to understand your portfolio and goals in detail.",
                  },
                  {
                    step: "3",
                    title: "Custom Proposal",
                    description:
                      "Based on our discussion, we create a tailored service plan and pricing proposal.",
                  },
                  {
                    step: "4",
                    title: "Partnership Begins",
                    description:
                      "Once you're ready, we onboard your properties and start delivering results.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400 text-slate-900 font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg font-bold text-slate-50">{item.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
