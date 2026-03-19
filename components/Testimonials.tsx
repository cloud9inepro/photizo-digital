"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Osei",
    role: "CEO, StyleHaus Lagos",
    review:
      "Photizo Digital completely transformed our social media presence. In just 4 months, our engagement tripled and our online sales doubled. They don't just post content — they build communities.",
    rating: 5,
    initials: "AO",
    color: "from-purple-600 to-pink-500",
  },
  {
    name: "Daniel Mensah",
    role: "Founder, TechBridge Africa",
    review:
      "The copywriting team at Photizo is exceptional. Our website conversion rate went up by 60% after they rewrote our landing page. Every word they write has purpose and power.",
    rating: 5,
    initials: "DM",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Chisom Eze",
    role: "Marketing Manager, FoodCo",
    review:
      "Working with Photizo on our product launch video was an incredible experience. The final result exceeded all expectations — professional, creative, and delivered ahead of schedule.",
    rating: 5,
    initials: "CE",
    color: "from-pink-500 to-orange-400",
  },
  {
    name: "Kofi Asante",
    role: "Brand Director, Luxe Interiors",
    review:
      "Their graphic design team breathed new life into our brand. The new identity they created for us is bold, memorable, and perfectly captures who we are. Truly world-class work.",
    rating: 5,
    initials: "KA",
    color: "from-orange-500 to-yellow-400",
  },
  {
    name: "Ngozi Adeyemi",
    role: "CEO, GreenLeaf Organics",
    review:
      "Photizo Digital ran our digital marketing campaign with precision and creativity. Our ROI was 4x what we expected and the team was communicative and professional throughout.",
    rating: 5,
    initials: "NA",
    color: "from-green-500 to-blue-500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-yellow-400" : "text-gray-600"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            What Our
            <span className="gradient-text"> Clients Say</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="text-purple-400/30 mb-6"
                />

                {/* Review */}
                <p
                  className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-8"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>

                {/* Stars */}
                <StarRating rating={testimonials[current].rating} />

                {/* Author */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p
                      className="text-white font-bold"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>

                  {/* Counter */}
                  <div className="ml-auto text-gray-600 text-sm">
                    {String(current + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-gradient-to-r from-purple-600 to-pink-500"
                      : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setCurrent(i)}
              className={`glass rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                current === i ? "border-purple-500/40" : "hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                &ldquo;{t.review}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}