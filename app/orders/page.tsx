"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { type Order, getOrders } from "@/lib/orders"
import { Package, Calendar, DollarSign, Eye } from "lucide-react"

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  processing: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  shipped: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  delivered: "bg-green-500/20 text-green-300 border-green-500/30",
  cancelled: "bg-red-500/20 text-red-300 border-red-500/30",
}

const statusLabels: Record<Order["status"], string> = {
  pending: "Pending",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
}

export default function OrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const allOrders = getOrders()
    setOrders(allOrders)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="font-serif text-4xl font-bold text-slate-50 mb-2">Order History</h1>
              <p className="text-slate-400">Track and manage all your orders</p>
            </div>
            <Button onClick={() => router.push("/products")} className="bg-amber-400 text-slate-900 hover:bg-amber-500">
              Continue Shopping
            </Button>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-16">
              <Package size={64} className="text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-xl mb-8">No orders yet</p>
              <Button
                onClick={() => router.push("/products")}
                className="bg-amber-400 text-slate-900 hover:bg-amber-500"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((order) => (
                  <div
                    key={order.id}
                    className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-amber-400/50 transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                      {/* Order Number & Date */}
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Order Number</p>
                        <p className="font-semibold text-slate-50">{order.orderNumber}</p>
                        <p className="text-slate-400 text-sm flex items-center gap-1 mt-2">
                          <Calendar size={14} />
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>

                      {/* Status */}
                      <div>
                        <p className="text-slate-400 text-sm mb-2">Status</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${
                            statusColors[order.status]
                          }`}
                        >
                          {statusLabels[order.status]}
                        </span>
                      </div>

                      {/* Items Count */}
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Items</p>
                        <p className="font-semibold text-slate-50">
                          {order.items.length} {order.items.length === 1 ? "item" : "items"}
                        </p>
                      </div>

                      {/* Total */}
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Total</p>
                        <p className="font-serif text-xl font-bold text-amber-400 flex items-center gap-1">
                          <DollarSign size={18} />
                          {order.total.toFixed(2)}
                        </p>
                      </div>

                      {/* View Details */}
                      <div className="flex justify-end">
                        <Button
                          onClick={() => router.push(`/orders/${order.id}`)}
                          className="bg-amber-400 text-slate-900 hover:bg-amber-500 flex items-center gap-2"
                        >
                          <Eye size={18} />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
