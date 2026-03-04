import type { JobListing, EventItem } from '../types'

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Youth and Children\'s Worker — Weston Community Church, Oamaru',
    description: 'Part-time role to lead the ongoing development of children and young people\'s ministries. Lead, support and help equip a team of committed volunteers. Experience in youth ministry required; committed to growing faith; strong in managing relationships within a team.',
    contactEmail: 'admin@westoncommunitychurch.org.nz',
  },
  {
    id: '2',
    title: 'Children\'s Ministry Leader — Hibiscus Coast Presbyterian Church, Auckland',
    description: 'Part-time, 10 hours per week. Leading Sunday morning children\'s ministry during school terms, preparing engaging activities, collaborating weekly with Rev. Werner Schroeder for mentoring and ministry development. Requirements: vibrant faith and testimony, passion for nurturing children\'s faith, creativity, leadership and organisational skills, PYM Warrant of Fitness (WoF) Training, Police Clearance Check (PCANZ).',
    contactPhone: '09 426 4502',
  },
  {
    id: '3',
    title: 'Children\'s Ministry Leader — Bethlehem Community Church, Tauranga',
    description: 'Part-time, 20 hours per week. Coordinating children\'s ministry including Sunday morning programmes, Mainly Music and one-off events. Requirements: Christian faith, good Christian role model, make BCC their church home.',
  },
  {
    id: '4',
    title: 'Children and Families Ministry Worker — Hawkes Bay',
    description: '20 hours per week, initial 2-year contract across 5 Hawkes Bay Presbyterian churches. Key tasks: developing and supporting Children & Family leadership teams; running intergenerational services and events. Requirements: proven ministry with Children and Families; proven experience in mentoring leaders and building teams; some formal theological education preferred.',
    contact: 'Brett Walker',
    contactEmail: 'brett_walker@xtra.co.nz',
  },
  {
    id: '5',
    title: 'Children\'s Ministry Coordinator — Cromwell Presbyterian Church',
    description: 'Part-time, 30 hours per week. Coordinating children\'s ministry including Sunday morning program, Messy Church, Mainly Music and one-off events. Requirements: Christian faith, good Christian role model, make Cromwell Presbyterian their church home.',
    contact: 'Barbara Carston',
    contactEmail: 'barbaracarston@gmail.com',
  },
]

export const events: EventItem[] = [
  {
    id: '1',
    title: 'Intergenerate Conference — Auckland',
    description: 'In this face-to-face gathering, David Csinos led attendees through his book A Gospel For All Ages. Alongside David\'s keynote were interactive experiences hosted by Tammy Preston called \'GLASSHOUSES\' — a signature piece of the Intergenerate Australia and New Zealand Conferences.',
    date: 'November 2025',
  },
  {
    id: '2',
    title: 'WAY2GO Conference — Palmerston North',
    description: 'Scripture Union Children\'s Ministry Training Conference. Theme: "First Things First". Smaller, regional, relational training format.',
  },
  {
    id: '3',
    title: 'WAY2GO Conference — Auckland',
    description: 'Scripture Union Children\'s Ministry Training Conference, Auckland location.',
  },
  {
    id: '4',
    title: 'Matariki',
    description: 'Matariki celebrations commence 19 June and continue through 11 July. A one-page resource includes Bible readings, information, suggested reflections, a recommended read, a song and a link from Scripture Union NZ.',
  },
]
