import { Droplets, Wind, Zap, Box, Zap as ZapAlt } from 'lucide-react'

export const products = [
  {
    id: 'oil-immersed-transformer',
    icon: Droplets,
    title: 'Oil-Immersed Transformers',
    shortDescription: 'High-efficiency oil-cooled transformers designed for heavy-duty industrial applications and power distribution networks.',
    fullDescription: 'Oil immersed transformers are widely used in industrial plants, utility networks, power distribution systems and renewable energy projects. The mineral oil provides excellent insulation and cooling properties, making these transformers suitable for high-capacity applications in demanding environments.',
    applications: ['Industrial Plants', 'Utility Networks', 'Power Distribution', 'Substations', 'Renewable Energy'],
    standardSizes: ['100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA', '10000kVA'],
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
    standardSizes: ['50kVA', '100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA'],
    image: '/干式变压器.png',
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
    id: 'distribution-transformer',
    icon: Box,
    title: 'Distribution Transformers',
    shortDescription: 'Reliable transformers designed for utility power distribution and smart grid applications.',
    fullDescription: 'Distribution transformers are designed for utility power distribution networks. They are commonly used in residential areas, commercial developments, and urban distribution systems where reliable and efficient power delivery is essential.',
    applications: ['Utility Networks', 'Residential Areas', 'Commercial Developments', 'Urban Distribution', 'Smart Grid Systems'],
    standardSizes: ['50kVA', '100kVA', '160kVA', '250kVA', '400kVA', '630kVA', '1000kVA'],
    image: '/配电变压器.png',
    specs: {
      voltage: '10kV / 20kV / 33kV',
      capacity: '50kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC 60076 / ANSI',
    },
    features: [
      'Reliable performance',
      'Low energy loss',
      'Long operational life',
      'Easy maintenance',
      'Wide deployment range',
    ],
  },
  {
    id: 'high-voltage-transformer',
    icon: ZapAlt,
    title: 'High Voltage Power Transformers',
    shortDescription: 'Heavy-duty transformers for utility grids and large industrial power systems with voltages up to 220kV.',
    fullDescription: 'High voltage power transformers are designed for utility power grids, large industrial power systems, renewable energy projects and major infrastructure developments. These transformers handle high voltage levels with superior performance and reliability.',
    applications: ['Utility Power Grid', 'Industrial Power Systems', 'Renewable Energy Projects', 'Large Infrastructure', 'Power Transmission'],
    standardSizes: ['1000kVA', '2500kVA', '5000kVA', '10000kVA', '20000kVA', '50000kVA', '100000kVA'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      voltage: '35kV – 220kV',
      capacity: '1000kVA – 100MVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF / OFAF',
      standards: 'IEC 60076 / ANSI',
    },
    features: [
      'Superior voltage capacity',
      'Advanced cooling systems',
      'Optimized efficiency',
      'Heavy-duty construction',
      'Extended service life',
    ],
  },
  {
    id: 'compact-substation',
    icon: Zap,
    title: 'Compact Substations',
    shortDescription: 'Pre-fabricated power distribution units combining transformers, switchgear, and protection systems in a single enclosure.',
    fullDescription: 'Compact substations (also known as package substations or kiosk substations) integrate high-voltage switchgear, transformer, and low-voltage distribution equipment into a single pre-fabricated unit. They offer a complete power distribution solution with reduced installation time and space requirements.',
    applications: ['Industrial Facilities', 'Commercial Centers', 'Residential Projects', 'Solar Farms', 'Infrastructure Projects'],
    standardSizes: ['100kVA', '250kVA', '500kVA', '1000kVA', '2000kVA'],
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
