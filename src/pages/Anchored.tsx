import { Download, Mail } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const sessions = [
  { num: 1, title: 'God\'s Story, My Story', description: 'A session exploring the Big Story of God and where we\'re found in it, including some basic theological topics that invite questions.', docx: 'https://anchoredpilot.files.wordpress.com/2019/09/session-1.docx' },
  { num: 2, title: 'Worshipping Together: Word and Sacrament', description: 'A session including a focus on the Centrality of the Word within our worshipping communities and life, as well as exploring the meaning of the Sacraments of Baptism and the Lord\'s Supper.', docx: 'https://anchoredpilot.files.wordpress.com/2019/09/session-2.docx' },
  { num: 3, title: 'We Believe: Confessions of the Church and History of the PCANZ', description: 'A session including an exploration of beliefs we hold in common and the faith which we confess, by looking at church confessions and the meaning behind the PCANZ logo.', docx: 'https://anchoredpilot.files.wordpress.com/2019/09/session-3.docx' },
  { num: 4, title: 'This, I Believe: Statements of Faith', description: 'A session which aims to encourage and equip participants in developing a living document of who God is to them. The idea of a "statement of faith" is introduced at the retreat and then expanded upon within the sessions.', docx: 'https://anchoredpilot.files.wordpress.com/2019/09/session-4.docx' },
  { num: 5, title: 'Walking with God: Christian Living', description: 'A session focusing on the "habits" of a disciple; exploring prayer, scripture/devotional life, social justice/service, and vocation.', docx: 'https://anchoredpilot.files.wordpress.com/2019/09/session-5.docx' },
]

const hopedOutcomes = [
  'Young people would be invited to ask questions and explore issues of faith',
  'Young people\'s understanding of God and themselves would be strengthened',
  'Young people would be encouraged on their journeys of faith',
  'Young people would come away with a better understanding of what it means to be a Presbyterian in New Zealand',
  'To provide an opportunity for ministers and young people to connect and build meaningful relationship',
  'To provide a framework for further discipleship and growth',
  'Young people would be baptised and/or confirmed/reaffirm their faith',
]

export default function Anchored() {
  return (
    <>
      <PageHero title="Anchored" subtitle="Baptism & Confirmation Course for Years 7-10" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Overview</h2>
            <p className="text-text-light leading-relaxed mb-8">
              Presbyterian Children and Families Ministry (PCFM) has developed a Confirmation/Baptismal course for years 7-10, wherein ministers can invite their young people to explore issues of faith and provide the opportunity to profess their faith through baptism and/or confirmation/reaffirmation of faith.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Structure</h2>
            <p className="text-text-light leading-relaxed mb-8">
              The 'ANCHORED' course includes a regional one-night or weekend retreat (led by national and/or Presbytery staff) and a five-session curriculum that follows on from the retreat in the local church context. For each minister who has one or more young people interested in exploring faith through 'ANCHORED', the commitment would be to attend the regional retreat with the young person/people with at least one chaperone, and then to lead the five sessions with their young people in the weeks following the retreat.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Sessions</h2>
            <div className="space-y-4">
              {sessions.map((session, i) => (
                <AnimatedElement key={session.num} delay={i * 0.1}>
                  <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-deep-teal rounded-full flex items-center justify-center text-white font-display font-bold shrink-0">
                        {session.num}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{session.title}</h3>
                        <p className="text-text-light text-sm leading-relaxed mb-3">{session.description}</p>
                        <a
                          href={session.docx}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                        >
                          <Download className="w-4 h-4" /> Download Session {session.num} (DOCX)
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement className="mt-10">
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-4">Hoped Outcomes</h2>
            <p className="text-text-light leading-relaxed mb-4">
              Some hopes and outcomes that undergird this course:
            </p>
            <ul className="space-y-3">
              {hopedOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5 shrink-0">&#8226;</span>
                  <span className="text-text-light leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </AnimatedElement>

          <AnimatedElement className="mt-10">
            <div className="bg-cream rounded-[15px] p-6">
              <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">Contact</h3>
              <p className="text-text-light leading-relaxed">
                For more about the 'ANCHORED' programme, please contact:
              </p>
              <a
                href="mailto:karo@presbyterian.org.nz"
                className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-2 mt-2 hover:gap-3 transition-all"
              >
                <Mail className="w-4 h-4" /> Karo Wilson — karo@presbyterian.org.nz
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
