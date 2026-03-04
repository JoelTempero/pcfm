import { Link } from 'react-router-dom'
import { FileText, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const familyFaithMoments: { title: string; pdf?: string; link?: string }[] = [
  { title: 'New Year / Epiphany', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Epiphany-FFM.pdf' },
  { title: 'Back to School', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Back-to-school-FFM.pdf' },
  { title: 'Palm Sunday', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Palm-Sunday-FFM.pdf' },
  { title: 'Holy Week & Eastertide Series', link: '/eastertide-family-faith-moments' },
  { title: 'ANZAC Day', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/ANZAC-Day-FFM-1.pdf' },
  { title: 'A Blessing for Mothers', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/A-Blessing-for-Mothers.pdf' },
  { title: 'Mothers Day', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/A-Blessing-for-Mothers-2023-1.pdf' },
  { title: 'Pentecost', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Pentecost-FFM.pdf' },
  { title: 'Matariki (2023)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Matariki-FFM-2023-version.pdf' },
  { title: 'Matariki (2024)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Matariki-FFM-2024.pdf' },
  { title: 'Season of Creation', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Season-of-Creation.pdf' },
  { title: 'A Special Blessing for Fathers', pdf: 'https://pcfm.org.nz/wp-content/uploads/2024/08/A-Special-Blessing-for-Fathers-Day-2024.pdf' },
  { title: 'A Blessing for Fathers (2024)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2024/08/A-Blessing-for-Fathers-2024.pdf' },
  { title: 'A Blessing for Fathers (2022)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Fathers-Day-2024-1.pdf' },
  { title: 'Advent: Hope', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Advent-FFM-2023.pdf' },
  { title: 'Advent: Peace', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Advent-FFM-2023-3.pdf' },
  { title: 'Advent: Joy', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Advent-FFM-2023-1.pdf' },
  { title: 'Advent: Love', pdf: 'https://pcfm.org.nz/wp-content/uploads/2025/04/Advent-FFM-2023-2.pdf' },
  { title: 'Coronation Day', pdf: 'https://pcfm.org.nz/wp-content/uploads/2023/04/Coronation-FFM.pdf' },
]

export default function FamilyFaithMoments() {
  return (
    <>
      <PageHero title="Family Faith Moments" subtitle="Resources for families to celebrate significant days throughout the year" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Family Faith Moments are designed to help families celebrate significant days throughout the year. While these resources are created with the intention to be used at home, they are easily adaptable to be used within a children's ministry setting.
            </p>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              The Family Faith Moments are crafted especially for PCFM, and are themed around calendar events such as Back to School, Easter, ANZAC day and more. Many of the resources seek to encourage the natural curiosity of tamariki (children), and bring a faith-filled lens to the special moments in a child's year.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Downloadable Resources</h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {familyFaithMoments.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.03}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-3 h-full">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{item.title}</h3>
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                    >
                      <FileText className="w-4 h-4" /> PDF
                    </a>
                  )}
                  {item.link && (
                    <Link
                      to={item.link}
                      className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                    >
                      View <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
