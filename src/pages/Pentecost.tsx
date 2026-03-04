import { FileText, Download } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'

const sessions = [
  { num: 1, title: 'Pentecost 1', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/05/Pentecost-1.pdf' },
  { num: 2, title: 'Pentecost 2', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/05/Pentecost-2.pdf' },
  { num: 3, title: 'Pentecost 3', pdf: 'https://pcfm.org.nz/wp-content/uploads/2021/05/Pentecost-3.pdf' },
  { num: 4, title: 'Pentecost 4', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/04/Pentecost-4.0.pdf' },
  { num: 5, title: 'Pentecost 5', pdf: 'https://pcfm.org.nz/wp-content/uploads/2022/04/Pentecost-5.pdf' },
]

const serviceDocuments = [
  { title: 'Pentecost Service', ext: 'docx', url: 'https://pcfm.org.nz/wp-content/uploads/2022/05/Pentecost-Service.docx' },
  { title: 'Pentecost Sunday Intergenerational Service', ext: 'docx', url: 'https://pcfm.org.nz/wp-content/uploads/2022/04/PENTECOST-SUNDAY-INTERGENERATIONAL-SERVICE.docx' },
  { title: 'Pentecost Sunday Intergenerational Service', ext: 'pptx', url: 'https://pcfm.org.nz/wp-content/uploads/2022/04/PENTECOST-SUNDAY-INTERGENERATIONAL-SERVICE.pptx' },
  { title: 'Big flames', ext: 'docx', url: 'https://pcfm.org.nz/wp-content/uploads/2022/04/Big-flames.docx' },
  { title: 'Small flames', ext: 'docx', url: 'https://pcfm.org.nz/wp-content/uploads/2022/04/Small-flames.docx' },
]

export default function Pentecost() {
  return (
    <>
      <PageHero title="Pentecost" subtitle="Family Faith Moments for the Pentecost Season" />

      <Section>
        <div className="max-w-[900px] mx-auto">
          <AnimatedElement>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              5 sessions designed to encourage and support families with discipleship and faith formation at home. These 'Family Faith Moments' begin with Pentecost Sunday and can continue through the weeks following Pentecost.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Sessions</h2>
          </AnimatedElement>

          <div className="space-y-3 mb-12">
            {sessions.map((session, i) => (
              <AnimatedElement key={session.num} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-deep-teal rounded-full flex items-center justify-center text-white font-display font-bold shrink-0">
                      {session.num}
                    </div>
                    <h3 className="font-display text-base font-semibold text-deep-teal">{session.title}</h3>
                  </div>
                  <a
                    href={session.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                  >
                    <FileText className="w-4 h-4" /> PDF
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement>
            <h2 className="font-display text-2xl font-bold text-deep-teal mb-6">Service Documents</h2>
          </AnimatedElement>

          <div className="space-y-3">
            {serviceDocuments.map((doc, i) => (
              <AnimatedElement key={`${doc.title}-${doc.ext}`} delay={i * 0.05}>
                <div className="bg-white rounded-[15px] p-5 shadow-[0_4px_15px_rgba(26,92,82,0.06)] flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-deep-teal">{doc.title}</h3>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm text-terracotta no-underline inline-flex items-center gap-1 shrink-0 hover:gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" /> {doc.ext.toUpperCase()}
                  </a>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
