"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type CartItem, calculateCartTotal } from "@/lib/cart"
import { CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (savedCart.length === 0) {
      router.push("/cart")
    }
    setCartItems(savedCart)
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    localStorage.removeItem("cart")
  }

  const subtotal = calculateCartTotal(cartItems)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Navbar isScrolled />
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
            <h1 className="font-serif text-4xl font-bold text-slate-50 mb-4">Order Confirmed!</h1>
            <p className="text-slate-400 text-lg mb-8">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 mb-8 text-left">
              <h3 className="font-serif text-xl font-bold text-slate-50 mb-4">Order Details</h3>
              <div className="space-y-2 mb-6 pb-6 border-b border-slate-700">
                <p className="text-slate-300">
                  <span className="text-slate-400">Name:</span> {formData.firstName} {formData.lastName}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Email:</span> {formData.email}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Total Amount:</span> ${total.toFixed(2)}
                </p>
              </div>
              <h4 className="font-semibold text-slate-50 mb-3">Items Ordered:</h4>
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li key={item.id} className="text-slate-400 flex justify-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-400 mb-8">
              A confirmation email has been sent to <span className="text-amber-400">{formData.email}</span>
            </p>
            <Button
              onClick={() => router.push("/")}
              className="bg-amber-400 text-slate-900 hover:bg-amber-500 px-8 py-3"
            >
              Return to Home
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-slate-50 mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Billing Information */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                  <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6">Billing Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="sm:col-span-2 bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="sm:col-span-2 bg-slate-800 border-slate-700 text-slate-50"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                  <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6">Shipping Address</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-700 text-slate-50"
                      />
                      <Input
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-700 text-slate-50"
                      />
                    </div>
                    <Input
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                  <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6">Payment Information</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      name="cardName"
                      placeholder="Name on Card"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <Input
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-700 text-slate-50"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-700 text-slate-50"
                      />
                      <Input
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-700 text-slate-50"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 py-6 font-semibold text-lg"
                >
                  Complete Purchase
                </Button>
              </div>
            </form>

            {/* Order Summary */}
            <div className="h-fit">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sticky top-32">
                <h3 className="font-serif text-2xl font-bold text-slate-50 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-slate-700 max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div>
                        <p className="text-slate-50 font-semibold">{item.name}</p>
                        <p className="text-slate-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-amber-400 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
                    <span className="font-semibold text-slate-50">Total</span>
                    <span className="font-serif text-3xl font-bold text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
