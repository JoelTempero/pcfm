import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import { programs } from '../data/programs'
import { familyResources, leaderResources, churchResources } from '../data/resources'
import { newsItems } from '../data/news'
import { teamMembers } from '../data/team'
import type { ResourceItem } from '../types'

function ResourceCard({ item }: { item: ResourceItem }) {
  const inner = (
    <div className="bg-white/10 backdrop-blur-[10px] rounded-[15px] p-5 text-white flex items-center gap-4 transition-all hover:bg-white/20 hover:translate-x-1">
      <div className="w-[50px] h-[50px] bg-terracotta rounded-xl flex items-center justify-center text-xl shrink-0">
        {item.icon}
      </div>
      <div>
        <h4 className="font-display font-semibold text-base mb-0.5">{item.title}</h4>
        <p className="text-sm opacity-80">{item.description}</p>
      </div>
    </div>
  )

  if (item.external) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
        {inner}
      </a>
    )
  }
  return (
    <Link to={item.link} className="no-underline text-white">
      {inner}
    </Link>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'families' | 'leaders' | 'churches'>('families')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const tabResources = {
    families: familyResources,
    leaders: leaderResources,
    churches: churchResources,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We will be in touch soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-teal via-teal to-light-teal" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0%,transparent_40%)]" />
        <div className="relative z-10 max-w-[900px] text-center text-white">
          <motion.p
            className="font-display text-sm font-medium tracking-[0.15em] uppercase opacity-90 mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Presbyterian Church of Aotearoa New Zealand
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nurturing Faith in Every Whanau
          </motion.h1>
          <motion.p
            className="text-xl max-w-[600px] mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Supporting communities of faith to share God's big story by engaging authentically with children and families across Aotearoa.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/resources"
              className="font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(196,113,76,0.3)]"
            >
              Explore Resources <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="font-display font-semibold text-base px-8 py-4 rounded-full bg-transparent text-white border-2 border-white/50 no-underline inline-flex items-center gap-2 transition-all hover:bg-white hover:text-deep-teal hover:border-white"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="bg-warm-white py-12 md:py-16 px-4 md:px-8 text-center relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 font-body text-[8rem] text-teal opacity-10 leading-none select-none" aria-hidden="true">"</div>
        <AnimatedElement>
          <p className="max-w-[800px] mx-auto italic text-xl md:text-[1.4rem] text-deep-teal leading-relaxed">
            "Let the little children come to me. Don't keep them away. The kingdom of heaven belongs to people like them."
          </p>
          <p className="font-display text-sm font-semibold text-terracotta mt-5 tracking-wide">
            Matthew 19:14 (NIrV)
          </p>
          <p className="max-w-[800px] mx-auto italic text-base text-text-light mt-4">
            Na, ko te kianga a Ihu, "Tukua mai nga tamariki nonohi, aua hoki e araia atu ta ratou haere mai ki ahau; no nga penei hoki te rangatiratanga o te rangi." — Matiu 19:14
          </p>
        </AnimatedElement>
      </section>

      {/* Welcome */}
      <Section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <h2 className="font-display text-[2.5rem] font-bold text-deep-teal mb-5 leading-tight">
              Nau Mai, Haere Mai!
            </h2>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {['Haere Mai', 'Talofa Lava', 'Kia Orana', 'Malo E Lelei', 'Bula Vinaka'].map((greeting) => (
                <span
                  key={greeting}
                  className="bg-cream border border-teal text-deep-teal px-4 py-2 rounded-full font-display text-sm font-medium"
                >
                  {greeting}
                </span>
              ))}
            </div>
            <p className="text-lg text-text-light mb-5">
              <strong>Children and Families</strong> is a ministry of the Presbyterian Church of Aotearoa New Zealand (PCANZ). We serve the wider church by encouraging and supporting Children and Families Ministry workers in a variety of contexts.
            </p>
            <p className="text-lg text-text-light mb-8">
              A ministry to children and their families has always been at the heart of the church. From the early Sunday Schools to today's whanau-based approach, we continue to nurture faith across generations.
            </p>
            <Link
              to="/contact"
              className="font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light hover:-translate-y-0.5"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={0.2} className="relative">
            <img
              src="https://i0.wp.com/pcfm.org.nz/wp-content/uploads/2020/07/anna-earl-XBDHmIXvsvM-unsplash-1-scaled.jpg?w=800"
              alt="Children in church community"
              className="w-full rounded-[20px] shadow-[0_20px_60px_rgba(26,92,82,0.15)]"
            />
            <div className="absolute -top-5 -right-5 w-[100px] h-[100px] border-3 border-terracotta rounded-full opacity-30 hidden md:block" aria-hidden="true" />
          </AnimatedElement>
        </div>
      </Section>

      {/* Programs */}
      <Section
        title="Key Programmes"
        subtitle="Discover resources and initiatives designed to strengthen ministry with children and families in your community."
        className="bg-gradient-to-b from-cream to-warm-white"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <AnimatedElement key={program.id} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] p-8 text-center transition-all shadow-[0_4px_20px_rgba(26,92,82,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(26,92,82,0.12)] relative overflow-hidden group h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-terracotta scale-x-0 transition-transform group-hover:scale-x-100" />
                <div className="w-20 h-20 mx-auto mb-5 bg-cream rounded-full flex items-center justify-center text-3xl">
                  {program.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-deep-teal mb-3">{program.title}</h3>
                <p className="text-[0.95rem] text-text-light mb-5">{program.description}</p>
                {program.external ? (
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 transition-all hover:gap-3"
                  >
                    {program.linkText} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={program.link}
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 transition-all hover:gap-3"
                  >
                    {program.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Resources Library */}
      <Section
        title="Resources Library"
        subtitle="Everything you need for meaningful ministry with children and families."
        className="bg-deep-teal relative overflow-hidden"
        dark
      >
        <div className="absolute inset-0 opacity-5 bg-[url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E&quot;)] bg-[length:100px]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {(['families', 'leaders', 'churches'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-display font-semibold text-base px-6 py-3 border-2 rounded-full cursor-pointer transition-all ${
                  activeTab === tab
                    ? 'bg-white text-deep-teal border-white'
                    : 'bg-transparent text-white border-white/30 hover:bg-white hover:text-deep-teal hover:border-white'
                }`}
              >
                For {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {tabResources[activeTab].map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Mission */}
      <Section
        title="Our Mission"
        subtitle="Serving the Children and Families ministry of the Presbyterian Church Aotearoa New Zealand"
        className="bg-warm-white"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Servant Leadership',
              description: 'We lead the Presbyterian Church of Aotearoa New Zealand into authentic engagement with children and families.',
              icon: (
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="#1a5c52" strokeWidth="2" fill="none" opacity="0.2"/>
                  <path d="M50 20v30l20 15" stroke="#1a5c52" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="8" fill="#c4714c"/>
                </svg>
              ),
            },
            {
              title: 'Advocate',
              description: 'We advocate for children and families so they are woven into the fabric of the faith community with full participation.',
              icon: (
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="35" r="15" fill="#1a5c52" opacity="0.3"/>
                  <circle cx="30" cy="65" r="12" fill="#1a5c52" opacity="0.3"/>
                  <circle cx="70" cy="65" r="12" fill="#1a5c52" opacity="0.3"/>
                  <path d="M50 50L30 65M50 50L70 65" stroke="#c4714c" strokeWidth="3"/>
                </svg>
              ),
            },
            {
              title: 'Resource',
              description: 'We encourage, equip, and support church leaders and those who work with children and families.',
              icon: (
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <rect x="20" y="30" width="60" height="45" rx="5" stroke="#1a5c52" strokeWidth="2" fill="none"/>
                  <path d="M20 45h60" stroke="#1a5c52" strokeWidth="2"/>
                  <circle cx="50" cy="60" r="8" fill="#c4714c"/>
                  <path d="M35 20h30v10H35z" fill="#1a5c52" opacity="0.3"/>
                </svg>
              ),
            },
          ].map((item, i) => (
            <AnimatedElement key={item.title} delay={i * 0.15} className="text-center p-6">
              <div className="w-[100px] h-[100px] mx-auto mb-5">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold text-deep-teal mb-3">{item.title}</h3>
              <p className="text-text-light leading-relaxed">{item.description}</p>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section
        title="Our Team"
        subtitle="Meet the people supporting children and families ministry across Aotearoa"
        className="bg-cream"
      >
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedElement key={member.id} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(26,92,82,0.12)]">
                <div className="w-full h-[250px] bg-cream flex items-center justify-center overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-1">{member.name}</h3>
                  <p className="text-sm text-terracotta font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-text-light mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a href={`mailto:${member.email}`} className="text-teal no-underline text-sm transition-colors hover:text-terracotta">
                      Email
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-teal no-underline text-sm transition-colors hover:text-terracotta">
                        {member.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section
        title="What's New"
        subtitle="Latest resources, news, and updates from PCFM"
        className="bg-warm-white"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <AnimatedElement key={item.id} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(26,92,82,0.1)] group h-full flex flex-col">
                <div className="h-[200px] bg-cream overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal to-deep-teal flex items-center justify-center">
                      <span className="text-5xl">📧</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="font-display text-xs font-semibold text-terracotta uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-deep-teal my-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] text-text-light flex-1">{item.description}</p>
                  {item.link && (
                    <Link to={item.link} className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 transition-all hover:gap-3">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-deep-teal to-teal relative">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <h2 className="font-display text-[2.5rem] font-bold text-white mb-5">Let's Chat!</h2>
            <p className="text-lg text-white/90 mb-8">
              We'd love to hear from you. Whether you have questions about our resources or want to connect about ministry in your context, reach out anytime.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-[45px] h-[45px] bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="font-display block mb-0.5">Address</strong>
                  PO Box 9049, Te Aro<br />Wellington 6141, Aotearoa NZ
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-[45px] h-[45px] bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="font-display block mb-0.5">Email</strong>
                  childrenandfamilies@presbyterian.org.nz
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-[45px] h-[45px] bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="font-display block mb-0.5">Phone</strong>
                  027 274 3322 (Karo Wilson)
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <div className="bg-white rounded-[20px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h3 className="font-display text-2xl font-semibold text-deep-teal mb-5">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-display font-medium text-sm text-text mb-1.5">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-display font-medium text-sm text-text mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-display font-medium text-sm text-text mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-display font-medium text-sm text-text mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta cursor-pointer inline-flex items-center justify-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
