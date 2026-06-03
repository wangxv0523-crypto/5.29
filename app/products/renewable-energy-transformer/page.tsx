import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Renewable Energy Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC manufactures advanced renewable energy transformers for solar PV, wind power, and energy storage systems. Inverter-compatible, harmonic-resistant design.',
  keywords: 'renewable energy transformer, solar transformer, wind transformer, energy storage transformer, inverter transformer',
  openGraph: {
    title: 'Renewable Energy Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Specialized transformers for solar farms, wind farms, and battery energy storage systems with advanced harmonic management.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/renewable-energy-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewable Energy Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Transformers designed for solar, wind, and energy storage applications.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/renewable-energy-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'renewable-energy-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{ ...data, iconName: 'sun' as const }} />
}
