"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    {
      label: "Privacy Policy",
      href: "https://www.iubenda.com/privacy-policy/64809643",
    },
    {
      label: "Cookie Policy",
      href: "https://www.iubenda.com/privacy-policy/64809643/cookie-policy",
    },
  ];

  return (
    <footer className="text-white pt-8 pb-6" style={{ background: "#2c3e50" }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Logo spostato in basso a sinistra */}

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-links flex gap-8 justify-center items-center flex-1"
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Divider */}
        <div className="footer-divider h-px bg-white/10 mt-6 mb-4" />

        {/* Bottom Section */}
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-[0.85rem] text-white/60 gap-4">
          {/* Logo grande in basso a sinistra */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-logo flex-shrink-0 self-start"
          >
            <img
              src="/images/Logo-Payphone-Bianco-OK.svg"
              alt="Payphone Logo"
              className="h-24 md:h-32 w-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Payphone. Tutti i diritti riservati.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:mt-0"
          >
            <span className="text-white/70">Powered by </span>
            <span className="font-semibold text-white/90">meravigliäLab</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
