'use client'
import Link from "next/link"
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import { Monitor, ShoppingCart, Wrench } from 'lucide-react'

/* ===== NAVBAR ===== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            IW
          </div>
          <span className="font-bold text-xl tracking-wide">Impulso Web</span>
        </Link>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <div className="hidden md:flex gap-8 text-lg font-semibold">
            <Link href="/#servicios" className="hover:text-orange-500 transition tracking-wide">Servicios</Link>
            <Link href="/#proyectos" className="hover:text-orange-500 transition tracking-wide">Proyectos</Link>
            <Link href="/#precios" className="hover:text-orange-500 transition tracking-wide">Precios</Link>
            <Link href="/#contacto" className="hover:text-orange-500 transition tracking-wide">Contacto</Link>
          </div>
        </div>

        {/* BOTÓN DESKTOP */}

        <a
          href="https://wa.me/5212202231274?text=Hola,%20quiero%20una%20cotización%20para%20mi%20negocio"
          className="hidden md:inline-flex justify-center items-center bg-orange-500 px-7 py-3.5 rounded-xl text-white text-lg font-semibold hover:scale-105 transition"
        >
          Cotizar
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-4 flex flex-col gap-6 text-xl font-semibold shadow-md">

          <Link href="/#servicios" onClick={() => setOpen(false)}>Servicios</Link>
          <Link href="/#proyectos" onClick={() => setOpen(false)}>Proyectos</Link>
          <Link href="/#precios" onClick={() => setOpen(false)}>Precios</Link>
          <Link href="/#contacto" onClick={() => setOpen(false)}>Contacto</Link>

          <a
            href="https://wa.me/5212202231274?text=Hola,%20quiero%20una%20cotización%20para%20mi%20negocio"
            onClick={() => setOpen(false)}
            className="mt-2 bg-orange-500 text-white px-6 py-3.5 rounded-xl text-center text-lg font-semibold hover:scale-105 transition"
          >
            Cotizar
          </a>

        </div>
      )}
    </motion.nav>
  )
}

export default Navbar