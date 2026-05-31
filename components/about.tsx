import { Building2 } from 'lucide-react'

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">About WENZE Power</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              WENZE Power: Professional Transformer Manufacturing
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with a commitment to delivering reliable, high-quality power transformers, WENZE Power operates a modern manufacturing facility equipped with advanced production and testing equipment. Our team combines technical expertise with practical manufacturing experience to produce transformers that meet rigorous international standards.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We manufacture transformer solutions across a wide voltage and capacity range, from compact distribution units to large industrial power transformers. Each unit undergoes comprehensive factory testing to ensure performance reliability and compliance with IEC and ANSI standards.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years in Business</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Countries Served</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Units/Year Capacity</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground mt-1">Product Categories</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div>
            <div className="relative rounded-xl overflow-hidden bg-secondary shadow-lg">
              <img
                src="/大门口.png"
                alt="WENZE Power Manufacturing Facility"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              WENZE Power Manufacturing Facility
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
