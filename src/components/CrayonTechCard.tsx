import React from "react";
import { Zap } from "lucide-react";

interface TechCardProps {
    name: string;
    tag: string;
    description: string;
    icon: string;
    url: string;
    pIdx?: number;
}

export const CrayonTechCard: React.FC<TechCardProps> = ({
                                                            name,
                                                            tag,
                                                            description,
                                                            icon,
                                                            url,
                                                            pIdx = 0,
                                                        }) => {
    return (
        <div
            className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#ff0040]/30 hover:shadow-[0_0_30px_rgba(255,0,64,0.05)] group"
            data-aos="fade-up"
            data-aos-delay={pIdx * 50}
        >
            <div>
                <div className="flex justify-between items-center w-full mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/5 p-2 border border-white/10 overflow-hidden shadow-inner flex items-center justify-center">
                        <img
                            src={icon}
                            alt={`${name} icon`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://placehold.co/64x64/1a1a1a/white?text=P";
                            }}
                        />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff0040]/90 bg-[#ff0040]/10 border border-[#ff0040]/20 px-3 py-1 rounded-full">
            {tag}
          </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#ff0040] transition-colors duration-200"
                    >
                        {name}
                    </a>
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 opacity-90">
                    {description}
                </p>
            </div>

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ff0040] uppercase tracking-wider group/link mt-auto w-fit"
            >
                <span>Documentation</span>
                <Zap className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:scale-125 group-hover/link:text-white" />
            </a>
        </div>
    );
};