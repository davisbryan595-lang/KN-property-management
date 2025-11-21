export interface Service {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  category: string
  icon: string
  benefits: string[]
}

export const services: Service[] = [
  {
    id: "svc-001",
    name: "Full Property Management",
    description: "Complete property management solution for landlords and investors",
    longDescription:
      "Our comprehensive property management service handles everything from tenant screening to maintenance coordination. We provide 24/7 emergency response and ensure full legal compliance for your investments. With 15+ years of expertise managing 500+ properties across Charlotte and Winston-Salem, we deliver white-glove service that maximizes your returns.",
    image: "/luxury-property-management-office.jpg",
    category: "Management",
    icon: "Building2",
    benefits: [
      "Professional tenant screening and background checks",
      "Monthly rent collection and financial accounting",
      "Proactive maintenance coordination with vetted contractors",
      "24/7 emergency response team",
      "Quarterly property inspections",
      "Full legal compliance management",
      "Detailed reporting and analysis",
      "Lease management and renewals",
    ],
  },
  {
    id: "svc-002",
    name: "Short-Term Rental Concierge",
    description: "White-glove management for your AirBnB and VRBO properties",
    longDescription:
      "Maximize your short-term rental revenue with our premium concierge service. We handle everything from professional photography to dynamic pricing strategies to housekeeping coordination, ensuring 5-star reviews and occupancy rates. Our data-driven approach means more bookings and higher nightly rates.",
    image: "/modern-airbnb-luxury-apartment.jpg",
    category: "Short-Term Rental",
    icon: "Calendar",
    benefits: [
      "Professional listing optimization across all platforms",
      "High-quality photography and drone imagery",
      "24/7 guest communication and support",
      "Housekeeping and turnover coordination",
      "5-star review management and optimization",
      "Dynamic pricing strategy and revenue maximization",
      "Damage protection and liability management",
      "Tax compliance and reporting",
    ],
  },
  {
    id: "svc-003",
    name: "Maintenance & Emergency Response",
    description: "24/7 maintenance and emergency response services",
    longDescription:
      "Never worry about maintenance issues again. Our vetted contractor network ensures quality work at competitive prices with guaranteed 24/7 emergency response. From routine maintenance to urgent repairs, we've got your properties covered.",
    image: "/professional-home-maintenance-service.jpg",
    category: "Maintenance",
    icon: "Wrench",
    benefits: [
      "24/7 emergency response and rapid dispatch",
      "Vetted and insured contractor network",
      "Quality assurance inspections on all work",
      "Competitive pricing and vendor management",
      "Preventative maintenance programs",
      "Digital documentation and photo reports",
      "Warranty tracking and follow-up",
      "Seasonal maintenance planning",
    ],
  },
  {
    id: "svc-004",
    name: "Real Estate Advisory Services",
    description: "Expert market analysis and investment guidance",
    longDescription:
      "Access off-market properties and get expert market analysis from our experienced team. We provide exclusive listings, investor connections, and comprehensive market insights to help you build and optimize your real estate portfolio.",
    image: "/luxury-real-estate-showcase.png",
    category: "Advisory",
    icon: "TrendingUp",
    benefits: [
      "Off-market property access and deal sourcing",
      "Expert market analysis and trends",
      "Property staging and marketing strategy",
      "Exclusive investor networking events",
      "ROI projections and financial analysis",
      "Transaction coordination and support",
      "Portfolio diversification guidance",
      "Market timing and exit strategies",
    ],
  },
  {
    id: "svc-005",
    name: "Tenant Relations Management",
    description: "Professional tenant communication and relationship management",
    longDescription:
      "Keep your tenants happy and reduce turnover with our comprehensive tenant relations service. We handle all communication, lease renewals, conflict resolution, and satisfaction tracking to create a thriving property community.",
    image: "/professional-tenant-relations-service.jpg",
    category: "Support",
    icon: "Users",
    benefits: [
      "24/7 tenant support and communication",
      "Professional lease renewal management",
      "Conflict resolution and mediation",
      "Rent collection coordination",
      "Maintenance request tracking",
      "Tenant satisfaction surveys and feedback",
      "Community building initiatives",
      "Documentation and legal compliance",
    ],
  },
  {
    id: "svc-006",
    name: "Investment Consulting",
    description: "Personalized investment strategies and portfolio optimization",
    longDescription:
      "Get personalized investment strategies from our expert consultants with 15+ years of real estate experience. Maximize ROI with data-driven recommendations, comprehensive market research, and quarterly performance reviews.",
    image: "/investment-portfolio-analysis-luxury.jpg",
    category: "Consulting",
    icon: "BarChart3",
    benefits: [
      "Comprehensive portfolio analysis",
      "ROI optimization strategies",
      "Market research and competitive analysis",
      "Investment recommendations based on goals",
      "Risk assessment and mitigation",
      "Quarterly performance reviews",
      "Tax strategy optimization",
      "Long-term wealth building strategies",
    ],
  },
]
