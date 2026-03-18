"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Social Media Management",
  "Digital Marketing",
  "Copywriting",
  "Graphic Design",
  "Video Editing",
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <h3
                className="text-2xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Photizo
                <span className="gradient-text"> Digital</span>
              </h3>
              <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">
                Creative Digital Agency
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We illuminate brands through powerful digital experiences.
              Social media, marketing, design, copy, and video — all under
              one roof.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-1.5 glass text-gray-400 hover:text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:border-purple-500/30 group"
                >
                  {social.label}
                  <ArrowUpRight
                    size={10}
                    className="group-hover:text-purple-400 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border border-purple-500/10"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-purple-400" />
            <p
              className="text-white font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Ready to illuminate your brand?
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-6 py-3 rounded-full transition-all hover:opacity-90 hover:scale-105 shrink-0 text-sm"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Photizo Digital. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}