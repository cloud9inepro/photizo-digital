"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const words = ["Social Media", "Digital Marketing", "Copywriting", "Design", "Video Editing"];

function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const current = words[wordIndex];
      const el = elementRef.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, pause);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeout = setTimeout(type, isDeleting ? speed / 2 : speed);
    };

    timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [words, speed, pause]);

  return elementRef;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// const wordVariants = {
//   hidden: { opacity: 0, y: 40, rotateX: -90 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

export default function Hero() {
  const typeRef = useTypewriter(words);

  return (
    <section
      id="hero"
      className="noise relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass text-gray-300 text-xs font-medium px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={12} className="text-purple-400" />
          Creative Digital Agency
          <Sparkles size={12} className="text-pink-400" />
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          {["We Grow", "Brands Through"].map((line, i) => (
            <div
              key={i}
              className="overflow-hidden block"
            >
              <motion.span
                variants={wordVariants}
                className="block text-5xl sm:text-7xl lg:text-7xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "Syne, sans-serif"  }}
              >
                {line}
              </motion.span>
            </div>
          ))}
          <div className="overflow-hidden block">
            <motion.span
              variants={wordVariants}
              className="block text-5xl sm:text-7xl lg:text-7xl font-extrabold leading-tight gradient-text w-full"
              style={{ fontFamily: "Syne, sans-serif" , minHeight: "1.3em" }}
            >
              <span ref={typeRef} />
              <span className="animate-pulse">|</span>
            </motion.span>
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Photizo Digital is a full-service creative agency helping brands
          stand out, connect with their audience, and grow through powerful
          digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            View Our Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {["Social Media", "Digital Marketing", "Copywriting", "Graphic Design", "Video Editing"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="glass text-gray-400 text-xs font-medium px-4 py-2 rounded-full"
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}