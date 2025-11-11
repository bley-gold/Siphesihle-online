import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-balance">SIPHESIHLE</h1>
                <p className="text-xl md:text-2xl text-accent font-light mb-8">Actor & Performer</p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                  Theatre and Performing Arts student at Tshwane University of Technology. Fluent in multiple languages,
                  dedicated to bringing authentic characters to life on stage.
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base rounded-sm">
                    Contact Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-base rounded-sm border-muted-foreground text-foreground hover:bg-muted/50 bg-transparent"
                  >
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 rounded-sm flex items-center justify-center overflow-hidden border border-accent/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sihle%20rusume-tKgx8gWtw1PHiSIdaHfP6HApWBm0QB.jpg"
                  alt="Siphesihle Mabona"
                  className="w-full h-full object-cover mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 pointer-events-none mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/5 rounded-sm -z-10"></div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 px-6 md:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</p>
              <p className="text-lg font-medium">Amlegendpercy@gmail.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Phone</p>
              <p className="text-lg font-medium">071 719 1025</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Location</p>
              <p className="text-lg font-medium">3 Rissik St, Sunnyside, Pretoria, 0001</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Languages</p>
              <p className="text-lg font-medium">IsiXhosa, IsiZulu, Sesotho, English</p>
            </div>
          </div>
        </section>

        {/* CTA to Media */}
        <section className="py-20 px-6 md:px-12 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Explore My Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/headshots" className="group">
                <div className="bg-background border border-border p-6 rounded-sm hover:border-accent transition h-full flex flex-col items-center justify-center">
                  <p className="text-2xl mb-4">📸</p>
                  <p className="font-bold group-hover:text-accent transition">Headshots</p>
                </div>
              </Link>
              <Link href="/production" className="group">
                <div className="bg-background border border-border p-6 rounded-sm hover:border-accent transition h-full flex flex-col items-center justify-center">
                  <p className="text-2xl mb-4">🎬</p>
                  <p className="font-bold group-hover:text-accent transition">Production Shots</p>
                </div>
              </Link>
              <Link href="/portfolio" className="group">
                <div className="bg-background border border-border p-6 rounded-sm hover:border-accent transition h-full flex flex-col items-center justify-center">
                  <p className="text-2xl mb-4">🎭</p>
                  <p className="font-bold group-hover:text-accent transition">Portfolio</p>
                </div>
              </Link>
              <Link href="/gallery" className="group">
                <div className="bg-background border border-border p-6 rounded-sm hover:border-accent transition h-full flex flex-col items-center justify-center">
                  <p className="text-2xl mb-4">🖼️</p>
                  <p className="font-bold group-hover:text-accent transition">Gallery</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 md:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Siphesihle Mabona. All rights reserved.</p>
            <div className="flex gap-6">
             
              <Link href="#" className="hover:text-accent transition">
                Instagram
              </Link>
           
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
