export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  stock: number
  features: string[]
}

export const products: Product[] = [
  {
    id: "pm-001",
    name: "Full Property Management",
    description: "Complete property management solution for landlords and investors",
    longDescription:
      "Our comprehensive property management service handles everything from tenant screening to maintenance coordination. We provide 24/7 emergency response and ensure full legal compliance for your investments.",
    price: 299,
    image: "/luxury-property-management-office.jpg",
    category: "Management",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    stock: 50,
    features: [
      "Professional tenant screening",
      "Rent collection & accounting",
      "Maintenance coordination",
      "24/7 emergency response",
      "Property inspections",
      "Legal compliance management",
    ],
  },
  {
    id: "pm-002",
    name: "AirBnB Concierge",
    description: "White-glove management for your short-term rental properties",
    longDescription:
      "Maximize your short-term rental revenue with our premium concierge service. We handle everything from professional photography to dynamic pricing strategies to ensure 5-star reviews.",
    price: 899,
    originalPrice: 1200,
    image: "/modern-airbnb-luxury-apartment.jpg",
    category: "Short-Term Rental",
    rating: 4.8,
    reviews: 203,
    inStock: true,
    stock: 30,
    features: [
      "Professional listing optimization",
      "Professional photography",
      "Guest communication",
      "Housekeeping coordination",
      "5-star review guarantee",
      "Dynamic pricing strategy",
    ],
  },
  {
    id: "pm-003",
    name: "Maintenance Mastery",
    description: "Premium maintenance and emergency response services",
    longDescription:
      "Never worry about maintenance issues again. Our vetted contractor network ensures quality work at budget-friendly prices with 24/7 emergency response.",
    price: 149,
    image: "/professional-home-maintenance-service.jpg",
    category: "Maintenance",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    stock: 100,
    features: [
      "24/7 emergency response",
      "Vetted contractor network",
      "Quality inspections",
      "Budget-friendly solutions",
      "Preventative maintenance",
      "Documentation & reporting",
    ],
  },
  {
    id: "pm-004",
    name: "Real Estate Sales",
    description: "Exclusive off-market deals and premium sales service",
    longDescription:
      "Access off-market properties and get expert market analysis. Our team provides exclusive listings and investor connections for seamless transactions.",
    price: 0,
    image: "/luxury-real-estate-showcase.png",
    category: "Sales",
    rating: 4.9,
    reviews: 174,
    inStock: true,
    stock: 25,
    features: [
      "Off-market property access",
      "Expert market analysis",
      "Staging & marketing",
      "Exclusive listings",
      "Investor connections",
      "Seamless transactions",
    ],
  },
  {
    id: "pm-005",
    name: "Tenant Relations Management",
    description: "Comprehensive tenant communication and relationship management",
    longDescription:
      "Keep your tenants happy and reduce turnover. Our tenant relations service handles all communication, lease renewals, and dispute resolution.",
    price: 199,
    image: "/professional-tenant-relations-service.jpg",
    category: "Management",
    rating: 4.6,
    reviews: 67,
    inStock: true,
    stock: 40,
    features: [
      "24/7 tenant support",
      "Lease renewal management",
      "Dispute resolution",
      "Communication coordination",
      "Rent collection assistance",
      "Satisfaction tracking",
    ],
  },
  {
    id: "pm-006",
    name: "Investment Consulting",
    description: "Expert guidance for property investment strategies",
    longDescription:
      "Get personalized investment strategies from our expert consultants. Maximize ROI with data-driven recommendations and market insights.",
    price: 499,
    image: "/investment-portfolio-analysis-luxury.jpg",
    category: "Consulting",
    rating: 5.0,
    reviews: 120,
    inStock: true,
    stock: 20,
    features: [
      "Portfolio analysis",
      "ROI optimization",
      "Market research",
      "Investment recommendations",
      "Risk assessment",
      "Quarterly reviews",
    ],
  },
]
