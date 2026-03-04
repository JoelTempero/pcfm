import { FileText, ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function ChristmasSkits() {
  return (
    <>
      <PageHero title="Christmas Skits" subtitle="A collection of skits for churches preparing for Christmas celebrations" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-text-light mb-8 leading-relaxed">
              A collection of skits gathered for churches preparing for Christmas celebrations. Special thanks to all contributors.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">Available Skits</h2>
          </AnimatedElement>
          <div className="space-y-3">
            {[
              { title: 'How the Grinch Stole Christmas', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/How-the-Grinch-stole-Christmas-by-Dr-Seuss.pdf' },
              { title: 'Pass the Parcel impromptu Nativity drama', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/Pass-the-parcel-Nativity.pdf' },
              { title: 'We\'re Going Down to Bethlehem to Find a Baby' },
              { title: 'The Christmas Story in S' },
              { title: 'CON27-The Evening News Hour' },
            ].map((skit, i) => (
              <AnimatedElement key={skit.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{skit.title}</h3>
                  {'pdf' in skit && skit.pdf && (
                    <a
                      href={skit.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                    >
                      <FileText className="w-4 h-4" /> PDF
                    </a>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">External Resources</h2>
            <div className="space-y-3">
              <a
                href="https://www.dramatix.org.nz/scripts/christmas-mainmenu-37"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream rounded-[15px] p-5 flex items-center gap-3 no-underline group"
              >
                <ExternalLink className="w-5 h-5 text-teal shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-deep-teal group-hover:text-teal transition-colors">Dramatix</h4>
                  <p className="text-sm text-text-light">Collection of drama scripts by Christians</p>
                </div>
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
