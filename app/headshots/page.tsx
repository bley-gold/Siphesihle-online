import { Navigation } from "@/components/navigation"

export default function Headshots() {
  const headshots = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.58_6c9a31dd-YYZDCMwcvBJb3YufZ1sl23zkDxhCEo.jpg",
      alt: "Siphesihle in turquoise and blue",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.53_97f7c14b-yYSUD3wNaDAq7Vnf2ZDVu5YQs0nBgD.jpg",
      alt: "Siphesihle in burgundy",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.58_0e46a6d4-c3quX9Y9P5KNyJmTW9a80W2KRV0nyS.jpg",
      alt: "Siphesihle professional headshot",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.57_c8df610f-22t0Tsi4BOOVYdVDTktWtDER5qZrVj.jpg",
      alt: "Siphesihle against brick wall",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.59_077a5ac8-E24Vs2ECeYZFIpqvLP29fTUDFGNom6.jpg",
      alt: "Siphesihle with beaded necklace",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.53_e10bb573-4JpjucfYMWTWeg2zwiSuNirg24Pd9k.jpg",
      alt: "Siphesihle smiling in burgundy",
    },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Headshots</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headshots.map((shot, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm border border-border hover:border-accent transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={shot.url || "/placeholder.svg"}
                    alt={shot.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{shot.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
