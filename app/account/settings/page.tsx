"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Bell, Lock, Globe } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    smsUpdates: false,
    orderNotifications: true,
    promotions: false,
  })

  const [privacy, setPrivacy] = useState({
    publicProfile: false,
    shareData: false,
  })

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar isScrolled />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-slate-50 mb-12">Settings</h1>

          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6 flex items-center gap-3">
                <Bell size={24} className="text-amber-400" />
                Notification Preferences
              </h2>

              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                    <label className="text-slate-50 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          [key]: checked,
                        }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6 flex items-center gap-3">
                <Lock size={24} className="text-amber-400" />
                Security
              </h2>

              <div className="space-y-4">
                <Button className="w-full bg-slate-800 text-slate-50 hover:bg-slate-700 justify-start py-6">
                  Change Password
                </Button>
                <Button className="w-full bg-slate-800 text-slate-50 hover:bg-slate-700 justify-start py-6">
                  Two-Factor Authentication
                </Button>
                <Button className="w-full bg-slate-800 text-slate-50 hover:bg-slate-700 justify-start py-6">
                  Active Sessions
                </Button>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-50 mb-6 flex items-center gap-3">
                <Globe size={24} className="text-amber-400" />
                Privacy & Data
              </h2>

              <div className="space-y-4">
                {Object.entries(privacy).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                    <label className="text-slate-50 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) =>
                        setPrivacy((prev) => ({
                          ...prev,
                          [key]: checked,
                        }))
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm">
                  Your data is encrypted and stored securely. We never sell your personal information to third parties.
                </p>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-500/10 rounded-xl border border-red-500/30 p-8">
              <h2 className="font-serif text-2xl font-bold text-red-400 mb-6">Danger Zone</h2>

              <div className="space-y-4">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700 justify-start py-6">
                  Deactivate Account
                </Button>
                <Button className="w-full bg-red-700 text-white hover:bg-red-800 justify-start py-6">
                  Delete Account & Data
                </Button>
              </div>

              <p className="text-red-400 text-sm mt-4">
                Caution: These actions are irreversible. Please proceed with care.
              </p>
            </div>

            {/* Save Button */}
            <Button className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 py-6 font-semibold text-lg">
              Save Preferences
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
