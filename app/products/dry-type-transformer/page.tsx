import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dry Type Transformer Manufacturer | WENZE ELECTRIC',
  description: 'WENZE ELECTRIC produces fire-safe dry type transformers with F/H class epoxy resin insulation for indoor installation. IEC 60076-11 compliant.',
  keywords: 'dry type transformer, fire-safe transformer, epoxy resin transformer, indoor transformer, IEC 60076-11',
  openGraph: {
    title: 'Dry Type Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Premium dry type transformers designed for safe, clean indoor installations in data centers, hospitals, and commercial buildings.',
    type: 'product',
    url: 'https://www.wenze-global.com/products/dry-type-transformer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dry Type Transformer Manufacturer | WENZE ELECTRIC',
    description: 'Fire-safe dry type transformers for indoor power distribution applications.',
  },
  alternates: {
    canonical: 'https://www.wenze-global.com/products/dry-type-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'dry-type-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'wind' as const
  }} />
}
