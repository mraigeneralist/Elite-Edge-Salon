"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Meera Kapoor",
    text: "The balayage at Elite Edge was absolutely stunning. The stylist understood exactly what I wanted, and the result exceeded my expectations. The ambiance is so relaxing too!",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Aisha Rahman",
    text: "I got my bridal makeup done here and I couldn't have been happier. The team was professional, patient, and made me feel like a queen. Highly recommend!",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Priyanka Desai",
    text: "The facial treatment left my skin absolutely glowing. Love the WhatsApp booking system — so convenient! The private treatment rooms are such a nice touch.",
    rating: 5,
    initials: "PD",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-[11px] font-medium tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-foreground mb-5">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it — hear from our happy clients.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-2xl p-7 hover:border-primary/20 transition-all duration-500"
            >
              {/* Gold quote mark */}
              <div className="text-primary/20 text-5xl font-display leading-none mb-4">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary tracking-wider">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
