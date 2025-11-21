"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { type Order, getOrders } from "@/lib/orders"
import { Calendar, MapPin, Phone, Mail, Download, ChevronLeft } from "lucide-react"

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-500/20 text-yellow-300",
  processing: "bg-blue-500/20 text-blue-300",
  shipped: "bg-purple-500/20 text-purple-300",
  delivered: "bg-green-500/20 text-green-300",
  cancelled: "bg-red-500/20 text-red-300",
}

const statusSteps: Record<Order["status"], number> = {
  pending: 1,
  processing: 2,
  shipped: 3,
  delivered: 4,
  cancelled: 0,
}

export default function OrderDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const orders = getOrders()
    const foundOrder = orders.find((o) => o.id === params.id)
    setOrder(foundOrder || null)
  }, [params.id])

  if (!order) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Navbar isScrolled />
        <div className="flex items-center justify-center h-screen">
          <p className="text-slate-400 text-xl">Order not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const currentStep = statusSteps[order.status]
  const steps = ["Order Placed", "Processing", "Shipped", "Delivered"]

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Orders
          </button>

          {/* Header */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="font-serif text-4xl font-bold text-slate-50 mb-2">Order {order.orderNumber}</h1>
                <p className="text-slate-400 flex items-center gap-2">
                  <Calendar size={16} />
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold text-lg ${statusColors[order.status]}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            {order.status !== "cancelled" && (
              <div className="mt-8">
                <p className="text-slate-300 text-sm font-semibold mb-4">
                  Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                </p>
                <div className="flex justify-between items-center">
                  {steps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                          index < currentStep
                            ? "bg-green-500 text-white"
                            : index === currentStep
                              ? "bg-amber-400 text-slate-900"
                              : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {index < currentStep ? "✓" : index + 1}
                      </div>
                      <p
                        className={`text-xs sm:text-sm text-center ${
                          index <= currentStep ? "text-slate-50" : "text-slate-500"
                        }`}
                      >
                        {step}
                      </p>
                      {index < steps.length - 1 && (
                        <div className={`w-0.5 h-8 my-2 ${index < currentStep ? "bg-green-500" : "bg-slate-700"}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Items */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 mb-8">
                <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6">Order Items</h2>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-4 border-b border-slate-700 last:border-b-0"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-50">{item.name}</p>
                        <p className="text-slate-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-amber-400">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-slate-400 text-sm">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="text-slate-50">${(order.total * 0.926).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">Tax (8%)</span>
                    <span className="text-slate-50">${(order.total * 0.074).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-700 pt-4">
                    <span className="font-semibold text-slate-50">Total</span>
                    <span className="font-serif text-2xl font-bold text-amber-400">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <Button
                onClick={() => window.print()}
                className="w-full bg-slate-800 text-slate-50 hover:bg-slate-700 flex items-center justify-center gap-2 py-6"
              >
                <Download size={18} />
                Download Invoice
              </Button>
            </div>

            {/* Shipping & Customer Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Shipping Address */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                <h3 className="font-semibold text-slate-50 mb-4 flex items-center gap-2">
                  <MapPin size={18} />
                  Shipping Address
                </h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p className="font-semibold">{order.customer.name}</p>
                  <p>{order.customer.address}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                <h3 className="font-semibold text-slate-50 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-amber-400 flex-shrink-0" />
                    <a
                      href={`mailto:${order.customer.email}`}
                      className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      {order.customer.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-amber-400 flex-shrink-0" />
                    <a
                      href={`tel:${order.customer.phone}`}
                      className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      {order.customer.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                <h3 className="font-semibold text-slate-50 mb-3">Need Help?</h3>
                <p className="text-slate-400 text-sm mb-4">Contact us for assistance with your order.</p>
                <a
                  href="tel:704-858-3665"
                  className="inline-block w-full text-center bg-amber-400 text-slate-900 hover:bg-amber-500 py-2 rounded-lg font-semibold transition-all"
                >
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
