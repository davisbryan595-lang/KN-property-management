"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Star, Check, Minus, Plus, Share2 } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const product = products.find((p) => p.id === params.id)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Navbar isScrolled />
        <div className="flex items-center justify-center h-screen">
          <p className="text-slate-400 text-xl">Service not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: `${product.id}-${crypto.randomUUID()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = existingCart.find((item: any) => item.productId === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      existingCart.push(cartItem)
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} added to your cart`,
    })
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <button
            onClick={() => router.back()}
            className="text-amber-400 hover:text-amber-300 mb-8 flex items-center gap-2"
          >
            ← Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="flex items-center justify-center bg-slate-900 rounded-xl overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="font-serif text-4xl font-bold text-slate-50 mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}
                      />
                    ))}
                  </div>
                  <span className="text-slate-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-xl text-slate-300 mb-2">{product.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-amber-400">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <p className="text-slate-400">/month subscription</p>
              </div>

              {/* Stock */}
              <div className="mb-8">
                <p className={`text-sm font-semibold mb-4 ${product.inStock ? "text-green-400" : "text-red-400"}`}>
                  {product.inStock ? `In Stock (${product.stock} available)` : "Out of Stock"}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-slate-300">Quantity:</span>
                  <div className="flex items-center border border-slate-700 rounded-lg bg-slate-900">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-slate-800 transition-colors"
                    >
                      <Minus size={18} className="text-slate-300" />
                    </button>
                    <span className="px-6 py-2 text-slate-50 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-slate-800 transition-colors"
                    >
                      <Plus size={18} className="text-slate-300" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 py-6 text-lg font-semibold rounded-lg mb-4"
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-50 hover:bg-slate-900 py-6 flex items-center justify-center gap-2 bg-transparent"
                >
                  <Share2 size={18} />
                  Share This Service
                </Button>
              </div>
            </div>
          </div>

          {/* Features and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Long Description */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-4">About This Service</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{product.longDescription}</p>

              <h3 className="font-serif text-xl font-bold text-slate-50 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Services */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-4">Perfect With</h2>
              <p className="text-slate-400 mb-6">Combine this service with others for maximum benefit</p>
              <div className="space-y-3">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 4)
                  .map((relatedProduct) => (
                    <button
                      key={relatedProduct.id}
                      onClick={() => router.push(`/products/${relatedProduct.id}`)}
                      className="w-full text-left p-4 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-all group"
                    >
                      <p className="font-semibold text-slate-50 group-hover:text-amber-400 transition-colors">
                        {relatedProduct.name}
                      </p>
                      <p className="text-sm text-slate-400">${relatedProduct.price.toFixed(2)}</p>
                    </button>
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
