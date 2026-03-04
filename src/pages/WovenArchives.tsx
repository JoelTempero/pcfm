import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const archives = [
  { title: '\u2018Woven\u2019 Term 1, 2025', url: 'http://eepurl.com/i-DjdQ' },
  { title: 'Christmas Message, December 2024', url: 'http://eepurl.com/i6woiQ' },
  { title: '\u2018Woven\u2019 Term 4, 2024', url: 'http://eepurl.com/i2K1JU' },
  { title: '\u2018Woven\u2019 Term 3, 2024', url: 'http://eepurl.com/iVewHY' },
  { title: '\u2018Woven\u2019 Term 2, 2024', url: 'http://eepurl.com/iP7xLU' },
  { title: '\u2018Woven\u2019 Term 1, 2024', url: 'https://mailchi.mp/ed6a1774947b/woven-presbyterian-children-and-families-term-1-2024' },
  { title: '\u2018Woven\u2019 Term 4, 2023', url: 'https://mailchi.mp/a9fa011ff4b9/woven-presbyterian-children-and-families-term-4-2023' },
  { title: '\u2018Woven\u2019 Term 3, 2023', url: 'https://mailchi.mp/cf1d41192171/woven-presbyterian-children-and-families-term-3-2023' },
  { title: '\u2018Woven\u2019 Term 2, 2023', url: 'https://mailchi.mp/1163ad018b6e/woven-presbyterian-children-and-families-term-2-2023' },
  { title: '\u2018Woven\u2019 Term 1, 2023', url: 'http://mailchi.mp/cb8f63514eb7/woven-presbyterian-children-and-families-term-1-2023' },
  { title: '\u2018Woven\u2019 Term 3, 2022', url: 'http://mailchi.mp/4d2b8ed9cfc9/woven-presbyterian-children-and-families-term-3-2022' },
  { title: '\u2018Woven\u2019 Term 2, 2022', url: 'http://mailchi.mp/1d771b7a33f3/woven-presbyterian-children-and-families-term-2-2022' },
  { title: '\u2018Woven\u2019 Term 1, 2022', url: 'http://mailchi.mp/0f2e2d7682d6/woven-presbyterian-children-and-families-term-1-2022' },
  { title: '\u2018Woven\u2019 Christmas 2021', url: 'http://mailchi.mp/6540486034b4/children-and-families-christmas-2021' },
  { title: '\u2018Woven\u2019 Term 4, 2021', url: 'http://mailchi.mp/991155c5ac27/woven-presbyterian-children-and-families-term-4-2021' },
  { title: '\u2018Woven\u2019 Term 3, 2021', url: 'http://mailchi.mp/32b27695926c/woven-presbyterian-children-and-families-term-3-2021' },
  { title: '\u2018Woven\u2019 Term 2, 2021', url: 'http://mailchi.mp/d611fbc84da6/woven-presbyterian-children-and-families-term-2-2021' },
  { title: '\u2018Woven\u2019 March 2021', url: 'http://mailchi.mp/c7acba5cfc36/children-and-families-march-2021' },
  { title: '\u2018Woven\u2019 February 2021', url: 'http://mailchi.mp/233fc0a933a6/children-and-families-february-2021' },
  { title: '\u2018Woven\u2019 December 2020', url: 'http://mailchi.mp/6dfdd8e629c4/children-and-families-december-2020' },
  { title: '\u2018Woven\u2019 September 2020', url: 'https://mailchi.mp/61d2ab15bc88/children-and-families-september-2020' },
  { title: '\u2018Woven\u2019 August 2020', url: 'http://mailchi.mp/66bdfad26f57/children-and-families-aug-2020' },
]

export default function WovenArchives() {
  return (
    <>
      <PageHero title="'Woven' E-News Archives" subtitle="Previous issues of the Presbyterian Children and Families newsletter" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              Check out previous issues of 'Woven', Presbyterian Children and Families E-News.
            </p>
          </AnimatedElement>

          <div className="space-y-3">
            {archives.map((item, i) => (
              <AnimatedElement key={item.title} delay={i * 0.02}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4 no-underline group"
                >
                  <h3 className="font-display text-base font-semibold text-deep-teal group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-terracotta shrink-0" />
                </a>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="mt-10">
            <div className="bg-cream rounded-[15px] p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Subscribe to Woven</h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                Want to receive the latest issues of Woven directly to your inbox? Sign up for the newsletter.
              </p>
              <Link
                to="/newsletter-signup"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Sign Up for Woven &rarr;
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
