"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { products } from "@/lib/products"
import { Heart, ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SavedItemsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [savedItems, setSavedItems] = useState<Product[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedItems") || "[]")
    const savedProducts = products.filter((p) => saved.includes(p.id))
    setSavedItems(savedProducts)
  }, [])

  const toggleSaveItem = (productId: string) => {
    const saved = JSON.parse(localStorage.getItem("savedItems") || "[]")
    const index = saved.indexOf(productId)

    if (index > -1) {
      saved.splice(index, 1)
    } else {
      saved.push(productId)
    }

    localStorage.setItem("savedItems", JSON.stringify(saved))
    setSavedItems(products.filter((p) => saved.includes(p.id)))
  }

  const addToCart = (product: Product) => {
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    existingCart.push(cartItem)
    localStorage.setItem("cart", JSON.stringify(existingCart))

    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart`,
    })
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-slate-50 mb-12">Saved Items</h1>

          {savedItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart size={64} className="text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-xl mb-8">No saved items yet</p>
              <Button
                onClick={() => router.push("/products")}
                className="bg-amber-400 text-slate-900 hover:bg-amber-500"
              >
                Start Browsing
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-amber-400 transition-all"
                >
                  <div className="relative overflow-hidden bg-slate-800 h-48">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleSaveItem(product.id)}
                      className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <Heart size={20} className="fill-red-500 text-red-500" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-slate-50 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="mb-4 pb-4 border-t border-slate-700">
                      <p className="font-serif text-2xl font-bold text-amber-400 mt-4">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => router.push(`/products/${product.id}`)}
                        variant="outline"
                        className="flex-1 border-slate-700 text-slate-50 hover:bg-slate-800"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-amber-400 text-slate-900 hover:bg-amber-500 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Add
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
