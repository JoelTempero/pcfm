import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const resources = [
  { title: 'The Empty Tomb \u2014 Holy Week Devotion', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/The-Empty-Tomb-FFM.pdf' },
  { title: 'Living the Resurrection \u2014 Eastertide Week 1', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Eastertide-FFM-1-2025-1.pdf' },
  { title: 'Living the Resurrection \u2014 Eastertide Week 2', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Eastertide-FFM-2-2025.pdf' },
  { title: 'Living the Resurrection \u2014 Eastertide Week 3', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Eastertide-FFM-3-2025.pdf' },
  { title: 'Living the Resurrection \u2014 Eastertide Week 4', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Eastertide-FFM-4-2025.pdf' },
  { title: 'Living the Resurrection \u2014 Eastertide Week 5', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Eastertide-FFM-5-2025.pdf' },
]

const colouringResources = [
  { title: 'Chalice Colouring Picture', pdf: 'https://pcfm.org.nz/wp-content/uploads/2020/07/chalice.pdf' },
  { title: 'Labyrinth Colouring Page', pdf: 'https://pcfm.org.nz/wp-content/uploads/2020/07/finger.labyrinth.pdf' },
]

export default function EastertideFamilyFaithMoments() {
  return (
    <>
      <PageHero title="Easter and Eastertide Family Faith Moments" subtitle="A series of Family Faith Moments for Holy Week and the Easter season" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Eastertide Resources</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {resources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{item.title}</h3>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                  >
                    <FileText className="w-4 h-4" /> PDF
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Bonus Colouring Resources</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {colouringResources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{item.title}</h3>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                  >
                    <FileText className="w-4 h-4" /> PDF
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <Link
              to="/family-faith-moments"
              className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              &larr; Back to Family Faith Moments
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
