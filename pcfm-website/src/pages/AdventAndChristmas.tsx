import { FileText, ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function AdventAndChristmas() {
  return (
    <>
      <PageHero title="Advent and Christmas" subtitle="Resources for celebrating the season of Advent and Christmas" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement className="mb-10">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.06)] grid md:grid-cols-[200px_1fr] gap-0">
              <div className="bg-cream flex items-center justify-center p-6">
                <img
                  src="https://i0.wp.com/pcfm.org.nz/wp-content/uploads/2025/11/Advent-booklet-2025-1.png?w=300"
                  alt="The Little Book of Advent 2025"
                  className="w-full max-w-[160px] rounded-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-deep-teal mb-2">The Little Book of Advent</h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  A daily reading guide for families, about 3,000 copies shared throughout NZ each year.
                </p>
                <a
                  href="https://pcfm.org.nz/wp-content/uploads/2025/11/Advent-booklet-2025-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <FileText className="w-4 h-4" /> Download 2025 Edition (PDF)
                </a>
              </div>
            </div>
          </AnimatedElement>

          {[
            { title: 'A Christmas Prayer Journey', text: 'An interactive, all-ages event that immerses participants in the story of Christmas.' },
            { title: 'Advent Resource (2022)', text: 'An invitation for families and children\'s ministries to explore the story of Advent through the themes of Hope, Peace, Joy and Love, including ideas for worship, reflection, and prayer.' },
            { title: 'Lectio for Families', text: 'A free daily devotional that helps families to read the Bible and explore faith through conversation and prayer together.', pdf: 'https://pcfm.org.nz/wp-content/uploads/2024/02/Lectio-for-families.pdf' },
            { title: 'We Wonder', text: 'A children-focused podcast series on the Advent story (no longer releasing new episodes, but previous years\' content still available).' },
            { title: 'Bible Society Free Booklet', text: 'Produced each year based on the Christmas story, perfect for giving out to participants in children\'s ministry and outreach programmes.' },
            { title: 'Come Let Us Walk / mainlyMINISTRIES', text: 'Their friends at mainlyMINISTRIES have produced a new Christmas resource for church services and/or children\'s ministry.' },
            { title: 'Light in the Dark', text: 'Every year, churches across the motu host Light Parties or similar alternatives to Halloween.' },
          ].map((item, i) => (
            <AnimatedElement key={item.title} delay={i * 0.05}>
              <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                {'pdf' in item && item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 hover:gap-3 transition-all"
                  >
                    <FileText className="w-4 h-4" /> Download PDF
                  </a>
                )}
              </div>
            </AnimatedElement>
          ))}

          <AnimatedElement className="mt-6">
            <div className="bg-cream rounded-[15px] p-6">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-3">External Resources</h3>
              <a
                href="https://www.strandz.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm text-teal no-underline inline-flex items-center gap-2 hover:text-terracotta transition-colors"
              >
                Strandz — Anglican Children and Families Ministry hub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
