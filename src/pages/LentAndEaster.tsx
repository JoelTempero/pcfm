import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function LentAndEaster() {
  return (
    <>
      <PageHero title="Lent and Easter" subtitle="Activities and resources for families and churches" />

      <Section>
        <div className="max-w-[900px] mx-auto space-y-5">
          {[
            { title: 'BIBLE EXPLORE', text: 'BIBLE EXPLORE is a home NZ-based resource that includes year-round engagement with the journey throughout Lent (and the whole year) rooted in the lectionary.', link: 'https://www.bibleexplore.nz/lectionary.html' },
            { title: 'mainly Ministries Resources', text: 'Their friends at mainly Ministries have developed two free resources: "Easter - a journey" helps the whole church prepare for Easter, used within homes or as a starting point for services online or in person. "Easter - around the table" is mainly geared toward at-home use.' },
            { title: 'Scripture Union NZ', text: 'A NZ-based resource from their friends at Scripture Union provides a card/devotion for each day of Holy Week.' },
            { title: 'Faithful Families by Traci Smith', text: 'Highly recommended: Faithful Families: Lent, Easter and Resurrection by Traci Smith (available as digital download for $11). Extra resources for families during Lent found on her website.', link: 'https://tracismith.com/faithful-families-lent/' },
            { title: '40 Days of Lent', text: 'The 40 Days of Lent resource contains 40 challenges for your family to complete together, including acts of service, bible engagement, prayer and time together. There is also an awesome colouring page to complete!' },
            { title: 'Wandering Together Through Lent', text: 'Their "Wandering Together Through Lent" resource has been developed with families in mind. Your whanau are invited to go on a journey through nature together, wandering and wondering about the world around you, and the nature of God.' },
            { title: 'Family Faith Moments for Holy Week', text: 'A series of Family Faith Moments to help celebrate Holy Week and Eastertide, developed in such a way that it can be easily adapted for a ministry context.' },
          ].map((item, i) => (
            <AnimatedElement key={item.title} delay={i * 0.05}>
              <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                {'link' in item && item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 hover:gap-3 transition-all">
                    Visit Resource <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </AnimatedElement>
          ))}

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4 mt-10">Activities</h2>
          </AnimatedElement>
          {[
            'Jelly Bean Prayer — a sweet way of guiding our prayers during the Lenten Season or during Holy Week',
            'Multi-sensory Easter story activity — a simple way of learning about the Easter story through engaging all the senses',
            'Resurrection egg activity — another \'oldie but goodie\'',
            'Lego/Duplo journey through Holy Week — create scenes for each day',
            'Palm Leaves handprint craft',
            'Holy Week colouring pages',
            'Cross Craft — a simple but effective cross craft to be displayed prominently in your church',
            'Jesus Figure Countdown — a simple yet effective way of journeying together through Holy Week',
            'Ash Wednesday at Home resource',
            'Shrove Tuesday activities',
            'Countdown to Easter craft',
          ].map((activity, i) => (
            <AnimatedElement key={i} delay={i * 0.03}>
              <div className="bg-warm-white rounded-lg p-4 flex items-start gap-3">
                <span className="text-terracotta font-bold mt-0.5">•</span>
                <p className="text-text-light text-sm">{activity}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>
    </>
  )
}
