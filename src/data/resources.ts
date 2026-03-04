import type { ResourceItem } from '../types'

export const familyResources: ResourceItem[] = [
  { id: 'f1', title: 'Lent & Easter', description: 'Seasonal resources for families', icon: '🕯️', link: '/lent-and-easter' },
  { id: 'f2', title: 'Advent & Christmas', description: 'Celebrate the season together', icon: '🎄', link: '/advent-and-christmas' },
  { id: 'f3', title: 'Pentecost', description: 'Discover the Spirit\'s power', icon: '🔥', link: '/pentecost' },
  { id: 'f4', title: 'Sharing Faith @ Home', description: 'Resources for faith in daily life', icon: '🏡', link: '/sharing-faith-at-home' },
  { id: 'f5', title: 'Podcasts', description: 'Listen and learn together', icon: '🎧', link: '/podcasts' },
  { id: 'f6', title: 'Lectio Divina', description: 'Ancient practice for modern families', icon: '📖', link: '/lectio-divina' },
]

export const leaderResources: ResourceItem[] = [
  { id: 'l1', title: 'Curriculum Ideas', description: 'Structured teaching resources', icon: '📚', link: '/curriculum-resources-and-ideas' },
  { id: 'l2', title: 'Lent & Easter', description: 'Leader-focused seasonal resources', icon: '🕯️', link: '/leaders-lent-easter' },
  { id: 'l3', title: 'Christmas Skits', description: 'Drama resources for services', icon: '🎭', link: '/christmas-skits' },
  { id: 'l4', title: 'Intergenerational', description: 'All-age worship ideas', icon: '👥', link: '/thinking-intergenerational' },
  { id: 'l5', title: 'Podcasts for Leaders', description: 'Training and inspiration', icon: '🎙️', link: '/podcasts-for-leaders' },
  { id: 'l6', title: '5 \'Matters\'', description: 'Essential leadership principles', icon: '⭐', link: '/5-matters' },
  { id: 'l7', title: 'Other Ministries', description: 'Partner organisations and resources', icon: '🤝', link: '/other-ministries' },
  { id: 'l8', title: 'Kids Friendly Archives', description: 'Favourites from our history', icon: '📁', link: '/kids-friendly-archives' },
  { id: 'l9', title: 'Whanau Friendly', description: 'Church assessment process', icon: '💚', link: '/whanau-friendly-process' },
]

export const churchResources: ResourceItem[] = [
  { id: 'c1', title: 'Light Party', description: 'Halloween alternative resources', icon: '🎃', link: '/light-party-resource' },
  { id: 'c2', title: 'Safety WOF', description: 'Child safety certification', icon: '✅', link: 'https://safetywof.org.nz/', external: true },
  { id: 'c3', title: 'Whanau Friendly', description: 'Church assessment process', icon: '💚', link: 'https://www.whanaufriendly.org.nz/', external: true },
  { id: 'c4', title: 'Anchored', description: 'Baptism & Confirmation', icon: '💧', link: '/anchored' },
  { id: 'c5', title: 'Praying for Children', description: 'Intercession resources', icon: '🙌', link: '/praying-for-children' },
  { id: 'c6', title: 'Kids Friendly', description: 'Legacy and information', icon: '😊', link: '/kids-friendly' },
  { id: 'c7', title: 'Pandemic Resources', description: 'Ministry during difficult times', icon: '🏠', link: '/pandemic-resources' },
]
