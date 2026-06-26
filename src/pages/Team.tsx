import { MessageCircle, Shield, Code, Users } from "lucide-react";

// Import deiner Design-System & Layout-Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonSectionHeader } from ".././components/CrayonSectionHeader.tsx";
import { CrayonPersonalCard } from ".././components/CrayonPersonalCard.tsx";

interface TeamMember {
  name: string;
  nickname: string;
  role: string;
  image: string;
  quote: string;
  color: string;
}

function Team() {
  // Administration Array mit aktualisierten Daten & sauberen Nicknames
  const admins = [
    {
      name: "Tamashii",
      nickname: "tamashiimon",
      role: "Creator", // Aktualisiert gemäß Teamanpassungen
      image: "/media/team-pf/tamashii.png",
      quote: "I love making things that do not exist.",
      color: "#ff0040",
    },
    {
      name: "Qeonix",
      nickname: "qeonix__",
      role: "Founder",
      image: "/media/team-pf/jonathan.png",
      quote: "n/a",
      color: "#ff0040",
    },
    {
      name: "Fotrapsy",
      nickname: "fotrapsy",
      role: "Hidden Admin",
      image: "/media/team-pf/fotrapsy.png",
      quote: "There is not enough stupid in the world to describe me.",
      color: "#f05689",
    },
    {
      name: "Karma (Keramik)",
      nickname: "karma_2121",
      role: "Hidden Admin",
      image: "/media/team-pf/karma.png",
      quote: "I'd be eely surprised to see you",
      color: "#f05689",
    },
  ];

  // Für zukünftige Teammitglieder vorbereitet
  const team: TeamMember[] = [];

  return (
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[45vh] flex items-center justify-center py-20 bg-gradient-to-b from-black/40 to-transparent">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div data-aos="fade-down">
              <Users className="w-16 h-16 mx-auto mb-4 text-[#ff0040]" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight">
                Meet the <span className="accent-gradient-text">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                The passionate individuals behind CrayonSMP, dedicated to creating
                an exceptional gaming experience for our community.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 space-y-28">
          {/* Administration Section */}
          <section id="administration">
            <CrayonSectionHeader
                icon={Shield}
                iconColorClass="text-[#ff0040]"
                title="Administration"
                description="Leadership team managing and developing CrayonSMP"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {admins.map((member, index) => (
                  <CrayonPersonalCard
                      key={member.nickname}
                      name={member.name}
                      nickname={member.nickname}
                      role={member.role}
                      image={member.image}
                      quote={member.quote}
                      socials={[]} // Leeres Array, falls keine Links gepflegt sind (Kompensation im Component-Inneren)
                      color={member.color}
                      fallbackBgColor="ff0040"
                      aosDelay={index * 100}
                  />
              ))}
            </div>
          </section>

          {/* Regular Team Members Section */}
          {team.length > 0 && (
              <section id="team-members">
                <CrayonSectionHeader
                    icon={Code}
                    iconColorClass="text-[#75ebee]"
                    title="Team Members"
                    description="Talented contributors making it all possible"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {team.map((member, index) => (
                      <CrayonPersonalCard
                          key={member.nickname}
                          name={member.name}
                          nickname={member.nickname}
                          role={member.role}
                          image={member.image}
                          quote={member.quote}
                          socials={[]}
                          color={member.color}
                          fallbackBgColor="75ebee"
                          aosDelay={index * 100}
                      />
                  ))}
                </div>
              </section>
          )}

          {/* Bewerbungs CTA */}
          <section id="join-team" className="max-w-4xl mx-auto">
            <CrayonCard
                accentBorder={true}
                className="text-center p-8 md:p-12"
                data-aos="fade-up"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                Become Part of the Team!
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Interested in supporting CrayonSMP? Visit our Discord server to
                apply or share your ideas with us!
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

export default Team;