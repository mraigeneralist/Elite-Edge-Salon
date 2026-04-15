"use client";

import Link from "next/link";
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
              Now Accepting New Clients
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

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main circle */}
              <div className="w-[380px] h-[380px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full flex items-center justify-center border border-primary/10">
                <div className="w-[300px] h-[300px] bg-surface/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-border">
                  <div className="text-center space-y-4">
                    <svg
                      className="w-16 h-16 mx-auto text-primary opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.803.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
                      />
                    </svg>
                    <p className="font-display text-xl text-foreground tracking-wide">Premium Beauty</p>
                    <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">Starts Here</p>
                  </div>
                </div>
              </div>

              {/* Floating card bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-16 bg-surface rounded-xl p-4 flex items-center gap-3 border border-border gold-glow"
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

              {/* Floating card top-right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-12 bg-surface rounded-xl p-4 flex items-center gap-3 border border-border gold-glow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Open 6 Days</p>
                  <p className="text-xs text-muted-foreground">Tue - Sun</p>
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
