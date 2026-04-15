"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { label: "Balayage", gradient: "from-primary/30 via-primary-dark/20 to-background", aspect: "aspect-[3/4]" },
  { label: "Bridal Glam", gradient: "from-primary/20 via-background to-primary/10", aspect: "aspect-square" },
  { label: "Nail Art", gradient: "from-primary-dark/30 via-primary/15 to-background", aspect: "aspect-square" },
  { label: "Facial Glow", gradient: "from-background via-primary/20 to-primary-dark/20", aspect: "aspect-[3/4]" },
  { label: "Color Work", gradient: "from-primary/25 via-background to-primary/15", aspect: "aspect-[3/4]" },
  { label: "Styling", gradient: "from-primary-dark/20 via-primary/20 to-background", aspect: "aspect-square" },
  { label: "Spa Day", gradient: "from-background via-primary/15 to-primary-dark/25", aspect: "aspect-square" },
  { label: "Makeup Art", gradient: "from-primary/20 via-primary-dark/15 to-background", aspect: "aspect-[3/4]" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-background">
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
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-foreground mb-5">
            A Glimpse of Perfection
          </h2>
          <p className="text-muted-foreground text-lg">
            Every client is a canvas. Here&apos;s a preview of the artistry our team delivers daily.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative ${item.aspect} bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden border border-border group cursor-pointer break-inside-avoid`}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-sm font-display text-foreground tracking-[0.2em] uppercase">
                  {item.label}
                </span>
              </div>

              {/* Subtle label */}
              <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[10px] tracking-[0.15em] uppercase text-primary/60">
                  {item.label}
                </span>
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
