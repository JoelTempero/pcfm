import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function ThinkingIntergenerational() {
  return (
    <>
      <PageHero title="Thinking Intergenerationally" subtitle="Resources for all-age worship and ministry" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light leading-relaxed">
              The New Zealand Children's Ministry Network has produced a resource for churches to help plan and run events that are intentionally intergenerational.
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
