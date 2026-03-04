import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const resources = [
  { title: 'BIBLE EXPLORE', desc: 'NZ-based resource with year-round engagement rooted in the lectionary, including Lent.', url: 'https://www.bibleexplore.nz/' },
  { title: 'mainly Ministries \u2014 Easter: A Journey', desc: 'Helps the whole church prepare for Easter, used within homes or as a starting point for services.', url: 'https://mainlyministries.org.nz/collections/all-1/products/easter-a-journey' },
  { title: 'mainly Ministries \u2014 Easter: Around the Table', desc: 'Mainly geared toward at-home use for families gathering around the table.', url: 'https://mainlyministries.org.nz/collections/all-1/products/easter-around-the-table' },
  { title: 'A Sanctified Art \u2014 Children\'s Lessons', desc: 'Full to the Brim children\'s lessons for creative engagement with Lent themes.', url: 'https://sanctifiedart.org/blog/full-to-the-brim-childrens-lessons' },
  { title: 'Faithful Families by Traci Smith', desc: 'Highly recommended: Faithful Families: Lent, Easter and Resurrection (available as digital download).', url: 'https://tracismith.com/faithful-families-lent/' },
  { title: 'Ash Wednesday at Home', desc: 'A resource from Scripture Union NZ Breakthrough for observing Ash Wednesday in the home.', url: 'https://www.sunzbreakthrough.org.nz/resources/ashwednesday' },
  { title: 'Holy Week in the Home', desc: 'Scripture Union NZ Breakthrough resource for families to journey through Holy Week together.', url: 'https://www.sunzbreakthrough.org.nz/resources/holyweekinthehome' },
  { title: 'Shrove Tuesday Activities', desc: 'Ideas and activities for celebrating Shrove Tuesday with children.', url: 'https://static1.squarespace.com/static/5e97ec087ab96d690f3c5559/t/62142a798ee1935e780ac156/1645488772572/Shrove+Tuesday.pdf' },
  { title: 'Strandz Easter Bubbles', desc: 'Easter Bubbles resource from Strandz Anglican Children and Families Ministry.', url: 'https://www.strandz.org.nz/easterbubbles.html' },
  { title: 'Baptist Children and Family Ministry', desc: 'Lent and Easter resources from Baptist CFM.', url: 'https://www.baptistcfm.org.nz/' },
]

const activities = [
  { title: 'Paper Prayer Chain Craft', desc: 'A creative prayer activity for the Lenten season.', url: 'https://outuponthewaters.com/paper-prayer-chain-craft/' },
  { title: 'Jelly Bean Prayer Printable', desc: 'A sweet way of guiding prayers during Lent or Holy Week.', url: 'https://www.downredbuddrive.com/jelly-bean-prayer-printable/' },
  { title: 'Multi-sensory Easter Story Activity', desc: 'A simple way of learning about the Easter story through engaging all the senses.', url: 'https://riversedgecurriculum.wordpress.com/2013/03/21/easter-story-multi-sensory-activity/' },
  { title: 'DIY Resurrection Eggs', desc: 'Resurrection eggs activity with Easter story book printables.', url: 'https://lifeyourway.net/diy-ressurection-eggs-easter-story-book-printables/' },
]

const videos = [
  { title: 'Palm Sunday', url: 'https://www.youtube.com/watch?v=z-39h0xYqdE' },
  { title: 'The Last Supper', url: 'https://www.youtube.com/watch?v=SigoALSS1R8' },
  { title: 'Crucifixion and Resurrection', url: 'https://www.youtube.com/watch?v=X69BRjpALSE' },
]

export default function LeadersLentEaster() {
  return (
    <>
      <PageHero title="Lent and Easter \u2014 Resources for Leaders" subtitle="Curated resources for ministry leaders" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Resources</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {resources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.03}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-base font-semibold text-deep-teal mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-3">{item.desc}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Visit Resource <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Activities</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {activities.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.03}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <h3 className="font-display text-base font-semibold text-deep-teal mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-3">{item.desc}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Visit Resource <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Videos</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {videos.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.03}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{item.title}</h3>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 shrink-0 hover:gap-3 transition-all"
                  >
                    Watch <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
