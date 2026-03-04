import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const ministries = [
  { name: 'Strandz', desc: 'Anglican Children and Families Ministry', url: 'https://www.strandz.org.nz' },
  { name: 'Baptist Children and Family Ministry', desc: 'Baptist CFM resources', url: 'https://www.baptistcfm.org.nz' },
  { name: 'ICONZ', desc: 'Adventure-based youth ministry', url: 'https://site.iconz.org.nz' },
  { name: 'ICONZ 4 Girlz', desc: 'Adventure-based ministry for girls', url: 'https://www.iconz4girlz.org.nz' },
  { name: 'Mainly Music', desc: 'Music-based programme for families', url: 'https://www.mainlymusic.org' },
  { name: 'Messy Church', desc: 'Creative church for all ages', url: 'https://www.messychurch.org.uk' },
  { name: 'Scripture Union NZ', desc: 'SUNZ resources and programmes', url: 'https://www.sunz.org.nz' },
  { name: 'Faith at Home', desc: 'Equipping families for faith formation', url: 'https://www.faithathome.com' },
  { name: 'Faith Inkubators', desc: 'Faith formation resources', url: 'https://faithink.com' },
  { name: 'Here2Stay', desc: 'Australian children\'s ministry network', url: 'https://here2stay.org.au' },
  { name: 'Launchpad', desc: 'NZ youth ministry resources', url: 'https://launchpad.kiwi' },
  { name: 'Parenting Place', desc: 'Support for NZ parents and families', url: 'https://parentingplace.nz' },
  { name: 'NZ Children\'s Ministry Network', desc: 'Connecting children\'s ministry across NZ', url: 'http://www.nzcmn.org.nz' },
]

export default function OtherMinistries() {
  return (
    <>
      <PageHero title="Other Ministries Supporting Children and Families" subtitle="Partner organisations and resources" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">
              Ministries supporting the development of faith in children and families
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ministries.map((ministry, i) => (
              <AnimatedElement key={ministry.name} delay={i * 0.03}>
                <a
                  href={ministry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-start gap-3 no-underline group h-full"
                >
                  <ExternalLink className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-deep-teal group-hover:text-teal transition-colors">
                      {ministry.name}
                    </h3>
                    <p className="text-text-light text-sm mt-1">{ministry.desc}</p>
                  </div>
                </a>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
