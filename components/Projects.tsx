"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Social Media", "Marketing", "Design", "Video"];

const projects = [
  {
    title: "Brand Identity Overhaul",
    category: "Design",
    description:
      "Complete brand identity redesign for a fast-growing e-commerce brand including logo, color system, and brand guidelines.",
    tags: ["Logo Design", "Brand Identity", "Guidelines"],
    color: "from-purple-600 to-pink-500",
    number: "01",
  },
  {
    title: "Social Media Growth Campaign",
    category: "Social Media",
    description:
      "Grew a lifestyle brand's Instagram following from 2K to 50K in 6 months through strategic content and community management.",
    tags: ["Instagram", "Content Strategy", "Community"],
    color: "from-pink-500 to-orange-400",
    number: "02",
  },
  {
    title: "Digital Marketing Funnel",
    category: "Marketing",
    description:
      "Built a complete digital marketing funnel for a SaaS company that increased their lead generation by 300% in 3 months.",
    tags: ["Paid Ads", "Email", "SEO"],
    color: "from-blue-500 to-purple-600",
    number: "03",
  },
  {
    title: "Product Launch Video",
    category: "Video",
    description:
      "Produced and edited a high-impact product launch video that garnered 500K views across social platforms in its first week.",
    tags: ["Video Editing", "Motion Graphics", "Social"],
    color: "from-green-500 to-blue-500",
    number: "04",
  },
  {
    title: "Copywriting for E-commerce",
    category: "Marketing",
    description:
      "Rewrote product descriptions and ad copy for an e-commerce store, resulting in a 45% increase in conversion rate.",
    tags: ["Copywriting", "Ads", "E-commerce"],
    color: "from-orange-500 to-pink-500",
    number: "05",
  },
  {
    title: "Restaurant Social Presence",
    category: "Social Media",
    description:
      "Built and managed the complete social media presence for a restaurant chain across Instagram, Facebook, and TikTok.",
    tags: ["TikTok", "Facebook", "Instagram"],
    color: "from-yellow-500 to-orange-500",
    number: "06",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-purple-400 font-medium text-sm uppercase tracking-widest">
              Our Work
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Projects That
              <span className="gradient-text"> Speak for Us</span>
            </h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    : "glass text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
              >
                {/* Color bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.color} w-full`}
                />

                <div className="p-7 flex flex-col gap-4">
                  {/* Number & Arrow */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-4xl font-bold tracking-tight text-white/10 group-hover:text-white/20 transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {project.number}
                    </span>
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/10">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3
                      className="text-white font-bold text-lg leading-snug"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}