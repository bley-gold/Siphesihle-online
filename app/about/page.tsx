import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">About Me</h1>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-accent">Professional Summary</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  I am a motivated, adaptable, and responsible performer with a proven track record of excellence.
                  Theatre and Performing Arts are my passion, and I excel in environments that prioritize continuous
                  learning and personal growth.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  My experience spans film, television, and theatre productions, with roles ranging from supporting
                  characters to lead performances. Each role has refined my craft and deepened my commitment to
                  authentic, compelling performances.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Fluent in four languages—IsiXhosa, IsiZulu, Sesotho, and English—I bring cultural authenticity and
                  versatility to every character I portray. I'm committed to bringing authentic, compelling performances
                  to every stage.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-3xl font-bold mb-6 text-accent">Education</h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-accent pl-6 py-4">
                    <h3 className="text-2xl font-bold mb-2">Theatre and Performing Arts</h3>
                    <p className="text-muted-foreground mb-2">Tshwane University of Technology</p>
                    <p className="text-accent font-bold">2021 - 2024</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6 py-4">
                    <h3 className="text-2xl font-bold mb-2">Secondary School</h3>
                    <p className="text-muted-foreground mb-2">Gansbaai Academia</p>
                    <p className="text-accent font-bold">2010 - 2015</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-accent/30 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-6 text-accent">Core Strengths</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Adaptivity & Versatility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Effective Communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Stage Presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Teamwork & Collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Cultural Authenticity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Attention to Detail</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-accent/30 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-6 text-accent">Languages</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold mb-1">IsiXhosa</p>
                    <p className="text-sm text-muted-foreground">Native Fluency</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">IsiZulu</p>
                    <p className="text-sm text-muted-foreground">Fluent</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Sesotho</p>
                    <p className="text-sm text-muted-foreground">Fluent</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">English</p>
                    <p className="text-sm text-muted-foreground">Fluent</p>
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
