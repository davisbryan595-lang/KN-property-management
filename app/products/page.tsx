"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/ecommerce/product-card"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = ["All", "Management", "Short-Term Rental", "Maintenance", "Sales", "Consulting"]

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === "All" || p.category === category
      return matchesSearch && matchesCategory
    })

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [search, category, sortBy])

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-50 mb-4">Our Services & Solutions</h1>
          <p className="text-lg text-slate-400">Discover premium property management services tailored to your needs</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-slate-950 px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-900 border-slate-700 text-slate-50 placeholder:text-slate-500"
            />

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => {
                setSearch("")
                setCategory("All")
                setSortBy("featured")
              }}
              variant="outline"
              className="border-slate-700 text-slate-50 hover:bg-slate-900"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-slate-950 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No services found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
