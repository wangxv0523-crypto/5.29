import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getProductBySlug, products } from '@/lib/products-data'
import { ArrowLeft, ArrowRight, MessageCircle, Mail, Factory, Building2, Sun, Pickaxe, Zap, Fuel } from 'lucide-react'

// WhatsApp预设消息
const getWhatsAppMessage = (productName: string) => encodeURIComponent(
`Hello, I'm interested in your ${productName}.

Please provide a quote for:
1. Voltage (kV): 
2. Capacity (kVA): 
3. Quantity: 
4. Country/Project Location: 

Thank you.`
)

const applicationIcons: Record<string, React.ElementType> = {
  'Industrial Plants': Factory,
  'Power Distribution Networks': Zap,
  'Mining Operations': Pickaxe,
  'Substations': Zap,
  'Commercial Buildings': Building2,
  'Hospitals': Building2,
  'Data Centers': Building2,
  'Shopping Malls': Building2,
  'Underground Facilities': Building2,
  'Residential Areas': Building2,
  'Commercial Developments': Building2,
  'Urban Distribution': Zap,
  'Underground Systems': Zap,
  'Solar Projects': Sun,
  'Solar Farms': Sun,
  'Industrial Facilities': Factory,
  'Commercial Centers': Building2,
  'Residential Projects': Building2,
  'Infrastructure Projects': Building2,
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }
  
  return {
    title: `${product.title} | WENZE Power`,
    description: product.fullDescription,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const Icon = product.icon
  const whatsappMessage = getWhatsAppMessage(product.title)

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-primary/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Power Transformer</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{product.title}</h1>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.fullDescription}
              </p>

              {/* Technical Specifications */}
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-6 py-3">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">Technical Specifications</h2>
                </div>
                <div className="divide-y divide-border">
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Voltage</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.voltage}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-secondary/30">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Capacity</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.capacity}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Frequency</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.frequency}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-secondary/30">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Cooling</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.cooling}</span>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-white">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-32 shrink-0">Standards</span>
                    <span className="text-sm font-semibold text-foreground">{product.specs.standards}</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-6">
                  <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Inquiry
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold h-12 px-6">
                  <a href="mailto:sales@wenze-global.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {product.applications.map((app) => {
              const AppIcon = applicationIcons[app] || Building2
              return (
                <div key={app} className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <AppIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{app}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Request A Quote</h2>
            <p className="text-white/80 mb-8">
              Send us your project requirements and receive a quotation within <span className="font-bold text-accent">24 hours</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-8 text-base">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold h-14 px-8 text-base">
                <a href="mailto:sales@wenze-global.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/#products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/#contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
