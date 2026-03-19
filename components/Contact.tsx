"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Mail,
  MessageSquare,
  Share2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  "Social Media Management",
  "Digital Marketing",
  "Copywriting",
  "Graphic Design",
  "Video Editing",
  "Full Package",
];

const socials = [
  {
    icon: <Mail size={18} className="text-purple-400" />,
    label: "Email",
    value: "ojiegudy@gmail.com",
    href: "mailto:ojiegudy@gmail.com",
  },
  {
    icon: <MessageSquare size={18} className="text-pink-400" />,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/+2347088698087",
  },
  {
    icon: <Share2 size={18} className="text-blue-400" />,
    label: "Instagram",
    value: "@photizodigital",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent <
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-purple-400 font-medium text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s Start a
            <span className="gradient-text"> Conversation</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a tailored proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20">
                  <CheckCircle size={36} className="text-purple-400" />
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out! We&apos;ll review your project
                  details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "",
                      budget: "",
                      message: "",
                    });
                  }}
                  className="text-purple-400 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0d0d0d] text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0d0d0d] text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    >
                      <option value="">Select budget...</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 — $1,000</option>
                      <option value="1000-3000">$1,000 — $3,000</option>
                      <option value="3000-5000">$3,000 — $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-purple-500/25"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Methods */}
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              <h3
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Reach Us Directly
              </h3>
              {socials.map((social, i) => (
                <a
                  key={i}
                  
                  href={social.href}
                  className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 glass rounded-xl flex items-center justify-center">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">{social.label}</p>
                      <p className="text-white text-sm font-semibold">
                        {social.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-600 group-hover:text-purple-400 transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="relative z-10">
                <p
                  className="gradient-text font-bold tracking-tight text-3xl mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  24hrs
                </p>
                <p className="text-white font-semibold text-sm mb-2">
                  Response Time
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We review every inquiry personally and respond with a
                  tailored proposal within 24 hours.
                </p>
              </div>
            </div>

            {/* Services list */}
            <div className="glass rounded-2xl p-6">
              <h4
                className="text-white font-bold text-sm mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our Services
              </h4>
              <div className="flex flex-col gap-2">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}