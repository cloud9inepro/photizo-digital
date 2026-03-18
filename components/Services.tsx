"use client";

import { motion } from "framer-motion";
import {
  Share2,
  TrendingUp,
  PenTool,
  Palette,
  Video,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Share2 size={28} className="text-purple-400" />,
    title: "Social Media Management",
    description:
      "We grow and manage your social media presence across all platforms — creating content, engaging your audience, and building a loyal community around your brand.",
    tag: "Growth",
    color: "from-purple-600/20 to-purple-600/5",
    border: "hover:border-purple-500/40",
  },
  {
    icon: <TrendingUp size={28} className="text-pink-400" />,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies that put your brand in front of the right people at the right time — across search, social, and beyond.",
    tag: "Strategy",
    color: "from-pink-600/20 to-pink-600/5",
    border: "hover:border-pink-500/40",
  },
  {
    icon: <PenTool size={28} className="text-blue-400" />,
    title: "Copywriting",
    description:
      "Words that convert. We craft compelling copy for websites, ads, emails, and social media that speaks directly to your audience and drives action.",
    tag: "Content",
    color: "from-blue-600/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
  },
  {
    icon: <Palette size={28} className="text-orange-400" />,
    title: "Graphic Design",
    description:
      "Stunning visuals that capture attention and communicate your brand story — from logos and brand identity to social media graphics and marketing materials.",
    tag: "Creative",
    color: "from-orange-600/20 to-orange-600/5",
    border: "hover:border-orange-500/40",
  },
  {
    icon: <Video size={28} className="text-green-400" />,
    title: "Video Editing",
    description:
      "Professional video editing that transforms raw footage into polished, engaging content — perfect for social media, ads, and brand storytelling.",
    tag: "Production",
    color: "from-green-600/20 to-green-600/5",
    border: "hover:border-green-500/40",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

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
            What We Do
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Services Built to
            <span className="gradient-text"> Scale Your Brand</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From strategy to execution, we offer everything your brand needs
            to thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass ${service.border} rounded-2xl p-7 flex flex-col gap-5 group transition-all duration-300 cursor-pointer ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  {service.icon}
                </div>
                <span className="text-xs font-semibold text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="text-white font-bold text-lg group-hover:gradient-text transition-all"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-gray-500 group-hover:text-purple-400 transition-colors">
                <span className="text-xs font-semibold">Learn more</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}