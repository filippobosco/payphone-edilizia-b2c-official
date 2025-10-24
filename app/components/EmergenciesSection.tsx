"use client";

import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  BoltSlashIcon,
  FireIcon,
  HomeModernIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useRef } from "react";

const emergencies = [
  {
    icon: ExclamationTriangleIcon,
    title: "Perdite e infiltrazioni",
    description:
      "Perdita d'acqua improvvisa, infiltrazioni dal tetto, umidità sui muri. Collegati subito con un idraulico o un impermeabilizzatore e blocca il danno prima che peggiori.",
    urgent: true,
    backgroundImage: "/images/perdite e infiltrazioni.png",
  },
  {
    icon: BoltSlashIcon,
    title: "Guasti elettrici",
    description:
      "Quadro saltato, prese che non funzionano, problemi all'impianto elettrico. Trova subito un elettricista certificato DM 37/08 per un intervento in sicurezza.",
    urgent: true,
    backgroundImage: "/images/guasti elettrici.png",
  },
  {
    icon: FireIcon,
    title: "Caldaia e riscaldamento",
    description:
      "Caldaia in blocco, termosifoni freddi, problemi al condizionamento. Parla immediatamente con un tecnico termoidraulico specializzato e risolvi il disagio.",
    urgent: true,
    backgroundImage: "/images/caldaia e climatizzatore.png",
  },
  {
    icon: HomeModernIcon,
    title: "Crepe e problemi strutturali",
    description:
      "Crepe sui muri, cedimenti, dubbi sulla staticità dell'edificio. Consulta subito un ingegnere strutturale per una valutazione professionale.",
    backgroundImage: "/images/crepe.png",
  },
  {
    icon: DocumentTextIcon,
    title: "Pratiche edilizie urgenti",
    description:
      "Scadenze CILA/SCIA, problemi con il comune, documenti catastali. Un geometra o architetto ti guida subito per non perdere tempo prezioso.",
    backgroundImage: "/images/pratiche edilizie urgenti.png",
    backgroundPosition: "center 40%",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Interventi d'emergenza",
    description:
      "Serramenti rotti, vetri da sostituire, riparazioni urgenti. Trova subito fabbri, serramentisti e artigiani disponibili nella tua zona.",
    backgroundImage: "/images/interventi d'emergenza.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function EmergenciesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            LE EMERGENZE PIÙ FREQUENTI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            Quando hai bisogno di aiuto immediato
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Queste sono le situazioni urgenti più comuni che Payphone risolve
            ogni giorno. Non aspettare che il problema si aggravi: trova subito
            l&apos;esperto giusto.
          </p>
        </motion.div>

        {/* Emergencies Grid - Carousel on mobile */}
        <div className="relative">
          {/* Navigation Arrows - Only visible on mobile */}
          <button
            onClick={() => scroll("left")}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scorri a sinistra"
          >
            <ChevronLeftIcon className="w-6 h-6 text-textPrimary" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scorri a destra"
          >
            <ChevronRightIcon className="w-6 h-6 text-textPrimary" />
          </button>

          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory flex md:block gap-8 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 md:mx-0 md:px-0 scrollbar-hide"
          >
            {emergencies.map((emergency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                }}
                className="relative overflow-hidden rounded-2xl group snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto flex flex-col justify-end"
                style={{
                  backgroundImage: `url("${emergency.backgroundImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: emergency.backgroundPosition ?? "center",
                  backgroundRepeat: "no-repeat",
                  padding: "2.5rem 2rem",
                  minHeight: "280px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Overlay scuro */}
                <div
                  className="absolute inset-0 transition-all duration-400"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
                    zIndex: 1,
                  }}
                />

                {/* Icon with white background */}
                <div
                  className="relative z-10 w-[70px] h-[70px] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <emergency.icon
                    className="text-accent"
                    style={{ width: "36px", height: "36px" }}
                  />
                </div>

                <h3
                  className="relative z-10 font-bold mb-4"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "white",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {emergency.title}
                </h3>
                <p
                  className="relative z-10 leading-relaxed"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {emergency.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Only visible on mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {emergencies.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#cta-finale"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#a03478] to-[#00b7ff] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ fontSize: "1.1rem" }}
          >
            Trova il Tuo Esperto Ora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
