import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { teamMembers } from '../data/team'

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="A whanau-based ministry of the Presbyterian Church of Aotearoa New Zealand" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Our Vision</h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              "To see communities of faith inspired to share God's Big Story by engaging authentically with children and families."
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Our Mission</h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              "To serve the PCANZ through servant leadership, advocacy and resourcing for authentic engagement with children and families, so that they are woven into the fabric/DNA of the church and are able to fully participate."
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">What We Do</h2>
            <div className="space-y-4 text-text-light leading-relaxed mb-8">
              <p>PCFM advocates for children and families so that they are woven into the fabric/DNA of the faith community and have full participation.</p>
              <p>They encourage, equip, resource and support church leaders, and those who work with children and young people.</p>
              <p>The website is described as "a kete of resources to help churches and families in the important, God-called task of discipling children and young people."</p>
              <p>The Children and Families Ministry — a whanau-based ministry — is a response to the vital roles families have in forming faith in their children and the partnership the gathered church has in supporting them.</p>
              <p>Children and Families is a ministry of the Presbyterian Church of Aotearoa New Zealand (PCANZ). The ministry to children and families in the Presbyterian church is supported both by the National Service Team and Regional Presbyteries.</p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Our History</h2>
            <div className="space-y-4 text-text-light leading-relaxed mb-8">
              <p>A ministry to children and their families has always been at the heart of the church. Early settlers to New Zealand brought the practice of Sunday School to the church, along with a passion for teaching the gospel to children and youth, as seen in all-age Sunday School, Children's Clubs, Bible Class, and Presbyterian Church Schools.</p>
              <p>Consistent with its commitment to education, the Presbyterian Church has long been known for its children and youth ministries. Throughout much of the twentieth century, the Sunday School and Bible Class movements were very strong.</p>
              <p className="text-sm italic">(Reference: Graham Redding, <em>The Presbyterian Church of Aotearoa New Zealand: A Brief History</em>, 4 September, 2012, p.13)</p>
              <p>The Kids Friendly initiative was prompted by findings from 2002 AC Nielsen research 'Attracting New Zealanders to spiritual life' and began as a trial project at St. Helier's Presbyterian, Auckland, in 2004, with Jill Kayser and Emily Wotton as the Project Managers. It was established with funding from the Council of World Mission.</p>
              <p>A further pledge of funding from the Presbyterian Savings and Development fund allowed the project to be trialled in a further 8 churches, and to become a national PCANZ project in 2006.</p>
              <p>The Kids Friendly ministry of the PCANZ continued to be led by Jill Kayser as the national Kids Friendly coach until 2017. Over the years, a vision for a church that welcomes, celebrates and nurtures children was also shared by office staff, regional Kids Friendly coaches and champions.</p>
              <p>The start of 2020 saw a new change. After a significant review of all national ministries and staffing, the Mission Resourcing Team was established with new roles of Directors of Children and Families Ministry as part of that team. Continuing to develop from the strong legacy of those who have gone before, the Children and Families Ministry — a whanau-based ministry — is a response to the vital roles families have in forming faith in their children and the partnership the gathered church has in supporting them.</p>
              <p>'Kids Friendly' continues as the accreditation process of the Presbyterian Children and Families Ministry. The Kids Friendly process is being reformed; a new tool is currently being developed.</p>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Team */}
      <Section
        title="Our Team"
        subtitle="Meet the people supporting children and families ministry across Aotearoa"
        className="bg-warm-white"
      >
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedElement key={member.id} delay={i * 0.1}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(26,92,82,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(26,92,82,0.12)]">
                <div className="w-full h-[250px] bg-cream overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-1">{member.name}</h3>
                  <p className="text-sm text-terracotta font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-text-light mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a href={`mailto:${member.email}`} className="text-teal no-underline text-sm hover:text-terracotta transition-colors">Email</a>
                    {member.phone && (
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-teal no-underline text-sm hover:text-terracotta transition-colors">{member.phone}</a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-deep-teal to-teal text-center">
        <AnimatedElement>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-lg text-white/90 max-w-[600px] mx-auto mb-8">
            Whether you're a ministry leader, a parent, or a church member, we'd love to connect with you.
          </p>
          <Link
            to="/contact"
            className="font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedElement>
      </section>
    </>
  )
}
