import { Shield, ScrollText, Palette } from "lucide-react";
import { serverRules, participationTerms } from "../data/rules";

// Import deines Design-Systems
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonSectionHeader } from ".././components/CrayonSectionHeader.tsx";
import { CrayonRuleCard } from ".././components/CrayonRuleCard.tsx"; // Neue Universal-Komponente

function Rules() {
  return (
      <>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[40vh] flex items-center justify-center py-16 bg-gradient-to-b from-black/40 to-transparent">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div data-aos="fade-up">
              <Shield className="w-16 h-16 mx-auto mb-6 text-[#ff0040]" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
                Community <span className="accent-gradient-text">Guidelines</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Creating a safe, creative, and respectful environment for everyone
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 mb-24 space-y-24">

          {/* Server Rules Section */}
          <section id="server-rules">
            <CrayonSectionHeader
                icon={ScrollText}
                iconColorClass="text-[#ff0040]"
                title="Server Rules"
                description="Please follow these rules to ensure a positive experience for all players."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {serverRules.map((rule, index) => (
                  <CrayonRuleCard
                      key={index}
                      number={rule.number}
                      title={rule.title}
                      description={rule.description}
                      accentColor="#ff0040"
                      aosDelay={100 + index * 50}
                  />
              ))}
            </div>
          </section>

          {/* Participation Terms Section */}
          <section id="terms">
            <CrayonSectionHeader
                icon={Shield}
                iconColorClass="text-[#3498db]"
                title="Participation Terms"
                description="Legal requirements and conditions for participating in CrayonSMP."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {participationTerms.map((term, index) => (
                  <CrayonRuleCard
                      key={index}
                      number={term.number}
                      title={term.title}
                      description={term.description}
                      accentColor="#3498db"
                      aosDelay={100 + index * 50}
                  />
              ))}
            </div>
          </section>

          {/* Full Documentation Box (GitHub-Verlinkung) */}
          <section id="documentation" className="max-w-4xl mx-auto pt-6">
            <CrayonCard
                className="text-center p-8 md:p-12"
                data-aos="fade-up"
            >
              <Palette className="w-10 h-10 mx-auto mb-4 text-[#ff0040]" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">
                Detailed Content Documentation
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                For a full breakdown of technical requirements, asset licensing, and
                submission guidelines, please refer to our official documentation.
              </p>
              <div className="flex justify-center">
                <a
                    href="https://github.com/CrayonSMP/.github/blob/main/content-rules.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <CrayonButton variant="primary" icon={ScrollText}>
                    View Full Content Rules on GitHub
                  </CrayonButton>
                </a>
              </div>
            </CrayonCard>
          </section>

        </main>
      </>
  );
}

export default Rules;