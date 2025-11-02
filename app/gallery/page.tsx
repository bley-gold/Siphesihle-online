import { Navigation } from "@/components/navigation"

export default function Gallery() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Gallery</h1>

          <div className="bg-card border border-border p-12 rounded-sm text-center">
            <p className="text-xl text-muted-foreground mb-4">Photo gallery coming soon</p>
            <p className="text-muted-foreground">A collection of professional and artistic photographs</p>
          </div>
        </div>
      </div>
    </>
  )
}
