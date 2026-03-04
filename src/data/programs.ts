import type { Program } from '../types'

export const programs: Program[] = [
  {
    id: '1',
    title: 'Whanau Friendly',
    description: 'A process to help churches become more welcoming and inclusive spaces for families of all kinds.',
    icon: '🏠',
    link: 'https://www.whanaufriendly.org.nz/',
    linkText: 'Learn More',
    external: true,
  },
  {
    id: '2',
    title: 'Safety WOF',
    description: 'Essential training for leaders of Children and Families ministry, ensuring safe environments for all.',
    icon: '🛡️',
    link: 'https://safetywof.org.nz/',
    linkText: 'Get Certified',
    external: true,
  },
  {
    id: '3',
    title: 'Anchored',
    description: 'A comprehensive baptism and confirmation course for exploring faith with young people.',
    icon: '⚓',
    link: '/anchored',
    linkText: 'Explore Course',
  },
  {
    id: '4',
    title: 'Lectio Divina',
    description: 'A beautiful spiritual discipline adapted for families to practice together at home.',
    icon: '🙏',
    link: '/advent-and-christmas',
    linkText: 'Start Practicing',
  },
  {
    id: '5',
    title: 'Family Faith Moments',
    description: 'Simple, everyday opportunities to weave faith conversations into family life.',
    icon: '👨‍👩‍👧‍👦',
    link: '/family-faith-moments',
    linkText: 'Discover More',
  },
  {
    id: '6',
    title: 'Take 15',
    description: 'Quick, practical resources for busy ministry leaders—designed for just 15 minutes.',
    icon: '☕',
    link: '/take-15',
    linkText: 'Take 15',
  },
]
