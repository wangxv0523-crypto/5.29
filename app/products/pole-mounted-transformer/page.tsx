import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Pole-Mounted Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC manufactures compact pole-mounted transformers for overhead distribution lines. Single-phase and three-phase options available. Ideal for rural electrification.',
  keywords: 'pole-mounted transformer, pole transformer, overhead transformer, distribution transformer, rural electrification',
  openGraph: {
    title: 'Pole-Mounted Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Lightweight, efficient pole-mounted transformers for overhead power distribution networks.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/pole-mounted-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pole-Mounted Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Pole-mounted transformers for rural and overhead distribution systems.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/pole-mounted-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'pole-mounted-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{ ...data, iconName: 'radio' as const }} />
}
