import type { NavLink } from '../types'

export const mainNavLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      {
        label: 'For Families',
        path: '/resources',
        children: [
          { label: 'Lent and Easter', path: '/lent-and-easter' },
          { label: 'Advent and Christmas', path: '/advent-and-christmas' },
          { label: 'Pentecost', path: '/pentecost' },
          { label: 'Sharing Our Faith@Home', path: '/sharing-faith-at-home' },
          { label: 'Podcasts', path: '/podcasts' },
          { label: 'Lectio Divina for Families', path: '/lectio-divina' },
        ],
      },
      {
        label: 'For Leaders',
        path: '/resources',
        children: [
          { label: 'Curriculum Resources', path: '/curriculum-resources-and-ideas' },
          { label: 'Lent and Easter', path: '/leaders-lent-easter' },
          { label: 'Advent and Christmas', path: '/advent-and-christmas' },
          { label: 'Christmas Skits', path: '/christmas-skits' },
          { label: 'Podcasts for Leaders', path: '/podcasts-for-leaders' },
          { label: 'Thinking Intergenerationally', path: '/thinking-intergenerational' },
          { label: 'Other Ministries', path: '/other-ministries' },
          { label: "5 'Matters' for Leaders", path: '/5-matters' },
          { label: 'Kids Friendly Archives', path: '/kids-friendly-archives' },
          { label: 'Whanau Friendly Process', path: '/whanau-friendly-process' },
        ],
      },
      {
        label: 'For Churches',
        path: '/resources',
        children: [
          { label: 'Light Party Resource', path: '/light-party-resource' },
          { label: 'Safety WOF', path: 'https://safetywof.org.nz/', external: true },
          { label: 'Whanau Friendly Process', path: '/whanau-friendly-process' },
          { label: 'Anchored', path: '/anchored' },
          { label: 'Praying for Children', path: '/praying-for-children' },
          { label: 'Kids Friendly', path: '/kids-friendly' },
          { label: 'Pandemic Resources', path: '/pandemic-resources' },
        ],
      },
    ],
  },
  { label: 'Family Faith Moments', path: '/family-faith-moments' },
  { label: 'Take 15', path: '/take-15' },
  { label: 'Job Vacancies', path: '/job-vacancies' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const footerResources: NavLink[] = [
  { label: 'Lent & Easter', path: '/lent-and-easter' },
  { label: 'Advent & Christmas', path: '/advent-and-christmas' },
  { label: 'Pentecost', path: '/pentecost' },
  { label: 'Family Faith Moments', path: '/family-faith-moments' },
  { label: 'Sharing Faith@Home', path: '/sharing-faith-at-home' },
  { label: 'Lectio Divina', path: '/lectio-divina' },
]

export const footerPrograms: NavLink[] = [
  { label: 'Whanau Friendly', path: 'https://www.whanaufriendly.org.nz/', external: true },
  { label: 'Safety WOF', path: 'https://safetywof.org.nz/', external: true },
  { label: 'Anchored', path: '/anchored' },
  { label: 'Take 15', path: '/take-15' },
  { label: 'Kids Friendly Archives', path: '/kids-friendly-archives' },
  { label: 'Other Ministries', path: '/other-ministries' },
]

export const footerConnect: NavLink[] = [
  { label: 'News', path: '/news' },
  { label: 'Woven Archives', path: '/woven-archives' },
  { label: 'Job Vacancies', path: '/job-vacancies' },
  { label: 'Newsletter Signup', path: '/newsletter-signup' },
  { label: 'Contact Us', path: '/contact' },
]
