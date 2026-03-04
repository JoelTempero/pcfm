import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function CurriculumResources() {
  return (
    <>
      <PageHero title="Curriculum Resources and Ideas" subtitle="Resources and curriculum ideas for children's ministry" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-text-light mb-8 leading-relaxed">
              If you have found a curriculum or resource that you'd recommend to others, please feel free to email{' '}
              <a href="mailto:childrenandfamilies@pcanz.org.nz" className="text-teal no-underline hover:text-terracotta transition-colors">childrenandfamilies@pcanz.org.nz</a>{' '}
              so they can include it in the list.
            </p>
          </AnimatedElement>

          {[
            { title: 'Lectionary-Based Curriculum', text: 'If your church follows the Common Lectionary in its worship services, a Lectionary-based curriculum is a great way to ensure your children\'s ministry programmes are following the same themes and scripture as the wider church whanau.' },
            { title: 'Complete Resource Book', text: 'Includes separate books for 3 age levels plus the Complete Resource Book for worship services. Suitable for: Pebbles (3-5yrs), Rocks (6-10yrs), Boulders (11-14yrs) and Complete Resource Book (all ages). Lesson outlines and activity ideas including photo-copiable worksheets are in the age level separate books.' },
            { title: 'ROOTS Resources', text: 'The ROOTS resources are adaptable for many situations, so a great option if you have a wide range of ages together, or are needing a curriculum with good flexibility. A yearly subscription is required to access the resources, starting at GBP 64.' },
            { title: 'Long Range Resources (Light Curriculum)', text: 'For churches looking for a curriculum that will span a year or more, covering a wide range of themes and topics. Teacher manuals and children\'s activity magazines (optional), produced quarterly. Suitable for: Bubbles (under 5s), Splash! (5-8s), Xstream (8-11s), and The GRID (11-14s).' },
            { title: 'Short-term/Pick-and-mix Resources', text: 'Ranging in length from 4-10 weeks. Great for leaders wanting to pick and mix themes and topics to fit into the term calendar.' },
            { title: 'Subscription-based Curriculum', text: 'A subscription-based curriculum offering faithful, creative and effective Bible teaching material for children\'s and youth ministries. Suitable for toddlers, 3-11 years, and 11-18 years. Priced from GBP 10 per month depending on size of ministry.' },
            { title: 'Scripture Union\'s Mosaic', text: 'Resource similar to the Light curriculum, for contexts where a wide range of ages learn together.' },
          ].map((item, i) => (
            <AnimatedElement key={item.title} delay={i * 0.05}>
              <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>
    </>
  )
}
