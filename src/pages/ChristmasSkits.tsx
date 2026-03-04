import { Link } from 'react-router-dom'
import { FileText, ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const skits: { title: string; author?: string; pdf: string; isNew?: boolean }[] = [
  { title: 'How the Grinch Stole Christmas', author: 'Dr. Seuss (submitted by Pat White)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/How-the-Grinch-stole-Christmas-by-Dr-Seuss.pdf', isNew: true },
  { title: 'Pass the Parcel Impromptu Nativity Drama', author: 'Submitted by Pat White', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/Pass-the-parcel-Nativity.pdf', isNew: true },
  { title: "We're Going Down to Bethlehem to Find a Baby", author: 'Based on "We\'re Going on a Bear Hunt" (submitted by Pat White)', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/Were-going-down-to-Bethlehem-were-not-scared.pdf', isNew: true },
  { title: 'The Christmas Story in S', author: 'Submitted by Christine Harrex', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/10/The-Christmas-Story-in-S.pdf', isNew: true },
  { title: 'REALStory Script', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/REALStory-Script.pdf' },
  { title: 'Through the Eyes of the Angels', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/Through-the-eyes-of-the-Angels.pdf' },
  { title: 'The Journey', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/thejourney.pdf' },
  { title: 'CON27 — The Evening News Hour', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/CON27-The-Evening-News-Hour.pdf' },
  { title: 'Rags to Riches', author: 'Scripture Union New Zealand', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/10/Rags-to-Riches.pdf' },
  { title: 'A Christmas Tableau (Godly Play style)', pdf: 'https://www.leeds.anglican.org/sites/default/files/files/christmastableau.pdf' },
]

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
            {skits.map((skit, i) => (
              <AnimatedElement key={skit.title} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-base font-semibold text-deep-teal">{skit.title}</h3>
                        {skit.isNew && (
                          <span className="text-xs font-display font-bold bg-terracotta text-white px-2 py-0.5 rounded-full uppercase">New</span>
                        )}
                      </div>
                      {skit.author && (
                        <p className="text-text-light text-sm">{skit.author}</p>
                      )}
                    </div>
                    <a
                      href={skit.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all mt-1"
                    >
                      <FileText className="w-4 h-4" /> PDF
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">Online Christmas Skit Archives</h2>
            <div className="space-y-3">
              <Link
                to="/online-christmas-skit-archive"
                className="bg-white rounded-[15px] p-5 flex items-center gap-3 no-underline group shadow-[0_4px_15px_rgba(26,92,82,0.06)]"
              >
                <ArrowRight className="w-5 h-5 text-teal shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-deep-teal group-hover:text-teal transition-colors">Online Christmas Skit Archive</h4>
                  <p className="text-sm text-text-light">Browse our archive of online Christmas skits</p>
                </div>
              </Link>
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
