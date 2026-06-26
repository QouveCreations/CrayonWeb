import { MessageCircle, Star, Sparkles, Users } from "lucide-react";
import { contentCreators, members, sponsors } from "../data/pioneers";

// Import der Design-System & Layout-Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonSectionHeader } from ".././components/CrayonSectionHeader.tsx";
import { CrayonPersonalCard } from ".././components/CrayonPersonalCard.tsx"; // Neue Universal-Card

function Pioneers() {
  return (
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[45vh] flex items-center justify-center py-20 bg-gradient-to-b from-black/40 to-transparent">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div data-aos="fade-down">
              <Star className="w-16 h-16 mx-auto mb-4 text-[#f05689]" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight">
                Our <span className="accent-gradient-text">Pioneers</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                The trailblazers and content creators who help shape and grow the
                CrayonSMP community.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 space-y-28">

          {/* Content Creators Section */}
          <section id="content-creators">
            <CrayonSectionHeader
                icon={Sparkles}
                iconColorClass="text-[#9735f2]"
                title="Content Creators"
                description="Streamers bringing CrayonSMP to audiences worldwide"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentCreators.map((member, index) => (
                  <CrayonPersonalCard
                      key={member.nickname}
                      name={member.name}
                      nickname={member.nickname}
                      role={member.role}
                      image={member.image}
                      quote={member.quote}
                      socials={member.socials}
                      color={member.color}
                      fallbackBgColor="9735f2"
                      aosDelay={index * 100}
                  />
              ))}
            </div>
          </section>

          {/* Community Section */}
          <section id="community">
            <CrayonSectionHeader
                icon={Users}
                iconColorClass="text-[#FF0040]"
                title="Community"
                description="Players and staff members enjoying the server"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                  <CrayonPersonalCard
                      key={member.nickname}
                      name={member.name}
                      nickname={member.nickname}
                      role={member.role}
                      image={member.image}
                      quote={member.quote}
                      socials={member.socials}
                      color={member.color}
                      fallbackBgColor="4d4848"
                      aosDelay={index * 100}
                  />
              ))}
            </div>
          </section>

          {/* Sponsors Section */}
          <section id="sponsors">
            <CrayonSectionHeader
                icon={Star}
                iconColorClass="text-[#3498db]"
                title="Sponsors & Partners"
                description="Supporting CrayonSMP's growth and development"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsors.map((member, index) => (
                  <CrayonPersonalCard
                      key={member.nickname}
                      name={member.name}
                      nickname={member.nickname}
                      role={member.role}
                      image={member.image}
                      quote={member.quote}
                      socials={member.socials}
                      color={member.color}
                      fallbackBgColor="3498db"
                      aosDelay={index * 100}
                  />
              ))}
            </div>
          </section>

          {/* Bewerbungs- / Join CTA */}
          <section id="join-cta" className="max-w-4xl mx-auto">
            <CrayonCard
                accentBorder={true}
                className="text-center p-8 md:p-12"
                data-aos="fade-up"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#f05689]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                Become Part of the Project!
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Interested to join CrayonSMP? Then send us an application on our
                Discord server!
              </p>
              <div className="flex justify-center">
                <a href="https://discord.gg/M2M6m3j2Qf" target="_blank" rel="noreferrer">
                  <CrayonButton variant="primary" icon={MessageCircle}>
                    Join Discord
                  </CrayonButton>
                </a>
              </div>
            </CrayonCard>
          </section>

        </div>
      </main>
  );
}

export default Pioneers;