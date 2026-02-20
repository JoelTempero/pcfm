import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const resources = [
  { title: 'Columba College Chaplain, Dr. Jennifer Macleod', text: 'Shared resources for helping children reflect on their emotions related to COVID-19 lockdown.' },
  { title: 'Fischy Music - Online Assembly', text: 'Introduced at the NZ Messy Church conference. Includes Worship and Health and Wellbeing collections.' },
  { title: 'Illustrated Ministry Faith Formation Resources', text: '"Flatten the Curve" — faith formation resources.' },
  { title: 'The Christian Reformed Church in North America (CRCNA)', text: 'Ideas for Children\'s Ministry during COVID-19.' },
  { title: 'The Child Psychology Service', text: '"10 Pointers to Support You and Your Child\'s Feelings Around the Corona Virus Pandemic."' },
  { title: 'Faith in Kids', text: '"Mum what does God think about Coronavirus?"' },
  { title: 'Tammy Tolman', text: '"The panic of not having and not knowing."' },
  { title: 'Carolyn C. Brown\'s Blogspot', text: '"Worshiping with Children" (lectionary-based resource), plus Facebook group "Worshiping with Children."' },
  { title: 'Sparklers at Home', text: 'Developing from the "Alright?" campaign, packed full of ideas to support well-being activities at home.' },
  { title: 'Nanogirl', text: '"How to make virus fighting super-powered soap for kids" — a craft idea to inspire children to wash their hands.' },
]

export default function PandemicResources() {
  return (
    <>
      <PageHero title="Resources for Ministering During a Pandemic" subtitle="Creative resources for ministering to children and families" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              Despite great uncertainty during the times of a pandemic, such as COVID-19, we are encouraged by the certainty that God is with us and will guide us through these times. Below is a collation of creative resources for ministering to children and families.
            </p>
          </AnimatedElement>

          <div className="space-y-3">
            {resources.map((resource, i) => (
              <AnimatedElement key={resource.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-base font-semibold text-deep-teal mb-1">{resource.title}</h3>
                  <p className="text-text-light text-sm">{resource.text}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
