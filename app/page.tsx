'use client'

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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            IW
          </div>
          <span className="font-bold text-xl tracking-wide">Impulso Web</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#servicios" className="hover:text-orange-500 transition tracking-wide">Servicios</a>
          <a href="#proyectos" className="hover:text-orange-500 transition tracking-wide">Proyectos</a>
          <a href="#precios" className="hover:text-orange-500 transition tracking-wide">Precios</a>
          <a href="#contacto" className="hover:text-orange-500 transition tracking-wide">Contacto</a>
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

          <a href="#servicios" onClick={() => setOpen(false)} className="hover:text-orange-500 transition">
            Servicios
          </a>

          <a href="#proyectos" onClick={() => setOpen(false)} className="hover:text-orange-500 transition">
            Proyectos
          </a>

          <a href="#precios" onClick={() => setOpen(false)} className="hover:text-orange-500 transition">
            Precios
          </a>

          <a href="#contacto" onClick={() => setOpen(false)} className="hover:text-orange-500 transition">
            Contacto
          </a>

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

/* ===== DATA ===== */
const services = [
  {
    icon: Monitor,
    title: "Páginas Web",
    desc: "Diseños modernos enfocados en conversión."
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    desc: "Vende tus productos 24/7."
  },
  {
    icon: Wrench,
    title: "Reparación",
    desc: "Soluciones rápidas y confiables."
  }
]

/* ===== PAGE ===== */
export default function Home() {

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <main className="bg-white dark:bg-gray-950 text-black dark:text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">

        <img
          src="/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div style={{ y }} className="relative z-10 px-6 pt-32 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Impulsa tu negocio con una <span className="text-orange-500">web que vende</span>
          </motion.h1>

          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
            Diseño web profesional en Guerrero para negocios que quieren atraer más clientes.
          </p>

          <a
            href="https://wa.me/5212202231274?text=Hola,%20quiero%20una%20cotización%20para%20mi%20negocio"
            className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition px-8 py-4 rounded-xl text-white"
          >
            Solicitar demo
          </a>
        </motion.div>
      </section>

      {/* BADGES */}
     <section className="pt-2 pb-10 md:pt-6 md:pb-14 px-6">

        <div className="max-w-6xl mx-auto text-center">

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Negocios que ya están creciendo 🚀
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Ayudamos a negocios locales a atraer más clientes, mejorar su imagen y automatizar procesos.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl border shadow-sm hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">+50</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Proyectos entregados
              </p>
              <span className="text-sm text-gray-400">
                Webs, sistemas y automatizaciones
              </span>
            </div>

            <div className="p-8 rounded-2xl border shadow-sm hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">+30</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Clientes satisfechos
              </p>
              <span className="text-sm text-gray-400">
                Negocios locales y emprendedores
              </span>
            </div>

            <div className="p-8 rounded-2xl border shadow-sm hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Enfoque en resultados
              </p>
              <span className="text-sm text-gray-400">
                Optimización y crecimiento real
              </span>
            </div>

          </div>

          {/* Línea de confianza extra */}
          <div className="mt-16">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Trabajamos con negocios que quieren <span className="text-orange-500 font-semibold">crecer en serio</span>, no solo tener una web bonita.
            </p>
          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-10 md:py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {services.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={i}>
                <div className="h-full flex flex-col justify-between p-8 rounded-2xl border transition transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <Icon className="mb-4 text-orange-500" size={40} />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>

                  <div className="mt-6">
                    <span className="text-orange-500 text-sm font-semibold">
                      Ver más →
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* PORTAFOLIO */}
     <section id="proyectos" className="py-10 md:py-14 bg-gray-100 dark:bg-gray-900 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Proyectos recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

         {
          [
            {
              slug: "registro",
              img: "/proyecto1.jpg",
              title: "Sistema de Registro de Usuarios",
              desc: "Sistema completo de autenticación y gestión de usuarios."
            },
            {
              slug: "gastos",
              img: "/proyecto2.jpg",
              title: "Sistema de Control de Gastos",
              desc: "Control y análisis de gastos."
            },
            {
              slug: "reportes",
              img: "/proyecto3.jpg",
              title: "Automatización de Reportes",
              desc: "Generación automática de reportes."
            }
          ].map((project, i) => (
            <Reveal key={i}>
              <div className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

                {/* Imagen */}
                <img
                  src={project.img}
                  className="w-full h-48 object-cover"
                  alt={project.title}
                />

                {/* Contenido */}
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.desc}
                    </p>
                  </div>

                  <a href={`/proyectos/${project.slug}`} className="text-orange-500 text-sm mt-4 inline-block">
                    Ver detalle →
                  </a>
                </div>

              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Clientes que ya están creciendo
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {[
            { name: "Carlos M.", text: "Mi negocio empezó a recibir clientes desde la primera semana." },
            { name: "Ana G.", text: "Pasé de no vender nada online a tener pedidos diarios." },
            { name: "Luis R.", text: "La mejor inversión que hice este año." }
          ].map((t, i) => (
            <Reveal key={i}>
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl border shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  “{t.text}”
                </p>
                <span className="font-semibold text-orange-500">
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-10 md:py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Planes diseñados para crecer
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Básico",
              price: "$2,999",
              features: ["Landing page", "Responsive", "1 sección"],
            },
            {
              title: "Pro",
              price: "$5,999",
              features: ["Web completa", "SEO básico", "WhatsApp"],
              highlight: true
            },
            {
              title: "Premium",
              price: "$9,999",
              features: ["E-commerce", "Automatización", "Soporte"],
            }
          ].map((plan, i) => (
            <Reveal key={i}>
              <div className={`p-8 rounded-2xl border text-center transition  ${
                plan.highlight  
                        ? 'bg-orange-500 text-white scale-105 shadow-xl hover:scale-110'
                        : 'hover:scale-105 hover:shadow-xl'
              }`}>
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>

                <ul className="mb-6 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5212202231274?text=Hola,%20quiero%20una%20cotización%20para%20mi%20negocio"
                  className={`px-6 py-3 rounded-lg ${
                    plan.highlight
                      ? 'bg-white text-black'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  Elegir plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 text-2xl md:text-3xl font-bold text-center max-w-2xl mx-auto">
          Diseñado para negocios que quieren <span className="text-orange-500">resultados reales</span> 🚀
        </p>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-10 md:py-14 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Tu negocio merece vender más
        </h2>

        <p className="mb-8 text-gray-500">
          Agenda una demo y empieza hoy
        </p>

        <a
          href="https://wa.me/5212202231274?text=Hola,%20quiero%20una%20cotización%20para%20mi%20negocio"
          className="inline-flex justify-center items-center w-full sm:w-auto bg-orange-500 px-8 py-4 rounded-xl text-white"
        >
          Quiero mi página
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="mb-2 font-semibold">Impulso Web Guerrero</p>
        <p className="text-sm text-gray-400">
          Diseño web profesional para negocios que quieren crecer 🚀
        </p>
      </footer>
        <a
        href="https://wa.me/5212202231274?text=Hola,%20vi%20tu%20página%20y%20quiero%20una%20web%20para%20mi%20negocio"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-lg z-50 transition hover:scale-110"
      >
        💬
      </a>
    </main>
  )
}