"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import TopBar from "./TopBar";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    { name: "Orgonitas", href: "/productos/orgonitas" },
    { name: "Cemenites", href: "/productos/cemenites" },
    { name: "Pirámides", href: "/productos/piramides" },
    { name: "Colgantes", href: "/productos/colgantes" },
  ];

  return (
    <>
      {/* TopBar - Header Superior */}
      <TopBar />

      {/* Header Principal */}
      <motion.header 
        className={`sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 theme-transition ${
          isScrolled ? "shadow-md" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
              <motion.div 
                className="relative w-16 h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {mounted && theme === "dark" ? (
                  <div className="text-2xl font-serif font-bold text-primary-light">AO</div>
                ) : (
                  <div className="text-2xl font-serif font-bold text-primary">AO</div>
                )}
              </motion.div>
              <span className="text-2xl font-serif font-bold hidden sm:inline">
                Artesanía Orgónica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Menú Productos con Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  Productos
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-lg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block px-4 py-3 text-sm rounded-md hover:bg-secondary/10 transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                        <Link
                          href="/productos"
                          className="block px-4 py-3 text-sm font-semibold text-primary rounded-md hover:bg-secondary/10 transition-colors border-t border-border mt-2 pt-3"
                        >
                          Ver todos los productos →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
                Nosotros
              </Link>
              <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                Blog
              </Link>
              <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Búsqueda */}
              <button className="hidden md:flex p-2 hover:bg-secondary/10 rounded-lg transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>

              {/* Carrito */}
              <Link href="/cart" className="relative p-2 hover:bg-secondary/10 rounded-lg transition-colors">
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              <ThemeToggle />
              
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden border-t border-border"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="py-4 space-y-2">
                  <div className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                      Productos
                    </div>
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block px-8 py-2 text-sm hover:bg-secondary/10 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <Link href="/#about" className="block px-4 py-2 text-sm hover:bg-secondary/10 transition-colors">
                    Nosotros
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-secondary/10 transition-colors">
                    Blog
                  </Link>
                  <Link href="/contacto" className="block px-4 py-2 text-sm hover:bg-secondary/10 transition-colors">
                    Contacto
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
