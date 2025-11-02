import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Resume</h1>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-sm">
              Download PDF
            </Button>
          </div>

          <div className="space-y-16">
            {/* Experience */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-8 text-accent">Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Brand Ambassador</h3>
                      <p className="text-muted-foreground text-lg">South Point</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2023</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Represented the brand at high-impact events and promotional activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Engaged audiences to increase brand awareness and promote services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Distributed marketing materials with professional presence and charisma</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Teacher Assistant</h3>
                      <p className="text-muted-foreground text-lg">Reigerpark Primary School</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2016</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Assisted with classroom management and student support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Contributed to lesson preparation and administrative tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Monitored students during activities with precision and care</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-8 py-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Counter & Scanner Operator</h3>
                      <p className="text-muted-foreground text-lg">Ghekko Stocktaking</p>
                    </div>
                    <span className="text-accent font-bold text-lg whitespace-nowrap">2017-2018</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Performed accurate inventory counts and scanner operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Entered data into inventory systems and resolved discrepancies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Collaborated with teams to meet stocktaking deadlines</span>
                    </li>
                  </ul>
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
                      "Adaptivity",
                      "Effective Communication",
                      "Teamwork",
                      "Multitasking",
                      "Attention to details",
                      "Time management",
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
                    {["IsiXhosa - Native", "IsiZulu - Fluent", "Sesotho - Fluent", "English - Fluent"].map((lang) => (
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
