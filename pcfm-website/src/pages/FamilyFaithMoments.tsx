import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function FamilyFaithMoments() {
  return (
    <>
      <PageHero title="Family Faith Moments" subtitle="Resources for families to celebrate significant days throughout the year" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Family Faith Moments are designed to help families celebrate significant days throughout the year. While these resources are created with the intention to be used at home, they are easily adaptable to be used within a children's ministry setting.
            </p>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              The Family Faith Moments are crafted especially for PCFM, and are themed around calendar events such as Back to School, Easter, ANZAC day and more. Many of the resources seek to encourage the natural curiosity of tamariki (children), and bring a faith-filled lens to the special moments in a child's year.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Themes</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Back to School', icon: '📚' },
              { title: 'Easter / Lent & Holy Week', icon: '🕯️', link: '/lent-and-easter' },
              { title: 'ANZAC Day', icon: '🌺' },
              { title: 'Pentecost', icon: '🔥', link: '/pentecost' },
              { title: 'Matariki', icon: '⭐' },
              { title: 'Advent & Christmas', icon: '🎄', link: '/advent-and-christmas' },
            ].map((theme, i) => (
              <AnimatedElement key={theme.title} delay={i * 0.05}>
                {theme.link ? (
                  <Link to={theme.link} className="bg-white rounded-[15px] p-5 flex items-center gap-4 no-underline shadow-[0_4px_15px_rgba(26,92,82,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,92,82,0.1)] transition-all group">
                    <span className="text-3xl">{theme.icon}</span>
                    <span className="font-display font-semibold text-deep-teal group-hover:text-teal transition-colors">{theme.title}</span>
                    <ArrowRight className="w-4 h-4 text-terracotta ml-auto" />
                  </Link>
                ) : (
                  <div className="bg-white rounded-[15px] p-5 flex items-center gap-4 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                    <span className="text-3xl">{theme.icon}</span>
                    <span className="font-display font-semibold text-deep-teal">{theme.title}</span>
                  </div>
                )}
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
