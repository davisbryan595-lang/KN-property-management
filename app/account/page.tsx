"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, MapPin, Mail, Phone, LogOut, ShoppingBag } from "lucide-react"

export default function AccountPage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "704-858-3665",
    address: "123 Main St, Charlotte, NC 28202",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save to localStorage or API
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-slate-50 mb-12">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sticky top-32">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={40} className="text-slate-900" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-50 text-center mb-6">
                  {userData.firstName} {userData.lastName}
                </h2>

                <nav className="space-y-2">
                  <button className="w-full text-left px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold">
                    Profile
                  </button>
                  <button
                    onClick={() => router.push("/orders")}
                    className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    Order History
                  </button>
                  <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
                    Saved Items
                  </button>
                  <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
                    Settings
                  </button>
                </nav>

                <Button className="w-full mt-6 bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center gap-2">
                  <LogOut size={18} />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-serif text-2xl font-bold text-slate-50">Profile Information</h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`${
                      isEditing ? "bg-red-600 hover:bg-red-700" : "bg-amber-400 text-slate-900 hover:bg-amber-500"
                    }`}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">First Name</label>
                      <Input
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-slate-800 border-slate-700 text-slate-50 disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-semibold mb-2">Last Name</label>
                      <Input
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-slate-800 border-slate-700 text-slate-50 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-2 flex items-center gap-2">
                      <Mail size={16} /> Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="bg-slate-800 border-slate-700 text-slate-50 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-2 flex items-center gap-2">
                      <Phone size={16} /> Phone
                    </label>
                    <Input
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="bg-slate-800 border-slate-700 text-slate-50 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-2 flex items-center gap-2">
                      <MapPin size={16} /> Address
                    </label>
                    <Input
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="bg-slate-800 border-slate-700 text-slate-50 disabled:opacity-60"
                    />
                  </div>

                  {isEditing && (
                    <Button
                      onClick={handleSave}
                      className="w-full bg-green-600 hover:bg-green-700 py-6 font-semibold text-lg"
                    >
                      Save Changes
                    </Button>
                  )}
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
