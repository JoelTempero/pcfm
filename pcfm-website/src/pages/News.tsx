import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { newsItems } from '../data/news'

export default function News() {
  return (
    <>
      <PageHero title="What's New" subtitle="Keep up to date with the latest news from PCFM" />

      <Section>
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {newsItems.map((item, i) => (
              <AnimatedElement key={item.id} delay={i * 0.1}>
                <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(26,92,82,0.1)] group h-full flex flex-col">
                  <div className="h-[200px] bg-cream overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal to-deep-teal flex items-center justify-center">
                        <span className="text-5xl">📧</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="font-display text-xs font-semibold text-terracotta uppercase tracking-wider">{item.tag}</span>
                    <h3 className="font-display text-lg font-semibold text-deep-teal my-2 leading-snug">{item.title}</h3>
                    <p className="text-[0.95rem] text-text-light flex-1">{item.description}</p>
                    {item.link && (
                      <Link to={item.link} className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-3 transition-all hover:gap-3">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement>
            <div className="bg-gradient-to-br from-deep-teal to-teal rounded-[20px] p-8 md:p-12 text-center text-white">
              <h2 className="font-display text-2xl font-bold mb-3">Woven Newsletter</h2>
              <p className="text-lg text-white/90 mb-2 max-w-[600px] mx-auto">
                Woven — Connecting and Communicating in Ministry with Children and Families
              </p>
              <p className="text-white/80 mb-6 max-w-[500px] mx-auto">
                Keep up to date with all of our news by signing up to our mailing list. You will receive 'Woven', our termly newsletter, plus occasional updates.
              </p>
              <p className="text-white/70 text-sm mb-6">We promise not to overload your inbox, and you can unsubscribe at any time.</p>
              <Link
                to="/newsletter-signup"
                className="font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light hover:-translate-y-0.5"
              >
                Subscribe Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
