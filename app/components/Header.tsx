"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="hidden md:flex items-center relative -mt-8">
          {/* Logo bianco - sempre visibile nella hero */}
          <div>
            <Image
              src="/images/Logo-Payphone-Bianco-OK.svg"
              alt="Payphone Logo"
              width={600}
              height={180}
              priority
              className="h-32 w-auto sm:h-40 md:h-48 lg:h-56 xl:h-64"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
