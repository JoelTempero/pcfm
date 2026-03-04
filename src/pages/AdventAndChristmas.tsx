import { Link } from 'react-router-dom'
import { FileText, ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const externalResources = [
  { title: 'mainlyMINISTRIES — Christmas Resource', text: 'A free Christmas resource from mainlyMINISTRIES for church services and/or children\'s ministry.', link: 'https://mainlyministries.org.nz/collections/new/products/christmas-resource-free-1' },
  { title: 'Bible Society — Festive Fred', text: 'Produced each year based on the Christmas story, perfect for giving out to participants in children\'s ministry and outreach programmes.', link: 'https://biblesociety.org.nz/festive-fred/' },
  { title: 'Strandz — Advent & Christmas', text: 'Anglican Children and Families Ministry hub with resources for Advent and Christmas.', link: 'https://www.strandz.org.nz/advent--christmas.html' },
  { title: 'We Wonder Podcast', text: 'A children-focused podcast series on the Advent story (no longer releasing new episodes, but previous years\' content still available).', link: 'https://www.wewonderpod.com/blank-page-1' },
  { title: '24-7 Lectio for Families', text: 'A free daily devotional that helps families to read the Bible and explore faith through conversation and prayer together.', link: 'https://www.24-7prayer.com/lectioforfamilies/pray/' },
]

export default function AdventAndChristmas() {
  return (
    <>
      <PageHero title="Advent and Christmas" subtitle="Resources for celebrating the season of Advent and Christmas" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          {/* Little Book of Advent */}
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

          {/* Christmas Prayer Journey */}
          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">A Christmas Prayer Journey</h3>
              <p className="text-text-light text-sm leading-relaxed">
                An interactive, all-ages event that immerses participants in the story of Christmas. Designed as a walk-through experience with stations for prayer, reflection, and sensory engagement. Contact PCFM for more information about running a Christmas Prayer Journey in your church.
              </p>
            </div>
          </AnimatedElement>

          {/* Come Let Us Walk */}
          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Come Let Us Walk — Advent Resources</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                An invitation for families and children's ministries to explore the story of Advent through the themes of Hope, Peace, Joy and Love, including ideas for worship, reflection, and prayer.
              </p>
              <Link
                to="/advent-2022"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Advent 2022 Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>

          {/* Lectio for Families */}
          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Lectio for Families</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                A free daily devotional that helps families to read the Bible and explore faith through conversation and prayer together.
              </p>
              <a
                href="https://pcfm.org.nz/wp-content/uploads/2024/02/Lectio-for-families.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                <FileText className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </AnimatedElement>

          {/* Light in the Dark */}
          <AnimatedElement>
            <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-4">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Light in the Dark</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Every year, churches across the motu host Light Parties or similar alternatives to Halloween.
              </p>
            </div>
          </AnimatedElement>

          {/* Christmas Skits link */}
          <AnimatedElement>
            <Link
              to="/christmas-skits"
              className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)] mb-10 flex items-center justify-between gap-4 no-underline group hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)] transition-all"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-deep-teal group-hover:text-teal transition-colors mb-1">Christmas Skits</h3>
                <p className="text-text-light text-sm">A collection of skits for churches preparing for Christmas celebrations.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-terracotta shrink-0" />
            </Link>
          </AnimatedElement>

          {/* External Resources */}
          <AnimatedElement className="mt-6">
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">External Resources</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {externalResources.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.05}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-start gap-4 no-underline group hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)] transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-deep-teal mb-1 group-hover:text-teal transition-colors">{item.title}</h3>
                    <p className="text-text-light text-sm">{item.text}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                </a>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
