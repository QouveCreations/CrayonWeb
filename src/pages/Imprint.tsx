import { Link } from "react-router-dom";
import { FileText, Mail, Phone, Scale, Globe } from "lucide-react";

// Import deiner Design-System Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonBadge } from ".././components/CrayonBadge.tsx";
import { CrayonLegalCard } from ".././components/CrayonLegalCard.tsx"; // Neue Komponente

function Imprint() {
  return (
      <>
        {/* Hero Section mit globalem Padding und konsistentem Flex-Layout */}
        <section className="relative overflow-hidden min-h-[40vh] flex items-center justify-center py-16 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div data-aos="fade-up">
              <FileText className="w-16 h-16 mx-auto mb-6 text-[#ff0040]" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
                Imprint &{" "}
                <span className="accent-gradient-text">Legal Notice</span>
              </h1>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Hauptdaten Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Anbieterkennzeichnung */}
              <CrayonCard data-aos="fade-up" className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#ff0040]/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#ff0040]" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Anbieterkennzeichnung</h2>
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-medium">
                  Gianni-Finn Grollius
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  Siegener Str. 43
                  <br />
                  57610 Mammelzen
                  <br />
                  Germany
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <CrayonBadge variant="red">§ 5 DDG</CrayonBadge>
                </div>
              </CrayonCard>

              {/* Kontakt Informationen */}
              <CrayonCard data-aos="fade-up" data-aos-delay="100" accentBorder={true} className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#3498db]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#3498db]" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Contact Information</h2>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-[#ff0040] flex-shrink-0" />
                    <span>+49 1512 3380931</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-[#ff0040] flex-shrink-0" />
                    <span>
                    Private:{" "}
                      <a href="mailto:tamashiimon@gmail.com" className="text-[#3498db] hover:underline transition">
                      TamashiiMon@gmail.com
                    </a>
                  </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-[#ff0040] flex-shrink-0" />
                    <span>
                    Project:{" "}
                      <a href="mailto:team@crayonsmp.com" className="text-[#3498db] hover:underline transition">
                      team@crayonsmp.com
                    </a>
                  </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-gray-500 text-xs italic">
                    E-Mail or phone contact is usually the fastest communication path.
                  </p>
                </div>
              </CrayonCard>
            </div>

            {/* Verantwortlich & Streitschlichtung Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Journalischtisch-Redaktionell */}
              <CrayonCard data-aos="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-[#ff0040]" />
                  <h2 className="text-lg font-bold text-white">Editorially Responsible</h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gianni-Finn Grollius
                  <br />
                  <span className="text-gray-500">Germany</span>
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-500">
                  According to § 18 Abs. 2 MStV
                </div>
              </CrayonCard>

              {/* EU Dispute Resolution */}
              <CrayonCard data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-[#ff0040]" />
                  <h2 className="text-lg font-bold text-white">EU Dispute Resolution</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  The European Commission provides a platform for online dispute resolution (ODR):
                </p>
                <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3498db] hover:underline text-sm break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="text-gray-500 text-xs mt-3">
                  We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </CrayonCard>
            </div>

            {/* Rechtliche Hinweise (Haftungsausschlüsse) */}
            <div className="space-y-6 pt-6" data-aos="fade-up">
              <CrayonLegalCard title="Liability for Content">
                <p>
                  As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to Section 7 (1) DDG. However, pursuant to Sections 8 to 10 DDG, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                </p>
                <p>
                  Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such legal violations, we will remove this content immediately.
                </p>
              </CrayonLegalCard>

              <CrayonLegalCard title="Liability for Links">
                <p>
                  Our offering contains links to external third-party websites, the content of which we have no influence over. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
                </p>
                <p>
                  However, a permanent content check of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of legal violations, we will remove such links immediately.
                </p>
              </CrayonLegalCard>

              <CrayonLegalCard title="Copyright">
                <p>
                  The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are permitted only for private, non-commercial use.
                </p>
                <p>
                  Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please notify us accordingly. If we become aware of legal violations, we will remove such content immediately.
                </p>
              </CrayonLegalCard>
            </div>

            {/* Zurück-Button via globalem CrayonButton */}
            <div className="text-center pt-8" data-aos="fade-up">
              <Link to="/">
                <CrayonButton variant="primary" icon={Globe}>
                  Back to Homepage
                </CrayonButton>
              </Link>
            </div>

          </div>
        </main>
      </>
  );
}

export default Imprint;