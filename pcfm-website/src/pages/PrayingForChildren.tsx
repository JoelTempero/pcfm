import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function PrayingForChildren() {
  return (
    <>
      <PageHero title="Praying for Children" subtitle="Karakia mo Nga Tamariki" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              An annual initiative in partnership with Presbyterian Support NZ (PresCare).
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              Use the resources of the 'Praying for Children' initiative to make space, look around, and ask some questions like, 'What would it take to include children who may be a bit different, or have particular challenges?'
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              A bookmark was created with a list of phrases on the back — one for each day — to insert into a simple prayer and give a focus for that day. Copies of the bookmark were made available in parishes after 27 July 2020, with a printable version available online.
            </p>
            <p className="text-text-light mb-8 leading-relaxed">
              Rev. Roxy Gahegan's blog "Seeds of Love" provides prayers and pause points to accompany each of the daily themes.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">Sowing Seeds of Love</h2>
            <div className="space-y-4 text-text-light leading-relaxed mb-8">
              <p>Stories and notes accompanying each slide are included in the notes section on the slide, as well as in the document above titled 'Sowing Seeds of Love Overview.'</p>
              <p>Music video spotlight on Family Violence: "Every child deserves to feel safe in their own home yet family violence is in every community."</p>
              <p>"Just hear me, just see me... let me know that I am truly worthy."</p>
              <p>"We can all do our part to help children belong and be safe."</p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">The Blessing</h2>
            <p className="text-text-light mb-8 leading-relaxed">
              The blessing song based on Numbers that took off around the world during Covid-19. This version is sung by children from around the world, including NZ.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-xl font-bold text-deep-teal mb-4">Sign Language / Inclusion</h2>
            <p className="text-text-light mb-4 leading-relaxed">
              Encourages teaching some sign language to include people of all ages who are hearing impaired. Simple words like Lord, Bless, Family, and Amen to use in worship songs.
            </p>
            <p className="text-text-light mb-8 leading-relaxed text-sm italic">
              References a book for faith communities produced by the Disability, Spirituality and Faith Network, Aotearoa NZ, 2014.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-cream rounded-[15px] p-6">
              <h3 className="font-display text-base font-semibold text-deep-teal mb-2">Credits</h3>
              <p className="text-sm text-text-light">
                Resources created by Anne Overton, Melanie Te Au, Rev Sharon Ross Ensor, and Karo Wilson. Funded by Presbyterian Development Society grant. Resources available in English, te reo Maori, Samoan, and Korean.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
