import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      {/* Gold top divider */}
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-display font-semibold tracking-wide">
              ELITE <span className="text-primary">EDGE</span>
            </span>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Premium beauty services with easy online booking. Where luxury
              meets artistry, and every visit is an experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Us" },
                { href: "#gallery", label: "Gallery" },
                { href: "#testimonials", label: "Testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-white/40 hover:text-primary transition-colors text-sm"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                456 Luxe Avenue, City
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Tue - Sun: 10:00 - 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Elite Edge Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
