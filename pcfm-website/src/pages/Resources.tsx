import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { familyResources, leaderResources, churchResources } from '../data/resources'
import type { ResourceItem } from '../types'

function ResourceCard({ item }: { item: ResourceItem }) {
  const inner = (
    <div className="bg-white rounded-[15px] p-5 flex items-center gap-4 transition-all shadow-[0_4px_15px_rgba(26,92,82,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)]">
      <div className="w-[50px] h-[50px] bg-terracotta rounded-xl flex items-center justify-center text-xl shrink-0 text-white">
        {item.icon}
      </div>
      <div className="flex-1">
        <h4 className="font-display font-semibold text-base text-deep-teal mb-0.5">{item.title}</h4>
        <p className="text-sm text-text-light">{item.description}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-terracotta shrink-0" />
    </div>
  )

  if (item.external) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline block">
        {inner}
      </a>
    )
  }
  return (
    <Link to={item.link} className="no-underline block">
      {inner}
    </Link>
  )
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState<'families' | 'leaders' | 'churches'>('families')

  const tabs = {
    families: { label: 'For Families', items: familyResources },
    leaders: { label: 'For Leaders', items: leaderResources },
    churches: { label: 'For Churches', items: churchResources },
  }

  return (
    <>
      <PageHero title="Resources" subtitle="Everything you need for meaningful ministry with children and families." />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {(Object.entries(tabs) as [string, { label: string; items: ResourceItem[] }][]).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'families' | 'leaders' | 'churches')}
                className={`font-display font-semibold text-base px-6 py-3 border-2 rounded-full cursor-pointer transition-all ${
                  activeTab === key
                    ? 'bg-deep-teal text-white border-deep-teal'
                    : 'bg-transparent text-deep-teal border-deep-teal/30 hover:bg-deep-teal hover:text-white hover:border-deep-teal'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {tabs[activeTab].items.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-warm-white" title="More Resources">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Curriculum Resources', description: 'Structured teaching resources and ideas for children\'s ministry.', link: '/curriculum-resources-and-ideas' },
            { title: 'Family Faith Moments', description: 'Resources for families to celebrate significant days throughout the year.', link: '/family-faith-moments' },
            { title: 'Praying for Children', description: 'Resources for praying for the children of Aotearoa.', link: '/praying-for-children' },
            { title: 'Pandemic Resources', description: 'Creative resources for ministering to children and families during times of isolation.', link: '/pandemic-resources' },
            { title: 'Reading is Like Chocolate', description: 'Reflections and resources on the joy of reading with children.', link: '/reading-is-like-chocolate' },
            { title: 'Creation Care', description: 'Resources on caring for God\'s creation together.', link: '/creation-care' },
          ].map((item, i) => (
            <AnimatedElement key={item.title} delay={i * 0.05}>
              <Link to={item.link} className="block bg-white rounded-[15px] p-6 no-underline transition-all shadow-[0_4px_15px_rgba(26,92,82,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)] group">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2 group-hover:text-teal transition-colors">{item.title}</h3>
                <p className="text-sm text-text-light mb-3">{item.description}</p>
                <span className="font-display font-semibold text-sm text-terracotta inline-flex items-center gap-2 transition-all group-hover:gap-3">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </Section>
    </>
  )
}
