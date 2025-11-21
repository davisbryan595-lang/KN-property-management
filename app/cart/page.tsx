"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type CartItem, calculateCartTotal } from "@/lib/cart"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(savedCart)
  }, [])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }

    const updated = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id)
    setCartItems(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const applyCoupon = () => {
    if (couponCode === "LUXURY20") {
      setDiscount(0.2)
    } else if (couponCode === "SAVE10") {
      setDiscount(0.1)
    }
  }

  const subtotal = calculateCartTotal(cartItems)
  const discountAmount = subtotal * discount
  const tax = (subtotal - discountAmount) * 0.08
  const total = subtotal - discountAmount + tax

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-slate-50 mb-12">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart size={64} className="text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-xl mb-8">Your cart is empty</p>
              <Button
                onClick={() => router.push("/products")}
                className="bg-amber-400 text-slate-900 hover:bg-amber-500"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-800/50">
                          <th className="px-6 py-4 text-left text-slate-50 font-semibold">Product</th>
                          <th className="px-6 py-4 text-center text-slate-50 font-semibold">Price</th>
                          <th className="px-6 py-4 text-center text-slate-50 font-semibold">Quantity</th>
                          <th className="px-6 py-4 text-right text-slate-50 font-semibold">Total</th>
                          <th className="px-6 py-4 text-center text-slate-50 font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <button
                                onClick={() => router.push(`/products/${item.productId}`)}
                                className="text-slate-50 hover:text-amber-400 font-semibold transition-colors"
                              >
                                {item.name}
                              </button>
                            </td>
                            <td className="px-6 py-4 text-center text-slate-300">${item.price.toFixed(2)}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2 bg-slate-950 rounded border border-slate-700 w-fit mx-auto">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:bg-slate-800 transition-colors"
                                >
                                  <Minus size={16} className="text-slate-300" />
                                </button>
                                <span className="px-3 py-1 text-slate-50">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-slate-800 transition-colors"
                                >
                                  <Plus size={16} className="text-slate-300" />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-amber-400 font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-300 transition-colors p-2"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Continue Shopping */}
                <Button
                  onClick={() => router.push("/products")}
                  variant="outline"
                  className="mt-6 border-slate-700 text-slate-50 hover:bg-slate-900"
                >
                  Continue Shopping
                </Button>
              </div>

              {/* Order Summary */}
              <div className="h-fit">
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sticky top-32">
                  <h3 className="font-serif text-2xl font-bold text-slate-50 mb-6">Order Summary</h3>

                  {/* Coupon Code */}
                  <div className="mb-6 pb-6 border-b border-slate-700">
                    <label className="block text-slate-300 text-sm font-semibold mb-2">Coupon Code</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        className="bg-slate-800 border-slate-700 text-slate-50"
                      />
                      <Button onClick={applyCoupon} className="bg-amber-400 text-slate-900 hover:bg-amber-500">
                        Apply
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Try: LUXURY20 or SAVE10</p>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount ({Math.round(discount * 100)}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-300">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pb-6 border-b border-slate-700 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-50">Total</span>
                      <span className="font-serif text-3xl font-bold text-amber-400">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout */}
                  <Button
                    onClick={() => router.push("/checkout")}
                    className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 py-6 font-semibold text-lg"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
