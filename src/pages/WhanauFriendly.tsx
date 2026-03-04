import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function WhanauFriendly() {
  return (
    <>
      <PageHero title="Whanau Friendly Process" subtitle="A practical tool to help churches bring about intergenerational vision" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <div className="space-y-5 text-text-light leading-relaxed mb-10">
              <p>"Our dream is that the local church will be a place where all generations are present, thriving, encouraging one another and growing in faith together."</p>
              <p>The Whanau Friendly Process is a practical tool to help churches bring about this vision and will engage all members of the church as they journey through the process.</p>
              <p>The Whanau Friendly Process is an intentional journey with teaching and reflection for the whole Church whanau to engage in together.</p>
              <p>It fosters an understanding of the collective power of the congregation discipling young people — together. It has also been created to help congregations reflect on their current ministry and discern in which ways God may be leading them in the upcoming years.</p>
              <p>Coaching support is available through Whanau Friendly coaches. The process was developed together with the PYM (Presbyterian Youth Ministry) team.</p>
              <p>Rooted in the strengths of the Kids Friendly Self-Review while serving the church with a broader focus on children, youth, and their families.</p>
              <p>Positive feedback from churches who have been through the process.</p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-deep-teal rounded-[20px] p-8 text-center text-white">
              <h2 className="font-display text-xl font-bold mb-3">Visit the Whanau Friendly Website</h2>
              <p className="text-white/80 mb-6">Learn more about the Whanau Friendly Process and how your church can get started.</p>
              <a
                href="https://www.whanaufriendly.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light hover:-translate-y-0.5"
              >
                whanaufriendly.org.nz <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
