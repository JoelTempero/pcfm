import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function FiveMatters() {
  return (
    <>
      <PageHero title="5 'Matters' of Children and Families Ministry for Leaders" subtitle="Reflections and recommended resources for ministry leaders" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Written by Cheryl Harray (before her retirement in November 2020 from Children & Families Advisor in Otago/Southland).
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              This resource captures Cheryl's reflections and highly recommended resources. PCFM describes this resource as "a treasure, fit for any leader or children & families ministry leadership team to use and adopt in their own context."
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <a
              href="https://pcfm.org.nz/wp-content/uploads/2021/08/5-Matters-of-CHILDREN-and-FAMILIES-Ministry-for-leaders-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-base px-6 py-3 rounded-full bg-terracotta text-white no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" /> Download Resource (PDF)
            </a>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
