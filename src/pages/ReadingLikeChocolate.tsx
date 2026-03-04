import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function ReadingLikeChocolate() {
  return (
    <>
      <PageHero title="Reading is Like Chocolate!" subtitle="Reflections on the joy of reading with children" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>During lockdown, Cheryl Harray, the Southern Presbyterians Children and Families Advisor, wrote a reflection on "Reading and Chocolate."</p>
              <p>"During lockdown, many of us read more books (and ate more chocolate!)."</p>
              <p>"It was great to hear from families where story time took on an even more important part in the rhythm of each day, with parents reading picture books to young children and older siblings reading to younger ones."</p>
              <p>As an ex-teacher, she encouraged families to make reading a lifetime habit and joy.</p>
              <blockquote className="border-l-4 border-terracotta pl-6 my-6 italic text-lg text-deep-teal">
                "When I say to a parent, 'Read to a child' I don't want it to sound like medicine. I want it to sound like chocolate."
                <footer className="text-sm text-terracotta mt-2 not-italic font-display font-semibold">— Mem Fox, Australian author</footer>
              </blockquote>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4 mt-10">Storypath</h2>
            <p className="text-text-light leading-relaxed mb-4">
              Storypath offers a similar resource with picture books through to youth fiction. Books easily accessed on toolbar tabs for Theme, Scripture, and Lectionary links. Includes faith talk questions helpful for all-age reflection after storytime.
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
