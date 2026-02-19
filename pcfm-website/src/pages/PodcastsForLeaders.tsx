import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function PodcastsForLeaders() {
  return (
    <>
      <PageHero title="Podcasts for Leaders" subtitle="Inspiring and equipping ministry leaders" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Highlights favourite podcasts for those involved with ministry leadership in their church. Designed to inspire with ways to grow meaningful intergenerational relationships where faith can flourish.
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              Features experienced leaders from different denominations and contexts in Aotearoa New Zealand. Leaders tell stories, share experiences, and open possibilities for growing intergenerational faith communities.
            </p>
            <p className="text-text-light leading-relaxed">
              Features <em>The Effective Ministry</em> podcast, produced by Youthworks (Australian organisation focused on effective youth and children's ministry in every church).
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
