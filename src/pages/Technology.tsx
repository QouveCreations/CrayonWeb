import { Code2, Github } from "lucide-react";
import { categories } from "../data/plugins";

// Import deiner Design-System Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonSectionHeader } from ".././components/CrayonSectionHeader.tsx";
import { CrayonTechCard } from ".././components/CrayonTechCard.tsx";

function Technology() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center justify-center py-16 bg-gradient-to-b from-black/40 to-transparent">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div data-aos="fade-up">
                        <Code2 className="w-16 h-16 mx-auto mb-6 text-[#ff0040]" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">
                            Our <span className="accent-gradient-text">Tech Stack</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Discover the innovation powering CrayonSMP. We leverage advanced
                            plugin architecture to deliver a modded experience on a vanilla client.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 space-y-24">
                {/* Dynamische Plugin-Kategorien */}
                {categories.map((category, idx) => (
                    <section key={idx} id={`category-${idx}`}>
                        <CrayonSectionHeader
                            icon={category.icon}
                            iconColorClass="text-[#ff0040]"
                            title={category.title}
                            description={category.description}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {category.plugins.map((plugin, pIdx) => (
                                <CrayonTechCard
                                    key={pIdx}
                                    name={plugin.name}
                                    tag={plugin.tag}
                                    description={plugin.description}
                                    icon={plugin.icon}
                                    url={plugin.url}
                                    pIdx={pIdx}
                                />
                            ))}
                        </div>
                    </section>
                ))}

                {/* Open Source / Developer Section */}
                <section id="developers" className="max-w-4xl mx-auto pt-6">
                    <CrayonSectionHeader
                        icon={Code2}
                        iconColorClass="text-[#ff0040]"
                        title="Calling All Developers!"
                        description="Join our open-source community and help shape the framework's future."
                    />

                    <div className="mt-8">
                        <CrayonCard
                            accentBorder={true}
                            className="p-8 md:p-12 text-center"
                            data-aos="zoom-in"
                        >
                            <Github className="w-14 h-14 mx-auto mb-6 text-[#ff0040]" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">
                                Contribute to CrayonSMP Systems
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                Passionate about Java, system structures, and expanding gameplay borders?
                                Help us build amazing features, squash packets bugs, or optimize performance.
                                Our <strong className="text-[#ff0040] font-mono">CrayonDefault</strong> repository is open for your pull requests!
                            </p>

                            {/* Technische Status-Indikatoren */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left font-mono">
                                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                                    <div className="text-white font-bold text-base">Open Source</div>
                                    <div className="text-gray-500 text-xs mt-0.5">100% Public</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                                    <div className="text-white font-bold text-base">Java</div>
                                    <div className="text-gray-500 text-xs mt-0.5">Core Language</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                                    <div className="text-white font-bold text-base">Active</div>
                                    <div className="text-gray-500 text-xs mt-0.5">Development</div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <a
                                    href="https://github.com/CrayonSMP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CrayonButton variant="primary" icon={Github}>
                                        View on GitHub
                                    </CrayonButton>
                                </a>
                            </div>
                        </CrayonCard>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Technology;