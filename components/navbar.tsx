"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Phone, ShoppingCart, User } from "lucide-react"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="font-serif text-xl font-bold text-slate-900">K</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg font-bold text-slate-50">KN</div>
              <div className="text-xs text-amber-400 -mt-1">Property Management</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Cart, Account, Call */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => router.push("/cart")}
              className="relative text-slate-300 hover:text-amber-400 transition-colors"
            >
              <ShoppingCart size={22} />
            </button>

            {/* Account Icon */}
            <button
              onClick={() => router.push("/account")}
              className="hidden sm:block text-slate-300 hover:text-amber-400 transition-colors"
            >
              <User size={22} />
            </button>

            {/* Call Button */}
            <a
              href="tel:704-858-3665"
              className="hidden md:flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-2 rounded-lg hover:bg-amber-500 transition-all font-semibold"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-amber-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-slate-800 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-slate-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                router.push("/cart")
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-amber-400 transition-colors"
            >
              Cart {cartCount > 0 && `(${cartCount})`}
            </button>
            <a
              href="tel:704-858-3665"
              className="block px-4 py-2 text-amber-400 font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Call: 704-858-3665
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
