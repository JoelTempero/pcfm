import type { JobListing, EventItem } from '../types'

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Greyfriar\'s Eden Epsom Presbyterian Church, Auckland',
    description: 'Looking for a creative person with a deep Christian faith and a desire to help children grow spiritually. You will help children to learn about the Christian faith and the Bible, to develop their relationship with Jesus, and to have fun with friends. You will lead/support existing ministries and explore new avenues for ministry with children. Up to 30 hours per week.',
    contactEmail: 'greyfriarsvacancy@gmail.com',
  },
  {
    id: '2',
    title: 'St John\'s Arrowtown (Wakatipu Presbyterian Church)',
    description: 'Children\'s/Family Worker, 32 hours/week. Their goal is to grow spiritually healthy families, fostering a new generation that has an active relationship with Jesus. Their children\'s ministry is "a spiritually forming, parent-empowering ministry that equips children, leaders and families to know Jesus and live out a vibrant lifetime faith."',
    contact: 'Rev Carlton Johnstone',
    contactEmail: 'stjohns.arrowtown.wpc@gmail.com',
    contactPhone: '027 272 0012',
  },
  {
    id: '3',
    title: 'Mosgiel North Taieri Presbyterian Church',
    description: 'Seeking to employ a Children and Families worker.',
    contact: 'Rachel Judge',
    contactEmail: 'rachel.judge@mosgielchurch.org.nz',
  },
  {
    id: '4',
    title: 'The Village',
    description: 'Opportunity to join their ministry team with the role of leading ministry to children. Enabling their vision in the context of developing Sunday morning children\'s ministry and a community-facing after school club that operates two afternoons per week during term time.',
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
