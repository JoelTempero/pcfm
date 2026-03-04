import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const resources = [
  { title: 'World Vision — Fun Activities for Kids', text: 'Fun activities to keep kids engaged at home.', link: 'https://www.worldvision.org.nz/connect/resources/activities-for-kids/' },
  { title: 'The Parenting Place', text: 'How to talk to your kids about COVID-19.', link: 'https://www.theparentingplace.com/health-wellness/how-to-talk-to-your-kids-about-covid-19/' },
  { title: 'Mainly Music', text: 'An ABCDE Encouragement Chart from Richard Black and Mainly Music.', link: 'https://www.mainlymusic.org/shop/help-at-home/a-helpful-alphabet-resource' },
  { title: 'Faith 5 — Manaakitanga', text: 'A video resource for families.', link: 'https://www.youtube.com/watch?v=iNAy7V5B4oE' },
  { title: 'GenOn Ministries — Sunday LIFT', text: 'Living in Faith Together sessions — free resources.', link: 'https://www.genonministries.org/collections/free-resources/products/sunday-lift-why-and-how' },
  { title: 'Engage at Home', text: 'Daily family prayer and worship activities.', link: 'https://engageworship.org/engage-at-home-daily-family-prayer-and-worship-activities' },
  { title: 'Fischy Music — Online Assembly', text: 'Worship and Health & Wellbeing music collections, introduced at the NZ Messy Church conference.', link: 'https://www.youtube.com/watch?v=GcPYmV-2DY4' },
  { title: 'Illustrated Ministry — Flatten the Curve', text: 'Faith formation resources.', link: 'https://www.illustratedministry.com/flattenthecurve' },
  { title: "CRCNA — Children's Ministry during COVID-19", text: 'Ideas for including kids in online worship.', link: 'https://network.crcna.org/childrens-ministry/childrens-ministry-and-covid-19' },
  { title: 'Teresa Cho — Kids Time & Worship Online', text: "Ideas for kids' time and worship online.", link: 'https://theresaecho.com/2020/03/16/kids-time-worship-online/' },
  { title: 'Grow Ministries — Church at Home', text: 'Resources for church at home.', link: 'https://www.growministries.org.au/product/church-at-home/' },
  { title: 'Baptist CFM — Worshipping at Home', text: 'Resources collated by the Baptist Children and Family Team.', link: 'http://www.bcfm.org.nz/' },
  { title: 'Scripture Union UK — Make and Pray', text: 'Lockdown craft and prayer ideas.', link: 'https://content.scriptureunion.org.uk/make-and-pray' },
  { title: 'Sparklers at Home', text: 'From the "Alright?" campaign — ideas to support well-being activities at home.', link: 'https://sparklers.org.nz/parenting/' },
  { title: 'Nanogirl — Super-Powered Soap for Kids', text: 'A fun craft idea to inspire children to wash their hands.', link: 'https://www.youtube.com/watch?v=EIcgYCWCoa0' },
  { title: 'The Child Psychology Service', text: '10 pointers to support you and your child manage feelings around the pandemic.', link: 'https://thechildpsychologyservice.co.nz/10-pointers-to-support-you-and-your-child-manage-feelings-around-the-corona-virus-pandemic/' },
  { title: 'Faith in Kids Blog', text: '"Mum what does God think about Coronavirus?"', link: 'https://faithinkids.org/blog/app/archive/2020-03/title/mum-what-does-god-think-of-coronavirus' },
  { title: 'Tammy Tolman Blog', text: '"The panic of not having and not knowing."', link: 'https://tammytolman.blogspot.com/2020/03/the-panic-of-not-having-and-knowing.html' },
  { title: 'Worshiping with Children Blog', text: 'A lectionary-based resource by Carolyn C. Brown.', link: 'https://worshipingwithchildren.blogspot.com/p/about-me.html' },
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
              <AnimatedElement key={resource.title} delay={i * 0.03}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-start gap-4 no-underline group hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)] transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-deep-teal mb-1 group-hover:text-teal transition-colors">{resource.title}</h3>
                    <p className="text-text-light text-sm">{resource.text}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                </a>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
