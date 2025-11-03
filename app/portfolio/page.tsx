import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  const theatreProductions = [
    {
      title: "Their Fear",
      director: "Directed by Lusapho Gqobo",
      venue: "Joburg Theatre Space.com",
      role: "Played Multiple Characters",
      year: "2022",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.58_6c9a31dd-YYZDCMwcvBJb3YufZ1sl23zkDxhCEo.jpg",
    },
    {
      title: "Ntombi Ka Zwelidumile",
      director: "Directed by Lindiwe Mokoena",
      venue: "Theatre Production",
      role: "Played Malibongwe",
      year: "2022",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.53_97f7c14b-yYSUD3wNaDAq7Vnf2ZDVu5YQs0nBgD.jpg",
    },
    {
      title: "Little Red Riding Hood",
      director: "Directed by Aqhama Ngozinza",
      venue: "Theatre Production",
      role: "Played The Narrator, Uncle",
      year: "2022",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.57_c8df610f-22t0Tsi4BOOVYdVDTktWtDER5qZrVj.jpg",
    },
    {
      title: "The Lion and the Jewel",
      director: "Directed by Siphesihle Mabona",
      venue: "Theatre Production",
      role: "Lead Performance",
      year: "2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2010.50.59_077a5ac8-E24Vs2ECeYZFIpqvLP29fTUDFGNom6.jpg",
    },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Portfolio</h1>

          <div className="space-y-12">
            {theatreProductions.map((production, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center border-b border-border pb-12 last:border-b-0"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{production.title}</h3>
                  <p className="text-muted-foreground text-lg">{production.director}</p>
                  <p className="text-accent font-bold">{production.venue}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground mb-2">
                      <span className="font-bold">Role:</span> {production.role}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-bold">Year:</span> {production.year}
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-sm border border-border group">
                  <img
                    src={production.image || "/placeholder.svg"}
                    alt={production.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
