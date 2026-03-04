import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function KidsFriendly() {
  return (
    <>
      <PageHero title="Kids Friendly" subtitle="The legacy that built PCFM" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                In 2020, as a result of a national ministries review, Presbyterian Children and Families Ministry (PCFM) was established. PCFM has grown from the legacy of Kids Friendly, acknowledging and celebrating the mahi of those who have gone before, and continuing to grow to best serve the needs of churches.
              </p>
              <p>
                As a result of these changes, the Kids Friendly website has been shut down. But fear not! The Kids Friendly resources that are loved and treasured are in the process of being updated and revamped, and will be loaded onto the PCFM website when available.
              </p>
              <p>
                If you are desperately seeking a Kids Friendly resource, please send us an email at{' '}
                <a
                  href="mailto:pcfm@presbyterian.org.nz"
                  className="text-terracotta font-semibold no-underline hover:underline"
                >
                  pcfm@presbyterian.org.nz
                </a>{' '}
                and we'll do our best to help you.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement className="mt-10">
            <div className="bg-cream rounded-[15px] p-6">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Kids Friendly Archives</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Browse favourites from the Kids Friendly archives, including resources on Advent, curriculum, communion, and supporting children through trauma.
              </p>
              <Link
                to="/kids-friendly-archives"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Archives &rarr;
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
