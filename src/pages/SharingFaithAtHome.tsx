import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function SharingFaithAtHome() {
  return (
    <>
      <PageHero title="Sharing Our Faith @ Home" subtitle="A resource booklet for families" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Sharing faith in the home is one of the most natural and powerful ways to nurture the spiritual growth of tamariki (children). This resource booklet has been created to support families as they explore and express their faith together in everyday moments at home.
            </p>
            <p className="text-text-light mb-10 leading-relaxed">
              Whether it is through prayer, conversation, reading scripture, or simply being present together, families have a unique opportunity to model and share faith in ways that are authentic and meaningful.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-base font-semibold text-deep-teal">Sharing Our Faith@Home Resource Booklet (2020)</h3>
                <p className="text-text-light text-sm mt-1">Downloadable PDF resource for families</p>
              </div>
              <a
                href="https://pcfm.org.nz/wp-content/uploads/2021/08/2020-Sharing-Our-Faith@Home-resource-booklet.pdf"
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
