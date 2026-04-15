"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[80px]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Premium Salon Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-foreground leading-[1.1] tracking-tight"
            >
              Elevate Your{" "}
              <span className="relative text-primary italic font-medium">
                Beauty
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6c40-4 80-6 120-3s50 3 76-1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Experience luxury beauty services in an intimate, sophisticated
              setting. From precision cuts to rejuvenating treatments, every
              visit is crafted for perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-background px-10 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Book Your Session
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground px-10 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:text-primary"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">5,000+</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">8+</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">4.9</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Client Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual — Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main hero image */}
              <div className="w-[340px] h-[440px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src="/Images/Image-4.jpg"
                  alt="Bridal hair styling"
                  fill
                  className="object-cover"
                  sizes="340px"
                  priority
                />
              </div>

              {/* Smaller image top-right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -right-16 w-[150px] h-[180px] rounded-xl overflow-hidden border border-border shadow-xl"
              >
                <Image
                  src="/Images/Image-5.jpg"
                  alt="Auburn bob styling"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </motion.div>

              {/* Smaller image bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-16 w-[160px] h-[190px] rounded-xl overflow-hidden border border-border shadow-xl"
              >
                <Image
                  src="/Images/Image-1.jpg"
                  alt="Ombre waves styling"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-2 right-4 bg-surface rounded-xl px-4 py-3 flex items-center gap-3 border border-border gold-glow"
              >
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Easy Booking</p>
                  <p className="text-xs text-muted-foreground">Confirm via WhatsApp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
