import type { NavLink } from '../types'

export const mainNavLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/resources' },
  { label: 'News', path: '/news' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
]

export const footerResources: NavLink[] = [
  { label: 'For Families', path: '/resources' },
  { label: 'For Leaders', path: '/resources' },
  { label: 'For Churches', path: '/resources' },
  { label: 'Kids Friendly', path: 'http://kidsfriendly.org.nz/', external: true },
]

export const footerPrograms: NavLink[] = [
  { label: 'Whanau Friendly', path: 'https://www.whanaufriendly.org.nz/', external: true },
  { label: 'Safety WOF', path: 'https://safetywof.org.nz/', external: true },
  { label: 'Anchored', path: '/anchored' },
  { label: 'Take 15', path: '/take-15' },
]

export const footerConnect: NavLink[] = [
  { label: 'News', path: '/news' },
  { label: 'Events Calendar', path: '/events' },
  { label: 'Job Vacancies', path: '/job-vacancies' },
  { label: 'Contact Us', path: '/contact' },
]
