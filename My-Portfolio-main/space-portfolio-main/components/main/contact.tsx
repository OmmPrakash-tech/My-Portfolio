"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
      >
        Contact Me
      </motion.h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-[800px] bg-[#0c0c1d] border border-[#7042f88b] rounded-2xl p-10 flex flex-col gap-8 items-center text-center shadow-lg shadow-purple-900/20 backdrop-blur-md"
      >
        {/* Text */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Let’s build something amazing together 🚀  
          I’m open to internships, collaborations, and exciting projects.
        </p>

        {/* Email */}
        <a
          href="mailto:ommprakashdebata6@gmail.com"
          className="flex items-center gap-3 text-white hover:text-purple-400 transition text-lg"
        >
          <EnvelopeIcon className="h-5 w-5" />
          ommprakashdebata6@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-8 mt-2">
          <a
            href="https://github.com/OmmPrakash-tech"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 transition text-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/omm-prakash-debata-bb982627b"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-purple-400 transition text-lg"
          >
            LinkedIn
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          
          {/* Send Message */}
          <a
            href="mailto:ommprakashdebata6@gmail.com"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-105 transition shadow-md"
          >
            Send Message
          </a>

          {/* Resume Download (Placeholder) */}
          <a
            href="/resume.pdf"   // 👉 replace later
            download
            className="flex items-center gap-2 px-6 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};