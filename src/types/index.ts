export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  email: string
  phone?: string
}

export interface Program {
  id: string
  title: string
  description: string
  icon: string
  link: string
  linkText: string
  external?: boolean
}

export interface ResourceItem {
  id: string
  title: string
  description: string
  icon: string
  link: string
  external?: boolean
}

export interface NewsItem {
  id: string
  tag: string
  title: string
  description: string
  image?: string
  link?: string
}

export interface NavLink {
  label: string
  path: string
  children?: NavLink[]
  external?: boolean
}

export interface ContactInfo {
  address: string[]
  email: string
  phone: string
  phoneName: string
}

export interface JobListing {
  id: string
  title: string
  description: string
  contact?: string
  contactEmail?: string
  contactPhone?: string
}

export interface EventItem {
  id: string
  title: string
  description: string
  date?: string
  link?: string
}
