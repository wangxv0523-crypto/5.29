import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'High Voltage Power Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC manufactures high-voltage power transformers (66kV–750kV) with on-load tap changers and advanced cooling systems for transmission and large industrial applications.',
  keywords: 'high voltage transformer, power transformer 220kV, transmission transformer, OLTC transformer, industrial transformer',
  openGraph: {
    title: 'High Voltage Power Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Ultra-high voltage power transformers with capacities up to 500MVA for utility grids and industrial infrastructure.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/high-voltage-power-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Voltage Power Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Heavy-duty high-voltage transformers for power transmission systems.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/high-voltage-power-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'high-voltage-power-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'zap' as const
  }} />
}
