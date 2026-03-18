"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Target, Heart, Trophy } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={20} className="text-purple-400" />,
    title: "Fast Turnaround",
    description:
      "We deliver quality work on time, every time. No delays, no excuses.",
  },
  {
    icon: <Target size={20} className="text-pink-400" />,
    title: "Results Focused",
    description:
      "Everything we do is tied to measurable outcomes that grow your business.",
  },
  {
    icon: <Heart size={20} className="text-red-400" />,
    title: "We Care Deeply",
    description:
      "Your brand matters to us. We treat every project like it's our own.",
  },
  {
    icon: <Trophy size={20} className="text-yellow-400" />,
    title: "Proven Track Record",
    description:
      "50+ satisfied clients and 100+ completed projects speak for themselves.",
  },
];

const highlights = [
  "Full-service digital agency under one roof",
  "Dedicated team for every project",
  "Transparent communication throughout",
  "Custom strategies tailored to your brand",
  "Affordable pricing without compromising quality",
  "Long-term partnership approach",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Glow inside */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <span
                  className="text-6xl sm:text-8xl font-extrabold gradient-text block mb-4"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Photizo
                </span>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                  The name Photizo means &ldquo;to illuminate&rdquo; — and
                  that&apos;s exactly what we do for every brand we work with.
                  We shine a light on what makes you unique and amplify it
                  across the digital world.
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle
                        size={15}
                        className="text-purple-400 shrink-0"
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 border border-purple-500/20"
            >
              <p className="gradient-text font-extrabold text-2xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                50+
              </p>
              <p className="text-gray-400 text-xs mt-0.5">Happy Clients</p>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-5 -left-5 glass rounded-2xl px-5 py-4 border border-pink-500/20"
            >
              <p className="text-pink-400 font-extrabold text-2xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                100+
              </p>
              <p className="text-gray-400 text-xs mt-0.5">Projects Done</p>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-purple-400 font-medium text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              We Are Your
              <span className="gradient-text"> Digital Growth</span> Partner
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Photizo Digital is a creative digital agency passionate about
              helping brands grow, connect, and thrive online. We combine
              strategy, creativity, and technology to deliver results that
              matter.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Whether you&apos;re a startup looking to build your presence or
              an established brand ready to scale, we have the expertise and
              the passion to take you there.
            </p>

            {/* Why Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4 flex flex-col gap-2 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    {reason.icon}
                    <h4
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}