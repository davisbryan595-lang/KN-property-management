"use client"

export default function Footer() {
  const currentYear = 2025

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-slate-900">K</span>
              </div>
              <div>
                <div className="font-serif text-sm font-bold text-slate-50">KN</div>
                <div className="text-xs text-amber-400 -mt-1">Property Management</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Charlotte's premier property concierge, elevating lifestyles through exceptional property management and
              real estate services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:704-858-3665" className="text-slate-400 hover:text-amber-400 transition-colors">
                  📞 704-858-3665
                </a>
              </li>
              <li>
                <a
                  href="mailto:Kitty.knpropertymanagement@gmail.com"
                  className="text-slate-400 hover:text-amber-400 transition-colors break-all"
                >
                  📧 Kitty.knpropertymanagement@gmail.com
                </a>
              </li>
              <li className="text-slate-400 pt-2">
                📍 Charlotte, NC
                <br />
                Winston-Salem, NC
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© {currentYear} KN Property Management. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
