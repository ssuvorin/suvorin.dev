export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  results: string[];
  image: string;
  content: string;
  publishedAt: string;
  client: string;
  industry: string;
}

// Mock case studies data - in a real app, this would come from MDX files
export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-ai-assistant',
    title: 'E-commerce AI Assistant',
    description: 'Intelligent shopping assistant that increased conversion rates by 40%',
    category: 'chatbots',
    tags: ['AI Chatbot', 'E-commerce', 'NLP'],
    results: ['40% conversion increase', '24/7 support', 'Multi-language'],
    image: '/api/placeholder/800/600',
    content: 'Full case study content would go here...',
    publishedAt: '2025-01-15',
    client: 'TechFlow Inc.',
    industry: 'E-commerce',
  },
  {
    id: 'healthcare-appointment-bot',
    title: 'Healthcare Appointment Bot',
    description: 'Automated appointment scheduling system for medical clinics',
    category: 'chatbots',
    tags: ['Healthcare', 'Scheduling', 'Integration'],
    results: ['60% time saved', 'Error reduction', 'Patient satisfaction'],
    image: '/api/placeholder/800/600',
    content: 'Full case study content would go here...',
    publishedAt: '2025-01-10',
    client: 'HealthFirst Clinic',
    industry: 'Healthcare',
  },
  {
    id: 'financial-data-analysis',
    title: 'Financial Data Analysis',
    description: 'Real-time financial data processing and reporting automation',
    category: 'integrations',
    tags: ['Finance', 'Data Analysis', 'Automation'],
    results: ['90% faster reporting', 'Real-time insights', 'Cost reduction'],
    image: '/api/placeholder/800/600',
    content: 'Full case study content would go here...',
    publishedAt: '2025-01-05',
    client: 'FinTech Solutions',
    industry: 'Finance',
  },
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.id === id);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  if (category === 'all') {
    return caseStudies;
  }
  return caseStudies.filter((caseStudy) => caseStudy.category === category);
}

export function generateOGImage(caseStudy: CaseStudy): string {
  // In a real app, this would use @vercel/og to generate dynamic OG images
  // For now, return a placeholder
  return `/api/og?title=${encodeURIComponent(caseStudy.title)}&description=${encodeURIComponent(caseStudy.description)}`;
}
