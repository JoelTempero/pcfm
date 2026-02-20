import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function CreationCare() {
  return (
    <>
      <PageHero title="Creation Care — The Hope Seminar" subtitle="Don't let it go to waste!" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              The Hope Seminar on Care for Creation was held on Sunday 16 August at Hope Presbyterian, Hornby, in partnership with A Rocha.
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              Described as a conference for God's people who want to make a difference that is not just 'rubbish'.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
              <h2 className="font-display text-xl font-bold text-deep-teal mb-4">Programme</h2>
              <div className="space-y-3 text-text-light text-sm">
                <div className="flex gap-4">
                  <span className="font-display font-semibold text-terracotta shrink-0 w-16">4:00pm</span>
                  <span>Intergenerational time and practical workshops</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-display font-semibold text-terracotta shrink-0 w-16">5:30pm</span>
                  <span>Dinner ($10/person; $25/family)</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-display font-semibold text-terracotta shrink-0 w-16">6:30pm</span>
                  <span>Worship, speakers and workshops</span>
                </div>
              </div>
              <p className="text-text-light text-sm mt-4">Option to come for all or just part of the event.</p>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
