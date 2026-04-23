'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            IW
          </div>
          <span className="font-semibold text-lg">
            Impulso Web
          </span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servicios" className="hover:text-orange-500 transition">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-orange-500 transition">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-orange-500 transition">
            Contacto
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/521XXXXXXXXXX"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition hover:scale-105"
        >
          Cotizar
        </a>

      </div>
    </motion.nav>
  )
}