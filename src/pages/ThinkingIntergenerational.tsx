import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function ThinkingIntergenerational() {
  return (
    <>
      <PageHero title="Thinking Intergenerationally" subtitle="Resources for all-age worship and ministry" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              The New Zealand Children's Ministry Network has produced a resource for churches to help plan and run events that are intentionally intergenerational.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <a
              href="https://pcfm.org.nz/wp-content/uploads/2024/03/Intergenerational-Steps.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-base px-6 py-3 rounded-full bg-terracotta text-white no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" /> Download Intergenerational Steps (PDF)
            </a>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
