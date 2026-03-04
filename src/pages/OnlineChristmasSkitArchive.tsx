import { FileText, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const onlineSkits = [
  { title: 'Do Not Be Afraid: A Christmas Pageant', source: 'Illustrated Ministry', url: 'https://store.illustratedministry.com/products/do-not-be-afraid-a-christmas-pageant', type: 'link' as const },
  { title: 'Zooming in on the Nativity: A Virtual Christmas Pageant', source: 'Leading in Worship', url: 'https://leadinginworship.com/2021/10/zooming-in-on-the-nativity-a-virtual-christmas-pageant/', type: 'link' as const },
  { title: 'A Virtual Christmas Pageant \u2014 Lessons and Carols (NRSV)', source: 'CNOB', url: 'http://cnob.org/wp-content/uploads/2020/10/Hybrid-Lessons-and-Carols-Service-NRSV-.pdf', type: 'pdf' as const },
]

export default function OnlineChristmasSkitArchive() {
  return (
    <>
      <PageHero title="Online Christmas Skit Archive" subtitle="Digital skits for virtual or hybrid Christmas celebrations" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              A collection of digital skits and pageants suited for virtual or hybrid Christmas celebrations. These resources have been gathered to help churches adapt their Christmas programmes for online and blended settings.
            </p>
          </AnimatedElement>

          <div className="space-y-3">
            {onlineSkits.map((skit, i) => (
              <AnimatedElement key={skit.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-base font-semibold text-deep-teal">{skit.title}</h3>
                      <p className="text-text-light text-sm mt-1">Source: {skit.source}</p>
                    </div>
                    <a
                      href={skit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                    >
                      {skit.type === 'pdf' ? (
                        <><FileText className="w-4 h-4" /> PDF</>
                      ) : (
                        <><ExternalLink className="w-4 h-4" /> Visit</>
                      )}
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <Link
              to="/christmas-skits"
              className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              &larr; Back to Christmas Skits
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
