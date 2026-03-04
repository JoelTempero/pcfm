import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function LectioDivina() {
  return (
    <>
      <PageHero title="Lectio Divina for Families" subtitle="Engaging with the Bible through spiritual practice" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              This resource has been created to help families engage with the Bible through the spiritual practice of Lectio Divina. Simply follow the steps to practice this meaningful spiritual discipline as a family.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
              <h3 className="font-display text-base font-semibold text-deep-teal">Download Lectio for Families PDF</h3>
              <a
                href="https://pcfm.org.nz/wp-content/uploads/2024/02/Lectio-for-families.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
              >
                <FileText className="w-4 h-4" /> PDF
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
