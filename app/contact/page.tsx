"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [showWhatsApp, setShowWhatsApp] = useState(true)

  const handleWhatsAppClick = () => {
    const phoneNumber = "27717191025"
    const message = "Hi Siphesihle, I'd like to discuss a potential project with you."
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to discuss performances, auditions, or collaboration opportunities? I'd love to hear from you.
                Reach out with inquiries, booking requests, or just to say hello.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</p>
                  <Link
                    href="mailto:Amlegendpercy@gmail.com"
                    className="text-lg font-medium text-accent hover:underline"
                  >
                    Amlegendpercy@gmail.com
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Phone</p>
                  <Link href="tel:0717191025" className="text-lg font-medium text-accent hover:underline">
                    071 719 1025
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Location</p>
                  <p className="text-lg font-medium">3 Rissik St, Sunnyside, Pretoria, 0001</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Social Media</p>
                  <div className="flex gap-6">
                    <Link
                      href="https://www.instagram.com/i_am_ngubembi/"
                      target="_blank"
                      className="text-accent hover:underline"
                    >
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-card border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-card border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-card border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full bg-card border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition h-32 resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-sm text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {showWhatsApp && (
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
          title="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
