import { Droplets, Wind, Zap, Box } from 'lucide-react'

export const products = [
  {
    id: 'oil-immersed-transformer',
    icon: Droplets,
    title: 'Oil-Immersed Transformers',
    shortDescription: 'High-efficiency oil-cooled transformers designed for heavy-duty industrial applications and power distribution networks.',
    fullDescription: 'Oil immersed transformers are widely used in industrial plants, power distribution systems, commercial buildings and energy infrastructure projects. The mineral oil provides excellent insulation and cooling properties, making these transformers suitable for high-capacity applications in demanding environments.',
    applications: ['Industrial Plants', 'Power Distribution Networks', 'Mining Operations', 'Substations', 'Commercial Buildings'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E7%AB%99%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%9B%BE%E7%89%87-aoXskClX6ojrlf6kS8yYf2h66cKMzv.jpg',
    specs: {
      voltage: '11kV / 33kV / 35kV',
      capacity: '100kVA – 10,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076 / ANSI',
    },
    features: [
      'High overload capacity',
      'Low noise operation',
      'Long service life (25+ years)',
      'Suitable for outdoor installation',
      'Wide ambient temperature range',
    ],
  },
  {
    id: 'dry-type-transformer',
    icon: Wind,
    title: 'Dry-Type Transformers',
    shortDescription: 'Environmentally friendly air-cooled transformers ideal for indoor installations where fire safety is critical.',
    fullDescription: 'Dry type transformers use air as the cooling medium, eliminating the need for oil and reducing fire hazards. They are the preferred choice for indoor applications in commercial buildings, hospitals, data centers, and other environments where safety and environmental considerations are paramount.',
    applications: ['Commercial Buildings', 'Hospitals', 'Data Centers', 'Shopping Malls', 'Underground Facilities'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '6kV / 10kV / 35kV',
      capacity: '50kVA – 5,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'AN / AF',
      standards: 'IEC 60076 / ANSI',
    },
    features: [
      'No fire hazard',
      'Environmentally friendly',
      'Low maintenance',
      'Suitable for indoor use',
      'Self-extinguishing insulation',
    ],
  },
  {
    id: 'pad-mounted-transformer',
    icon: Box,
    title: 'Pad-Mounted Transformers',
    shortDescription: 'Compact ground-mounted transformers designed for underground distribution systems in residential and commercial areas.',
    fullDescription: 'Pad mounted transformers are designed for underground power distribution systems. They feature a tamper-resistant enclosure and are commonly used in residential subdivisions, commercial developments, and urban areas where overhead lines are not permitted.',
    applications: ['Residential Areas', 'Commercial Developments', 'Urban Distribution', 'Underground Systems', 'Solar Projects'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '10kV / 20kV / 33kV',
      capacity: '75kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC 60076 / ANSI / IEEE',
    },
    features: [
      'Tamper-resistant design',
      'Ground-level installation',
      'Compact footprint',
      'Front access for maintenance',
      'Underground cable compatible',
    ],
  },
  {
    id: 'compact-substation',
    icon: Zap,
    title: 'Compact Substations',
    shortDescription: 'Pre-fabricated power distribution units combining transformers, switchgear, and protection systems in a single enclosure.',
    fullDescription: 'Compact substations (also known as package substations or kiosk substations) integrate high-voltage switchgear, transformer, and low-voltage distribution equipment into a single pre-fabricated unit. They offer a complete power distribution solution with reduced installation time and space requirements.',
    applications: ['Industrial Facilities', 'Commercial Centers', 'Residential Projects', 'Solar Farms', 'Infrastructure Projects'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '10kV / 20kV / 33kV',
      capacity: '100kVA – 2,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / AN',
      standards: 'IEC 62271 / ANSI',
    },
    features: [
      'Pre-assembled and tested',
      'Reduced installation time',
      'Compact design',
      'Weather-resistant enclosure',
      'Complete protection system',
    ],
  },
]

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.id === slug)
}
