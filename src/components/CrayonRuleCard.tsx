import React from "react";

interface RuleCardProps {
    number: string | number;
    title: string;
    description: string;
    accentColor?: string;
    aosDelay?: number;
}

export const CrayonRuleCard: React.FC<RuleCardProps> = ({
                                                            number,
                                                            title,
                                                            description,
                                                            accentColor = "#ff0040",
                                                            aosDelay = 0,
                                                        }) => {
    return (
        <div
            className="relative bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-white/20 group"
            data-aos="fade-up"
            data-aos-delay={aosDelay}
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white tracking-tight mt-1 group-hover:text-white/90 transition-colors">
                    {title}
                </h3>

                <div
                    className="text-sm font-mono font-bold px-3 py-1 rounded-lg border flex-shrink-0"
                    style={{
                        backgroundColor: `${accentColor}15`,
                        borderColor: `${accentColor}33`,
                        color: accentColor,
                    }}
                >
                    {number}
                </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};