"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-accent transition">
            SIPHESIHLE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/about"
              className={`text-sm uppercase tracking-wide transition ${isActive("/about") ? "text-accent" : "hover:text-accent"}`}
            >
              About
            </Link>
            <Link
              href="/resume"
              className={`text-sm uppercase tracking-wide transition ${isActive("/resume") ? "text-accent" : "hover:text-accent"}`}
            >
              Resume
            </Link>

            {/* Media Dropdown */}
            <div className="relative group">
              <button
                className={`text-sm uppercase tracking-wide transition ${["/", "/gallery", "/headshots", "/production", "/portfolio"].some((p) => isActive(p)) ? "text-accent" : "group-hover:text-accent"}`}
              >
                Media
              </button>
              <div className="absolute left-0 mt-0 w-40 bg-card border border-border rounded hidden group-hover:block">
                <Link
                  href="/gallery"
                  className="block px-4 py-3 text-sm hover:bg-muted transition border-b border-border last:border-b-0"
                >
                  Gallery
                </Link>
                <Link
                  href="/headshots"
                  className="block px-4 py-3 text-sm hover:bg-muted transition border-b border-border last:border-b-0"
                >
                  Headshots
                </Link>
                <Link
                  href="/production"
                  className="block px-4 py-3 text-sm hover:bg-muted transition border-b border-border last:border-b-0"
                >
                  Production Shots
                </Link>
                <Link href="/portfolio" className="block px-4 py-3 text-sm hover:bg-muted transition">
                  Portfolio
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`text-sm uppercase tracking-wide transition ${isActive("/contact") ? "text-accent" : "hover:text-accent"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-border pt-4">
            <Link href="/about" className="block text-sm uppercase tracking-wide hover:text-accent transition">
              About
            </Link>
            <Link href="/resume" className="block text-sm uppercase tracking-wide hover:text-accent transition">
              Resume
            </Link>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Media</p>
              <div className="pl-4 space-y-2">
                <Link href="/gallery" className="block text-sm hover:text-accent transition">
                  Gallery
                </Link>
                <Link href="/headshots" className="block text-sm hover:text-accent transition">
                  Headshots
                </Link>
                <Link href="/production" className="block text-sm hover:text-accent transition">
                  Production Shots
                </Link>
                <Link href="/portfolio" className="block text-sm hover:text-accent transition">
                  Portfolio
                </Link>
              </div>
            </div>
            <Link href="/contact" className="block text-sm uppercase tracking-wide hover:text-accent transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
