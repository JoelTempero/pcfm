import { Link } from 'react-router-dom'
import { FileText, ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const pcfmResources = [
  { title: '40 Days of Lent (2024)', text: 'The 40 Days of Lent resource contains 40 challenges for your family to complete together, including acts of service, bible engagement, prayer and time together. There is also an awesome colouring page to complete!', pdf: 'https://pcfm.org.nz/wp-content/uploads/2024/02/40-Days-of-Lent.pdf' },
  { title: 'Wandering Together Through Lent (2023)', text: 'Their "Wandering Together Through Lent" resource has been developed with families in mind. Your whanau are invited to go on a journey through nature together, wandering and wondering about the world around you, and the nature of God.', pdf: 'https://pcfm.org.nz/wp-content/uploads/2023/02/Lent-Resource-2023.pdf' },
  { title: 'Family Faith Moments for Holy Week & Eastertide', text: 'A series of Family Faith Moments to help celebrate Holy Week and Eastertide, developed in such a way that it can be easily adapted for a ministry context.', link: '/eastertide-family-faith-moments' },
]

const craftIdeas = [
  'Palm Prayer activity — a hands-on prayer experience using palm leaves',
  'Story Stones — paint or draw scenes from the Easter story onto smooth stones',
  'Holy Week Journey with candles — light a candle each day of Holy Week to mark the journey',
  'Jelly Bean Prayer — a sweet way of guiding our prayers during the Lenten Season or during Holy Week',
  'Multi-sensory Easter story activity — a simple way of learning about the Easter story through engaging all the senses',
  'Resurrection egg activity — another "oldie but goodie"',
  'Lego/Duplo journey through Holy Week — create scenes for each day',
  'Palm Leaves handprint craft',
  'Holy Week colouring pages',
  'Cross Craft — a simple but effective cross craft to be displayed prominently in your church',
  'Jesus Figure Countdown — a simple yet effective way of journeying together through Holy Week',
  'Ash Wednesday at Home resource',
  'Shrove Tuesday activities',
  'Countdown to Easter craft',
]

const lectionaryResources = [
  { title: 'A Sanctified Art', text: 'Lectionary-based creative resources for the Lenten season, with art, liturgy, and curriculum for all ages.', link: 'https://sanctifiedart.org/' },
  { title: 'Wonder Ink Children\'s Curriculum', text: 'A children\'s curriculum that follows the lectionary calendar with creative, engaging activities.' },
  { title: 'Bible Explore (NZ-made)', text: 'A home NZ-based resource that includes year-round engagement with the journey throughout Lent (and the whole year) rooted in the lectionary.', link: 'https://www.bibleexplore.nz/' },
  { title: 'Pinterest — Lent Ideas (PCFM)', text: 'A curated board of craft ideas and activities for the Lenten season.', link: 'https://www.pinterest.nz/karowilson/lent-ideas-pcfm/' },
]

const homeChurchResources = [
  { title: 'mainlyMINISTRIES', text: 'Free church resources including "Easter - a journey" (helps the whole church prepare for Easter) and "Easter - around the table" (geared toward at-home use).' },
  { title: 'Scripture Union NZ', text: 'A NZ-based resource from our friends at Scripture Union provides a card/devotion for each day of Holy Week.' },
  { title: 'Illustrated Ministry', text: 'Creative faith formation resources including activities, devotionals, and art for the Lenten season.' },
  { title: 'STRANDZ', text: 'Anglican Children and Families Ministry hub with resources for Lent and Easter.', link: 'https://www.strandz.org.nz/' },
  { title: 'Faithful Families for Lent (Traci Smith)', text: 'Highly recommended: Faithful Families: Lent, Easter and Resurrection by Traci Smith. Extra resources for families during Lent found on her website.', link: 'https://tracismith.com/faithful-families-lent/' },
  { title: 'Feels Like Home Blog', text: 'Blog resources and reflections for families walking through Lent and Easter together.' },
  { title: 'LENT Consortium Facebook Group', text: 'A collaborative Facebook group sharing ideas and resources for Lent across denominations.' },
]

const videoResources = [
  'Triumphal Entry — Saddleback Kids',
  'Last Supper — Saddleback Kids',
  'Jesus\'s Sacrifice — Saddleback Kids',
  'The Easter Story — Crossroads Kids Club',
  'Palm Sunday — Crossroads Kids Club',
  'The Crucifixion — Crossroads Kids Club',
  'The Resurrection — Crossroads Kids Club',
]

export default function LentAndEaster() {
  return (
    <>
      <PageHero title="Lent and Easter" subtitle="Activities and resources for families and churches" />

      {/* Section 1: PCFM Resources */}
      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">PCFM Resources</h2>
          </AnimatedElement>

          <div className="space-y-4 mb-12">
            {pcfmResources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-3">{item.text}</p>
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      <FileText className="w-4 h-4" /> Download PDF
                    </a>
                  )}
                  {item.link && (
                    <Link
                      to={item.link}
                      className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Resource <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Section 2: Craft Ideas */}
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Craft Ideas & Activities</h2>
          </AnimatedElement>

          <div className="space-y-2 mb-12">
            {craftIdeas.map((activity, i) => (
              <AnimatedElement key={i} delay={i * 0.02}>
                <div className="bg-warm-white rounded-lg p-4 flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5 shrink-0">&#8226;</span>
                  <p className="text-text-light text-sm">{activity}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Section 3: Lectionary & Curriculum Resources */}
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Lectionary & Curriculum Resources</h2>
          </AnimatedElement>

          <div className="space-y-4 mb-12">
            {lectionaryResources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 hover:gap-3 transition-all"
                    >
                      Visit Resource <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Section 4: Resources for Home or Church */}
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Resources for Home or Church</h2>
          </AnimatedElement>

          <div className="space-y-4 mb-12">
            {homeChurchResources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 hover:gap-3 transition-all"
                    >
                      Visit Resource <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Section 5: Video Resources */}
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Video Resources</h2>
            <p className="text-text-light mb-4 leading-relaxed">
              A selection of video resources from Saddleback Kids and Crossroads Kids Club to help tell the Easter story:
            </p>
          </AnimatedElement>

          <div className="space-y-2">
            {videoResources.map((video, i) => (
              <AnimatedElement key={i} delay={i * 0.03}>
                <div className="bg-warm-white rounded-lg p-4 flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5 shrink-0">&#8226;</span>
                  <p className="text-text-light text-sm">{video}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
