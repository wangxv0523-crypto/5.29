import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Droplets, Wind, Zap, MessageCircle } from 'lucide-react'

// WhatsApp预设消息
const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Country/Project Location: 

Thank you.`
)

const products = [
  {
    icon: Droplets,
    title: 'Oil-Immersed Transformers',
    description: 'High-efficiency oil-cooled transformers designed for heavy-duty industrial applications and power distribution networks.',
    applications: ['Power Plants', 'Industrial Facilities', 'Mining Operations', 'Substations'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E7%AB%99%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%9B%BE%E7%89%87-aoXskClX6ojrlf6kS8yYf2h66cKMzv.jpg',
    specs: {
      voltage: '11kV / 33kV / 35kV',
      capacity: '100kVA – 10,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076 / ANSI',
    },
  },
  {
    icon: Wind,
    title: 'Dry-Type Transformers',
    description: 'Environmentally friendly air-cooled transformers ideal for indoor installations where fire safety is critical.',
    applications: ['Commercial Buildings', 'Hospitals', 'Data Centers', 'Underground'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '6kV / 10kV / 35kV',
      capacity: '50kVA – 5,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'AN / AF',
      standards: 'IEC 60076 / ANSI',
    },
  },
  {
    icon: Zap,
    title: 'Distribution Transformers',
    description: 'Reliable power distribution solutions for urban and rural electricity networks with optimized efficiency.',
    applications: ['Utility Networks', 'Residential', 'Rural Electrification', 'Smart Grid'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '10kV / 20kV / 33kV',
      capacity: '50kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC 60076 / ANSI',
    },
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Transformer Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Comprehensive range of power transformers designed for diverse industrial and utility applications. 
            All products comply with international standards including IEC, ANSI, and regional grid codes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="group overflow-hidden border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <product.icon className="w-6 h-6" />
                    <span className="font-bold text-lg">{product.title}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-5">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Technical Specifications - Engineering Spec Table */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="bg-primary px-4 py-2.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Technical Specifications</h4>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="flex items-center px-4 py-2.5 bg-white">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Voltage</span>
                      <span className="text-sm font-semibold text-foreground">{product.specs.voltage}</span>
                    </div>
                    <div className="flex items-center px-4 py-2.5 bg-secondary/30">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Capacity</span>
                      <span className="text-sm font-semibold text-foreground">{product.specs.capacity}</span>
                    </div>
                    <div className="flex items-center px-4 py-2.5 bg-white">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Frequency</span>
                      <span className="text-sm font-semibold text-foreground">{product.specs.frequency}</span>
                    </div>
                    <div className="flex items-center px-4 py-2.5 bg-secondary/30">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Cooling</span>
                      <span className="text-sm font-semibold text-foreground">{product.specs.cooling}</span>
                    </div>
                    <div className="flex items-center px-4 py-2.5 bg-white">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">Standards</span>
                      <span className="text-sm font-semibold text-foreground">{product.specs.standards}</span>
                    </div>
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Applications</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app) => (
                      <span key={app} className="text-xs px-2 py-1 rounded bg-primary/5 text-primary border border-primary/10">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                  <Link href="#contact">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 bg-white rounded-xl border border-border p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Need a Custom Transformer Solution?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We specialize in designing transformers tailored to your specific project requirements, 
                including custom voltage levels, special cooling systems, and regional grid compliance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Custom voltage and capacity configurations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Compliance with local grid standards (TNB, PLN, DEWA, GOST, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Special environmental adaptations (high altitude, extreme temperatures)
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 text-base">
                <Link href="#contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold h-14 text-base">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
