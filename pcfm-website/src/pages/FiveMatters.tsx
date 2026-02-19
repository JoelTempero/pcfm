import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function FiveMatters() {
  return (
    <>
      <PageHero title="5 'Matters' of Children and Families Ministry for Leaders" subtitle="Reflections and recommended resources for ministry leaders" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Written by Cheryl Harray (before her retirement in November 2020 from Children & Families Advisor in Otago/Southland).
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              This resource captures Cheryl's reflections and highly recommended resources. PCFM describes this resource as "a treasure, fit for any leader or children & families ministry leadership team to use and adopt in their own context."
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
