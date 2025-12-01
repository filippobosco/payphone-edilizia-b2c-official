"use client";

import { motion } from "framer-motion";

import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Header integrato nella hero */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('/images/hero-construction-team-mobile.png')",
          }}
        />
        {/* Desktop background image */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/images/hero-construction-team.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.58, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo mobile centrato - visibile solo su mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:hidden -mb-6 flex justify-center"
          >
            <img
              src="/images/Logo-Payphone-Bianco-OK.svg"
              alt="Payphone Logo"
              className="h-48 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-white leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              marginTop: "3rem",
              marginBottom: "0.5rem",
            }}
          >
            Il tuo esperto edile risponde subito.
            <br />
            <span
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent whitespace-nowrap inline-block"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                marginTop: "0.5rem",
              }}
            >
              Nessuna attesa, solo soluzioni
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200"
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginTop: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            Perdita d&apos;acqua? Crepa nel muro? Dubbio su una pratica
            edilizia?
            <br />
            Con Payphone trovi immediatamente l&apos;esperto giusto: architetti,
            ingegneri, geometri, impiantisti e professionisti edili pronti a
            rispondere alla tua chiamata.
            <br />
            <br />
            <span style={{ fontWeight: "600", fontSize: "1rem" }}>
              Paghi solo se risponde, solo per i minuti effettivi.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-2 sm:gap-4 justify-center"
            style={{ marginTop: "2rem" }}
          >
            <motion.a
              href="https://apps.apple.com/it/app/online-payphone/id6738121965"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-textPrimary rounded-xl sm:rounded-2xl shadow-xl hover:shadow-[0_8px_25px_rgba(160,52,120,0.3)] transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 sm:gap-3 min-w-[130px] sm:min-w-[180px] hover:bg-gradient-to-r hover:from-[#a03478] hover:to-[#00b7ff]"
              style={{ padding: "0.7rem 1.8rem" }}
            >
              <svg
                className="w-5 h-5 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="flex flex-col items-center sm:items-start">
                <span
                  className="text-gray-600 group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.7rem" }}
                >
                  Scarica su
                </span>
                <span
                  className="font-bold leading-tight group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.95rem" }}
                >
                  App Store
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-textPrimary rounded-xl sm:rounded-2xl shadow-xl hover:shadow-[0_8px_25px_rgba(160,52,120,0.3)] transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 sm:gap-3 min-w-[130px] sm:min-w-[180px] hover:bg-gradient-to-r hover:from-[#a03478] hover:to-[#00b7ff]"
              style={{ padding: "0.7rem 1.8rem" }}
            >
              <svg
                className="w-5 h-5 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
              </svg>
              <div className="flex flex-col items-center sm:items-start">
                <span
                  className="text-gray-600 group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.7rem" }}
                >
                  Scarica su
                </span>
                <span
                  className="font-bold leading-tight group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.95rem" }}
                >
                  Google Play
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center"
            style={{ marginTop: "1.5rem" }}
          >
            <div className="flex items-center gap-2 text-white">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <span className="font-medium" style={{ fontSize: "0.85rem" }}>
                Gratis da scaricare
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <span className="font-medium" style={{ fontSize: "0.85rem" }}>
                Nessun abbonamento
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <span className="font-medium" style={{ fontSize: "0.85rem" }}>
                20 minuti gratis
              </span>
            </div>
          </motion.div>

          {/* Scroll Indicator - posizionato dopo i trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ height: ["20%", "80%", "20%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
