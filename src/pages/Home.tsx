import { Link } from "react-router-dom";
import {
  Rocket,
  Info,
  Pencil,
  Code2,
  UsersRound,
  Heart,
  Sparkles,
  Blocks,
  Zap,
  Shield,
  Trophy,
  ArrowRight,
} from "lucide-react";

import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonBadge } from ".././components/CrayonBadge.tsx";

import { CrayonSectionHeader } from ".././components/CrayonSectionHeader.tsx";
import { CrayonSplitLayout } from ".././components/CrayonSplitLayout.tsx";
import { CrayonFeatureTag } from ".././components/CrayonFeatureTag.tsx";
import { CrayonTitle } from ".././components/CrayonTitle.tsx";

function Home() {
  return (
      <>
        {/* Hero Section - High Tech / Cyberpunk Alignment */}
        <section className="hero-section relative overflow-hidden min-h-[90vh] flex items-center justify-center py-24 bg-gradient-to-b from-black via-[#060608] to-[#0a0a0f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,64,0.04),transparent_65%)]"></div>
          <div id="particles-js" className="absolute inset-0 z-0 opacity-40"></div>

          <div className="hero-content container mx-auto px-6 relative z-10 text-center">
            <div data-aos="fade-up" className="space-y-8">

              {/* Universeller Season 3 Brand Header eingesetzt */}
              <CrayonTitle size="xl" showSubtitle={true} className="mb-2" />

              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                The Minecraft server where <span className="text-white font-semibold border-b border-[#ff0040]/30 pb-0.5">your creativity</span> directly shapes the world. Design, build, and integrate your own content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a href="https://discord.gg/M2M6m3j2Qf" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <CrayonButton variant="primary" icon={Rocket} className="w-full sm:w-auto px-8 py-4 text-base tracking-wider uppercase font-mono">
                    Join the Adventure
                  </CrayonButton>
                </a>
                <a href="#about" className="w-full sm:w-auto">
                  <CrayonButton variant="secondary" icon={Info} className="w-full sm:w-auto px-8 py-4 text-base tracking-wider uppercase font-mono">
                    Learn More
                  </CrayonButton>
                </a>
              </div>
            </div>
          </div>

          {/* Subtiler Matrix-Border-Abschluss am Ende der Sektion */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>

        <main className="container mt-20 mx-auto px-6 space-y-40 pb-32">

          {/* Features Grid - Matrix Terminal Design */}
          <section className="features-grid-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CrayonCard className="p-6 md:p-8 flex flex-col justify-between group hover:border-[#ff0040]/30 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/5" data-aos="fade-up" data-aos-delay="100">
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-[#ff0040]/5 border border-[#ff0040]/20 group-hover:bg-[#ff0040]/10 transition-colors">
                    <Sparkles className="w-5 h-5 text-[#ff0040]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide font-mono uppercase">// Custom Content</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Create unique items, blocks, and mechanics with NexoMaker.</p>
                </div>
              </CrayonCard>

              <CrayonCard className="p-6 md:p-8 flex flex-col justify-between group hover:border-[#f05689]/30 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/5" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-[#f05689]/5 border border-[#f05689]/20 group-hover:bg-[#f05689]/10 transition-colors">
                    <Blocks className="w-5 h-5 text-[#f05689]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide font-mono uppercase">// Community Driven</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Every player contributes to shaping the server's evolution.</p>
                </div>
              </CrayonCard>

              <CrayonCard className="p-6 md:p-8 flex flex-col justify-between group hover:border-[#9735f2]/30 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/5" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-[#9735f2]/5 border border-[#9735f2]/20 group-hover:bg-[#9735f2]/10 transition-colors">
                    <Zap className="w-5 h-5 text-[#9735f2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide font-mono uppercase">// No Coding</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Easy-to-use tools make content creation accessible to everyone.</p>
                </div>
              </CrayonCard>

              <CrayonCard className="p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 bg-black/40 backdrop-blur-md border-white/5" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Shield className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide font-mono uppercase">// Free Asset Access</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Complete access to NexoMaker for the project's entire lifetime.</p>
                </div>
              </CrayonCard>
            </div>
          </section>

          {/* About Section - Premium Terminal Layout */}
          <section id="about" className="content-section" data-aos="fade-up">
            <CrayonSectionHeader
                icon={Trophy}
                title={<>What is <span className="accent-gradient-text">CrayonSMP 3</span>?</>}
                className="mb-12"
            />
            <CrayonSplitLayout
                media={
                  <div className="relative group p-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl ring-1 ring-white/5">
                    <img src="/media/CrayonBanner.png" alt="CrayonSMP World" className="w-full h-auto object-cover rounded-xl filter brightness-90 group-hover:brightness-100 transition-all duration-500 shadow-2xl" />
                  </div>
                }
            >
              <div className="space-y-6 text-gray-300 font-light">
                <p className="text-lg leading-relaxed">
                  CrayonSMP is more than just a Minecraft server – it’s a world shaped by you. In Season 3, we push past the boundaries of vanilla, stepping <strong className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">Over the horizon</strong> into an era of unprecedented user-generated content.
                </p>
                <p className="text-lg leading-relaxed">
                  The best part: Everyone can create their own content. Using NexoMaker, you can easily add your own custom items, blocks, and furniture directly to the server. No coding skills required – your ideas go straight into the game.
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-[#ff0040]/30 pl-4 italic text-gray-400">
                  Experience a dynamic world that grows every day through the creativity of its community. Don’t just live in the world – help build it!
                </p>
              </div>
            </CrayonSplitLayout>
          </section>

          {/* How it Works Section - Clean Tech Media Container */}
          <section id="how-it-works" className="content-section" data-aos="fade-up">
            <CrayonSectionHeader
                icon={Pencil}
                iconColorClass="text-[#f05689]"
                title={<>Create with <span className="text-[#f05689]">NexoMaker</span></>}
                className="mb-12"
            />
            <CrayonSplitLayout
                reverse={true}
                media={
                  <div className="relative p-1 bg-gradient-to-b from-[#f05689]/20 to-transparent rounded-2xl ring-1 ring-[#f05689]/25">
                    <video src="/media/nexomaker.mp4" className="w-full h-auto rounded-xl shadow-2xl bg-black/60" controls playsInline />
                  </div>
                }
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Unleash your inner game designer! With <strong className="text-[#f05689] font-medium">NexoMaker</strong>, our partner application, you can easily design 3D models, textures, and custom behaviors for items and blocks.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  No complex coding required. Submit your creations, and once approved, see them come alive in the CrayonSMP world.
                </p>
                <p className="text-xs font-mono font-bold tracking-wider uppercase text-[#f05689] bg-[#f05689]/5 border border-[#f05689]/20 px-3 py-2 rounded-lg inline-block">
                  // Access is completely free for the project's lifetime.
                </p>
                <div className="pt-4">
                  <a href="https://www.nexomaker.com/ref/CRAYONSMP" target="_blank" rel="noreferrer">
                    <CrayonButton variant="glow" icon={Pencil} className="font-mono tracking-wider uppercase">Start Creating</CrayonButton>
                  </a>
                </div>
              </div>
            </CrayonSplitLayout>
          </section>

          {/* Partners Section - Sharp Interactive Dashboard Look */}
          <section id="partners" className="content-section" data-aos="fade-up">
            <CrayonSectionHeader
                icon={Sparkles}
                title={<>Our <span className="accent-text">Partners</span></>}
                description="Collaborating with industry leaders to deliver exceptional tools and infrastructure"
                className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://www.nexomaker.com/ref/CRAYONSMP" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="100" className="block group">
                <CrayonCard className="h-full flex flex-col sm:flex-row gap-6 items-start p-6 md:p-8 hover:border-[#ff0040]/40 transition-all duration-300 bg-black/30 backdrop-blur-sm border-white/5 rounded-xl">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-black border border-white/10 flex items-center justify-center p-3 group-hover:border-white/20 transition-colors">
                    <img src="/media/NexoMaker-Logo.png" alt="NexoMaker Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-wide font-mono">NexoMaker</h3>
                      <CrayonBadge variant="red" className="font-mono text-[10px] tracking-wider uppercase">Official Partner</CrayonBadge>
                    </div>
                    <p className="text-[#ff0040] text-xs font-mono font-bold tracking-widest uppercase">// Content Creation Platform</p>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">The official tool for creating custom content for CrayonSMP. Design 3D models, textures, and behaviors without coding.</p>
                  </div>
                </CrayonCard>
              </a>

              <a href="https://bluenet-hosting.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="200" className="block group">
                <CrayonCard className="h-full flex flex-col sm:flex-row gap-6 items-start p-6 md:p-8 hover:border-[#9735f2]/40 transition-all duration-300 bg-black/30 backdrop-blur-sm border-white/5 rounded-xl">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-black border border-white/10 flex items-center justify-center p-3 group-hover:border-white/20 transition-colors">
                    <img src="/media/BlueNetHostingLogo.png" alt="BlueNet Hosting Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-wide font-mono">BlueNet Hosting</h3>
                      <CrayonBadge variant="purple" className="font-mono text-[10px] tracking-wider uppercase">Infrastructure Partner</CrayonBadge>
                    </div>
                    <p className="text-[#9735f2] text-xs font-mono font-bold tracking-widest uppercase">// Server Infrastructure</p>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Providing reliable, low-latency, and powerful server infrastructure to ensure the best gaming experience.</p>
                  </div>
                </CrayonCard>
              </a>
            </div>
          </section>

          {/* The Team Section - Sleek Interactive Focus Card */}
          <section id="the-team" className="content-section" data-aos="fade-up">
            <CrayonSectionHeader
                icon={UsersRound}
                title={<>Meet Our Amazing <span className="accent-text">Team</span></>}
                description="The passionate individuals who bring CrayonSMP to life every day"
                className="mb-12"
            />

            <div className="max-w-3xl mx-auto">
              <CrayonCard accentBorder={true} className="text-center p-8 md:p-14 bg-gradient-to-b from-white/[0.02] to-transparent border-white/5 rounded-2xl relative overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#ff0040]/40 to-transparent"></div>

                <Heart className="w-12 h-12 mx-auto mb-6 text-[#ff0040]/80 drop-shadow-[0_0_10px_rgba(255,0,64,0.3)] animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-wide font-mono uppercase">// Dedicated & Passionate</h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
                  Behind every great community is a dedicated team. From founders and developers to admins and content creators, get to know the people who keep CrayonSMP running smoothly every day.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                  <CrayonFeatureTag icon={Trophy} className="font-mono text-xs uppercase">Leadership</CrayonFeatureTag>
                  <CrayonFeatureTag icon={Code2} className="font-mono text-xs uppercase">Developers</CrayonFeatureTag>
                  <CrayonFeatureTag icon={Shield} className="font-mono text-xs uppercase">Moderation</CrayonFeatureTag>
                </div>

                <div className="flex justify-center">
                  <Link to="/team">
                    <CrayonButton variant="primary" icon={ArrowRight} className="font-mono tracking-wider uppercase px-6">
                      View The Team
                    </CrayonButton>
                  </Link>
                </div>
              </CrayonCard>
            </div>
          </section>

        </main>
      </>
  );
}

export default Home;