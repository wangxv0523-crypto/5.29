import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Oil Immersed Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC manufactures high-quality oil immersed transformers with IEC 60076 / S13 energy efficiency standards. Voltage 6kV–35kV, Capacity 30–2500kVA.',
  keywords: 'oil immersed transformer, oil transformer manufacturer, power transformer, energy efficient transformer, IEC 60076',
  openGraph: {
    title: 'Oil Immersed Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Professional oil immersed transformer manufacturer with IEC 60076 compliance and global deployment.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/oil-immersed-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil Immersed Transformer Manufacturer | WENZE ELECTRIC',
    description: 'High-quality oil immersed transformers for industrial and power distribution applications.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/oil-immersed-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'oil-immersed-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'droplets' as const
  }} />
}
