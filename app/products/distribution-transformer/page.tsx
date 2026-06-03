import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Distribution Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC manufactures reliable distribution transformers for public utility networks. Available in pole-mounted, ground-mounted, and substation types. Deployed in 80+ countries.',
  keywords: 'distribution transformer, utility transformer, power distribution, pole-mounted transformer, WENZE',
  openGraph: {
    title: 'Distribution Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Trusted distribution transformer manufacturer serving utilities and projects worldwide with proven reliability and performance.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/distribution-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Distribution Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Distribution transformers for public utility networks with global deployment.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/distribution-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'distribution-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'box' as const
  }} />
}
