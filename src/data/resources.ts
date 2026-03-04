import type { ResourceItem } from '../types'

export const familyResources: ResourceItem[] = [
  { id: 'f1', title: 'Lent & Easter', description: 'Seasonal resources for families', icon: '🕯️', link: '/lent-and-easter' },
  { id: 'f2', title: 'Advent & Christmas', description: 'Celebrate the season together', icon: '🎄', link: '/advent-and-christmas' },
  { id: 'f3', title: 'Pentecost', description: 'Discover the Spirit\'s power', icon: '🔥', link: '/pentecost' },
  { id: 'f4', title: 'Faith @ Home', description: 'Sharing faith in daily life', icon: '🏡', link: '/family-faith-moments' },
  { id: 'f5', title: 'Podcasts', description: 'Listen and learn together', icon: '🎧', link: '/podcasts-for-leaders' },
  { id: 'f6', title: 'Lectio Divina', description: 'Ancient practice for modern families', icon: '📖', link: '/advent-and-christmas' },
]

export const leaderResources: ResourceItem[] = [
  { id: 'l1', title: 'Curriculum Ideas', description: 'Structured teaching resources', icon: '📚', link: '/curriculum-resources-and-ideas' },
  { id: 'l2', title: 'Christmas Skits', description: 'Drama resources for services', icon: '🎭', link: '/christmas-skits' },
  { id: 'l3', title: 'Intergenerational', description: 'All-age worship ideas', icon: '👥', link: '/thinking-intergenerational' },
  { id: 'l4', title: '5 \'Matters\'', description: 'Essential leadership principles', icon: '⭐', link: '/5-matters' },
  { id: 'l5', title: 'Kids Friendly Archives', description: 'Favourites from our history', icon: '📁', link: 'http://kidsfriendly.org.nz/', external: true },
  { id: 'l6', title: 'Leader Podcasts', description: 'Training and inspiration', icon: '🎙️', link: '/podcasts-for-leaders' },
]

export const churchResources: ResourceItem[] = [
  { id: 'c1', title: 'Light Party', description: 'Halloween alternative resources', icon: '🎃', link: '/light-party-resource' },
  { id: 'c2', title: 'Safety WOF', description: 'Child safety certification', icon: '✅', link: 'https://safetywof.org.nz/', external: true },
  { id: 'c3', title: 'Whanau Friendly', description: 'Church assessment process', icon: '💚', link: 'https://www.whanaufriendly.org.nz/', external: true },
  { id: 'c4', title: 'Anchored', description: 'Baptism & Confirmation', icon: '💧', link: '/anchored' },
  { id: 'c5', title: 'Praying for Children', description: 'Intercession resources', icon: '🙌', link: '/praying-for-children' },
  { id: 'c6', title: 'Kids Friendly', description: 'Legacy resources', icon: '😊', link: 'http://kidsfriendly.org.nz/', external: true },
]
