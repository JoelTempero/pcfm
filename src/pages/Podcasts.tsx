import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function Podcasts() {
  return (
    <>
      <PageHero title="Podcasts" subtitle="Listen and learn together as a family" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Podcasts are a wonderful way for families to explore faith together. Whether you are on a road trip, having quiet time, or simply looking for something meaningful to listen to, these podcast resources offer engaging content for families of all ages.
            </p>
          </AnimatedElement>

          <div className="space-y-4">
            <AnimatedElement delay={0.05}>
              <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">We Wonder</h3>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  A podcast designed to spark curiosity and wonder in children and families. We Wonder explores big questions about faith, life, and the world around us in a way that is accessible and engaging for all ages.
                </p>
                <a
                  href="https://www.wewonderpod.com/blank-page-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Visit We Wonder <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">The Effective Ministry Podcast</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Produced by Youthworks, an Australian organisation focused on effective youth and children's ministry in every church. The Effective Ministry podcast features practical insights and encouragement for those involved in ministry with children and families.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement className="mt-10">
            <div className="bg-cream rounded-[15px] p-6">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Podcasts for Leaders</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Looking for podcasts specifically curated for ministry leaders? Check out the dedicated Podcasts for Leaders page for resources designed to inspire and equip those leading children's and families' ministry.
              </p>
              <Link
                to="/podcasts-for-leaders"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Podcasts for Leaders &rarr;
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
