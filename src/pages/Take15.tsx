import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function Take15() {
  return (
    <>
      <PageHero title="Take 15" subtitle="15 minutes of prayer for the young people of Aotearoa" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              "Take 15" is a collaborative initiative with Presbyterian Youth Ministry (PYM). It invites participants to a regular rhythm of prayer for the young people of Aotearoa.
            </p>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Join for 15 minutes on Zoom each week to pray for the 1.6 million young people in New Zealand.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(26,92,82,0.06)] text-center">
              <h2 className="font-display text-xl font-bold text-deep-teal mb-3">Weekly Gatherings</h2>
              <p className="text-text-light mb-2">Every Thursday on Zoom</p>
              <p className="text-2xl font-display font-bold text-terracotta mb-6">1:00pm — 1:15pm</p>
              <a
                href="https://www.pym.org.nz/take15"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Visit PYM Take 15 Page <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
