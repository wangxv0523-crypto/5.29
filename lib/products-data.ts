import { Droplets, Wind, Zap, Box, Radio, Sun } from 'lucide-react'

export interface ProductSpecRow {
  capacity: string
  voltage: string
  dimensions: string
  weight?: string
}

export interface Product {
  id: string
  icon: React.ElementType
  title: string
  shortDescription: string
  fullDescription: string
  standardSizes: string[]
  image: string
  specs: {
    voltage: string
    capacity: string
    frequency: string
    cooling: string
    standards: string
  }
  features: string[]
  specTable?: ProductSpecRow[]
}

export const products: Product[] = [
  {
    id: 'oil-immersed-transformer',
    icon: Droplets,
    title: 'Oil-Immersed Transformers',
    shortDescription: 'High-efficiency oil-cooled transformers for industrial applications and power distribution networks.',
    fullDescription: 'Oil immersed transformers are widely used in industrial plants, utility networks, power distribution systems and renewable energy projects. The mineral oil provides excellent insulation and cooling properties.',
    standardSizes: ['100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA', '10000kVA'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E7%AB%99%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%9B%BE%E7%89%87-aoXskClX6ojrlf6kS8yYf2h66cKMzv.jpg',
    specs: {
      voltage: '11kV / 22kV / 33kV',
      capacity: '100kVA – 10,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC / ANSI',
    },
    features: [
      'High overload capacity',
      'Low noise operation',
      'Long service life',
      'Outdoor installation suitable',
      'Wide temperature range',
    ],
    specTable: [
      { capacity: '100kVA', voltage: '11kV', dimensions: '1250 × 1050 × 750 mm', weight: '2,500 kg' },
      { capacity: '250kVA', voltage: '11kV', dimensions: '1500 × 1200 × 750 mm', weight: '3,800 kg' },
      { capacity: '500kVA', voltage: '33kV', dimensions: '1650 × 1500 × 900 mm', weight: '5,500 kg' },
      { capacity: '1000kVA', voltage: '33kV', dimensions: '1900 × 1950 × 1100 mm', weight: '8,500 kg' },
      { capacity: '2500kVA', voltage: '33kV', dimensions: '2300 × 2250 × 1350 mm', weight: '15,000 kg' },
    ],
  },
  {
    id: 'dry-type-transformer',
    icon: Wind,
    title: 'Dry-Type Transformers',
    shortDescription: 'Environmentally friendly air-cooled transformers for indoor installations with high fire safety.',
    fullDescription: 'Dry type transformers use air as the cooling medium, eliminating the need for oil. They are ideal for indoor applications in commercial buildings, hospitals, and data centers.',
    standardSizes: ['50kVA', '100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA'],
    image: '/干式变压器.png',
    specs: {
      voltage: '6kV / 10kV / 35kV',
      capacity: '50kVA – 5,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'AN / AF',
      standards: 'IEC / ANSI',
    },
    features: [
      'No fire hazard',
      'Environmentally friendly',
      'Low maintenance',
      'Indoor installation suitable',
      'Self-extinguishing insulation',
    ],
    specTable: [
      { capacity: '50kVA', voltage: '10kV', dimensions: '1000 × 900 × 650 mm', weight: '1,200 kg' },
      { capacity: '100kVA', voltage: '10kV', dimensions: '1200 × 1050 × 750 mm', weight: '1,800 kg' },
      { capacity: '250kVA', voltage: '10kV', dimensions: '1400 × 1250 × 850 mm', weight: '2,800 kg' },
      { capacity: '500kVA', voltage: '10kV', dimensions: '1600 × 1450 × 950 mm', weight: '4,500 kg' },
      { capacity: '1000kVA', voltage: '10kV', dimensions: '1900 × 1750 × 1100 mm', weight: '7,200 kg' },
    ],
  },
  {
    id: 'distribution-transformer',
    icon: Box,
    title: 'Distribution Transformers',
    shortDescription: 'Reliable transformers for utility power distribution networks and smart grid applications.',
    fullDescription: 'Distribution transformers are designed for utility power distribution networks. They are commonly used in residential areas, commercial developments, and urban distribution systems.',
    standardSizes: ['50kVA', '100kVA', '160kVA', '250kVA', '400kVA', '630kVA', '1000kVA'],
    image: '/配电变压器.png',
    specs: {
      voltage: '10kV / 20kV / 33kV',
      capacity: '50kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC / ANSI',
    },
    features: [
      'Reliable performance',
      'Low energy loss',
      'Long operational life',
      'Easy maintenance',
      'Wide deployment range',
    ],
    specTable: [
      { capacity: '50kVA', voltage: '10kV', dimensions: '1050 × 900 × 700 mm', weight: '1,100 kg' },
      { capacity: '100kVA', voltage: '10kV', dimensions: '1200 × 1000 × 750 mm', weight: '1,600 kg' },
      { capacity: '250kVA', voltage: '20kV', dimensions: '1400 × 1200 × 850 mm', weight: '2,500 kg' },
      { capacity: '500kVA', voltage: '20kV', dimensions: '1600 × 1400 × 950 mm', weight: '4,000 kg' },
      { capacity: '1000kVA', voltage: '33kV', dimensions: '1850 × 1700 × 1050 mm', weight: '6,800 kg' },
    ],
  },
  {
    id: 'high-voltage-power-transformer',
    icon: Zap,
    title: 'High Voltage Power Transformers',
    shortDescription: 'Heavy-duty transformers for utility grids and large industrial power systems up to 220kV.',
    fullDescription: 'High voltage power transformers are designed for utility power grids, large industrial power systems, and major infrastructure developments. These transformers handle high voltage levels with superior performance and reliability.',
    standardSizes: ['1000kVA', '2500kVA', '5000kVA', '10000kVA', '20000kVA', '50000kVA', '100000kVA'],
    image: '/高压电力变压器.jpg',
    specs: {
      voltage: '35kV – 220kV',
      capacity: '1000kVA – 100MVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF / OFAF',
      standards: 'IEC / ANSI',
    },
    features: [
      'Superior voltage capacity',
      'Advanced cooling systems',
      'Optimized efficiency',
      'Heavy-duty construction',
      'Extended service life',
    ],
    specTable: [
      { capacity: '1000kVA', voltage: '35kV', dimensions: '2000 × 1900 × 1150 mm', weight: '9,000 kg' },
      { capacity: '2500kVA', voltage: '110kV', dimensions: '2400 × 2200 × 1350 mm', weight: '18,000 kg' },
      { capacity: '5000kVA', voltage: '110kV', dimensions: '2800 × 2500 × 1550 mm', weight: '32,000 kg' },
      { capacity: '10000kVA', voltage: '220kV', dimensions: '3200 × 2900 × 1750 mm', weight: '55,000 kg' },
    ],
  },
  {
    id: 'pole-mounted-transformer',
    icon: Radio,
    title: 'Pole Mounted Transformers',
    shortDescription: 'Compact single-phase and three-phase transformers designed for overhead line installation on utility poles.',
    fullDescription: 'Pole mounted transformers are compact, lightweight units designed for overhead distribution line applications. Widely used in rural electrification, last-mile power delivery, and utility distribution networks, they provide reliable step-down transformation from medium voltage to low voltage at the point of consumption.',
    standardSizes: ['10kVA', '25kVA', '50kVA', '100kVA', '167kVA', '250kVA'],
    image: 'https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      voltage: '11kV / 22kV / 33kV',
      capacity: '10kVA – 250kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC / ANSI',
    },
    features: [
      'Compact and lightweight',
      'Single-phase and three-phase options',
      'Suitable for rural electrification',
      'Overhead line installation',
      'Weather-resistant design',
    ],
    specTable: [
      { capacity: '10kVA', voltage: '11kV', dimensions: '580 × 420 × 500 mm', weight: '160 kg' },
      { capacity: '25kVA', voltage: '11kV', dimensions: '680 × 480 × 580 mm', weight: '260 kg' },
      { capacity: '50kVA', voltage: '22kV', dimensions: '780 × 560 × 650 mm', weight: '420 kg' },
      { capacity: '100kVA', voltage: '22kV', dimensions: '920 × 650 × 730 mm', weight: '680 kg' },
      { capacity: '167kVA', voltage: '33kV', dimensions: '1050 × 720 × 810 mm', weight: '950 kg' },
    ],
  },
  {
    id: 'renewable-energy-transformer',
    icon: Sun,
    title: 'Renewable Energy Transformers',
    shortDescription: 'Purpose-built step-up transformers for solar PV, wind power, and other renewable energy applications.',
    fullDescription: 'Renewable energy transformers are specially engineered for the demanding requirements of solar photovoltaic farms, wind power plants, and energy storage systems. Designed to handle variable load profiles and harmonic content typical of inverter-based generation, these transformers ensure efficient and reliable power conversion from generation to the grid.',
    standardSizes: ['500kVA', '1000kVA', '2500kVA', '5000kVA', '10000kVA'],
    image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      voltage: '0.4kV / 10kV / 35kV',
      capacity: '500kVA – 10,000kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC / ANSI',
    },
    features: [
      'Optimized for inverter-based generation',
      'Low harmonic losses',
      'High overload capability',
      'Solar PV and wind compatible',
      'Suitable for energy storage systems',
    ],
    specTable: [
      { capacity: '500kVA', voltage: '0.4/10kV', dimensions: '1600 × 1400 × 950 mm', weight: '4,200 kg' },
      { capacity: '1000kVA', voltage: '0.4/10kV', dimensions: '1900 × 1700 × 1100 mm', weight: '6,800 kg' },
      { capacity: '2500kVA', voltage: '0.4/35kV', dimensions: '2300 × 2100 × 1350 mm', weight: '14,500 kg' },
      { capacity: '5000kVA', voltage: '10/35kV', dimensions: '2700 × 2400 × 1550 mm', weight: '26,000 kg' },
      { capacity: '10000kVA', voltage: '10/35kV', dimensions: '3100 × 2800 × 1750 mm', weight: '48,000 kg' },
    ],
  },
]

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.id === slug)
}
