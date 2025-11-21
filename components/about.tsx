"use client"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-xl" />
            <img
              src="/images/kitty-harkey.jpg"
              alt="Kitty Harkey, Founder of KN Property Management"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-lg">
              Est. 2015
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>

            <h2 className="font-serif text-4xl font-bold text-slate-50 mb-6">Meet Kitty Harkey</h2>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Founded with a vision to revolutionize property management in the Carolinas, KN Property Management
              combines white-glove service with street-smart execution. Kitty Harkey brings over a decade of real estate
              expertise to every property we touch.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed">
              We don't believe in one-size-fits-all solutions. Whether you own a luxury home in Charlotte, manage
              multiple AirBnB properties, or are looking to invest in the region, we craft personalized strategies that
              maximize returns and minimize headaches.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <p className="text-sm text-slate-400 mt-1">Properties Managed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <p className="text-sm text-slate-400 mt-1">Tenant Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">$50M+</div>
                <p className="text-sm text-slate-400 mt-1">Assets Under Management</p>
              </div>
            </div>

            <a
              href="tel:704-858-3665"
              className="inline-block px-8 py-3 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500 transition-all font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
