import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const archives = [
  { title: 'A Kids Friendly Advent (2018)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/A-Kids-Friendly-Advent-2018.pdf' },
  { title: 'Choosing a Curriculum (2016)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/Choosing-a-Curriculum-Jan-2016_updated.pdf' },
  { title: 'Communion Booklet (2018)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/Communion_Booklet-2018.pdf' },
  { title: 'Helping Children Deal with Trauma (2019)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/Helping-children-deal-with-trauma-2019.pdf' },
]

export default function KidsFriendlyArchives() {
  return (
    <>
      <PageHero title="Favourites from our Kids Friendly Archives" subtitle="Treasured resources from the Kids Friendly legacy" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              Kids Friendly was the predecessor to Presbyterian Children and Families Ministry (PCFM). While the Kids Friendly website has been retired, many of its beloved resources continue to serve churches and families. Below are some favourites from the archives, available for download.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Downloadable Resources</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {archives.map((item, i) => (
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
        </div>
      </Section>
    </>
  )
}
