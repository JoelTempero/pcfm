import { FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function LightParty() {
  return (
    <>
      <PageHero title="Light Party Resource" subtitle="Light in the Dark — a free resource for churches" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.06)] grid md:grid-cols-[250px_1fr] gap-0 mb-8">
              <div className="bg-cream flex items-center justify-center p-6">
                <img
                  src="https://i0.wp.com/pcfm.org.nz/wp-content/uploads/2024/08/Light-Party-Resource.png?w=300"
                  alt="Light Party Resource"
                  className="w-full max-w-[200px] rounded-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-deep-teal mb-3">Light in the Dark</h2>
                <p className="text-text-light leading-relaxed mb-4">
                  Every year, churches across the motu host Light Parties, or similar alternatives to Halloween. To help share the Gospel message in a tangible and easy way, we have created our 'Light in the Dark' resource. This resource is free to download and can be printed as you wish (including professional printing). We ask that you do not alter the contents or remove the copyright — you are welcome to add your church contact details in the space provided.
                </p>
                <a
                  href="https://pcfm.org.nz/wp-content/uploads/2024/09/Light-Party-Resource-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-base px-6 py-3 rounded-full bg-terracotta text-white no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:-translate-y-0.5"
                >
                  <FileText className="w-5 h-5" /> Download 2024 Resource (PDF)
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
