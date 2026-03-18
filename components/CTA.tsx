"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-10 sm:p-16 relative overflow-hidden text-center"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-500/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass text-gray-300 text-xs font-medium px-4 py-2 rounded-full mb-8 border border-purple-500/20"
            >
              <Sparkles size={12} className="text-purple-400" />
              Ready to grow your brand?
              <Sparkles size={12} className="text-pink-400" />
            </motion.div>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Let&apos;s Build Something
              <span className="gradient-text"> Extraordinary</span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re starting from scratch or looking to scale,
              Photizo Digital has the team, the tools, and the passion to make
              it happen. Let&apos;s talk.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-10 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg shadow-purple-500/25 text-lg"
              >
                Start a Project
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 glass text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-lg"
              >
                View Our Work
              </a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/5"
            >
              {[
                "50+ Happy Clients",
                "100+ Projects Done",
                "3+ Years Experience",
                "98% Satisfaction Rate",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="text-gray-400 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}