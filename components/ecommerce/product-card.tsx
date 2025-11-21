"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = existingCart.find((item: any) => item.productId === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      existingCart.push(cartItem)
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))
    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart`,
    })
  }

  return (
    <button onClick={() => router.push(`/products/${product.id}`)} className="group text-left h-full">
      <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-amber-400 transition-all h-full flex flex-col hover:shadow-lg hover:shadow-amber-400/10">
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-800 h-64">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-2">{product.category}</p>
            <h3 className="font-serif text-xl font-bold text-slate-50 line-clamp-2 group-hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}
                />
              ))}
            </div>
            <span className="text-xs text-slate-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mb-4 pb-4 border-t border-slate-700">
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-2xl font-bold text-amber-400">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <p className={`text-xs font-semibold mb-4 ${product.inStock ? "text-green-400" : "text-red-400"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
        </div>
      </div>
    </button>
  )
}
