import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'

export const metadata = {
  title: 'Compact Substations | Power Transformers',
  description: 'Pre-fabricated units combining transformers, switchgear, and protection systems in one enclosure.'
}

export default function Page() {
  const product = products.find(p => p.id === 'compact-substation')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'zap' as const
  }} />
}
