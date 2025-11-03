"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { generateCVPDF } from "@/app/actions/generate-cv"

export default function Resume() {
  const handleDownloadCV = async () => {
    try {
      const pdfBuffer = await generateCVPDF()
      const blob = new Blob([pdfBuffer], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Siphesihle_Mabona_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Resume</h1>
            <Button
              onClick={handleDownloadCV}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-sm"
            >
              Download PDF
            </Button>
          </div>

          <div className="space-y-16">
            {/* Personal Details */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-accent">Personal Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Date of Birth</p>
                  <p className="text-lg">02/06/1995 (Age 29)</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Height</p>
                  <p className="text-lg">179 cm</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Physical Attributes</p>
                  <p className="text-lg">Waist: 34, Shirt: M, Shoe: 8</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Appearance</p>
                  <p className="text-lg">African, Black Hair, Brown Eyes</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Driver's License</p>
                  <p className="text-lg">Yes</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Valid Passport</p>
                  <p className="text-lg">No</p>
                </div>
              </div>
            </div>

            {/* Film & TV Experience */}
            <div className="border-t border-border pt-16">
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-accent">Film & Television</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Grootboom and Sons</h3>
                      <p className="text-muted-foreground text-lg">Support, Nyaope Boy</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2021</span>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Opera Mini</h3>
                      <p className="text-muted-foreground text-lg">Commercial</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2018</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Theatre Experience */}
            <div className="border-t border-border pt-16">
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-accent">Theatre Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Their Fear</h3>
                      <p className="text-muted-foreground text-lg">Joburg Theatre Space.com</p>
                      <p className="text-muted-foreground">Directed by Lusapho Gqobo</p>
                      <p className="text-foreground mt-2">Played Multiple Characters</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2022</span>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Ntombi Ka Zwelidumile</h3>
                      <p className="text-muted-foreground text-lg">Directed by Lindiwe Mokoena</p>
                      <p className="text-foreground mt-2">Played Malibongwe</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2022</span>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Little Red Riding Hood</h3>
                      <p className="text-muted-foreground text-lg">Directed by Aqhama Ngozinza</p>
                      <p className="text-foreground mt-2">Played The Narrator, Uncle</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2022</span>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">The Lion and the Jewel</h3>
                      <p className="text-muted-foreground text-lg">Directed by Siphesihle Mabona</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="border-t border-border pt-16">
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-accent">Skills & Abilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Professional Skills</h3>
                  <div className="space-y-3">
                    {[
                      "Acting",
                      "Directing",
                      "Facilitating",
                      "Voice Acting",
                      "Adaptivity",
                      "Effective Communication",
                      "Teamwork",
                      "Attention to details",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Languages</h3>
                  <div className="space-y-3">
                    {[
                      "IsiXhosa - Native",
                      "IsiZulu - Fluent",
                      "Sesotho - Fluent",
                      "English - Fluent",
                      "Neutral Accent",
                    ].map((lang) => (
                      <div key={lang} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
