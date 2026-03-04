import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function Pentecost() {
  return (
    <>
      <PageHero title="Pentecost" subtitle="Family Faith Moments for the Pentecost Season" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light leading-relaxed">
              5 sessions designed to encourage and support families with discipleship and faith formation at home. These 'Family Faith Moments' begin with Pentecost Sunday and can continue through the weeks following Pentecost.
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
