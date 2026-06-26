import React from "react";
import type {LucideIcon} from "lucide-react";

interface SocialLink {
    url: string;
    label: string;
    icon: LucideIcon;
}

interface PersonalCardProps {
    name: string;
    nickname: string;
    role: string;
    image: string;
    quote: string;
    socials: SocialLink[];
    color?: string;
    fallbackBgColor?: string;
    aosDelay?: number;
}

export const CrayonPersonalCard: React.FC<PersonalCardProps> = ({
                                                                    name,
                                                                    nickname,
                                                                    role,
                                                                    image,
                                                                    quote,
                                                                    socials,
                                                                    color = "#ff0040",
                                                                    fallbackBgColor = "4d4848",
                                                                    aosDelay = 0,
                                                                }) => {
    return (
        <div
            className="relative bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] group"
            data-aos="zoom-in"
            data-aos-delay={aosDelay}
        >
            <div
                className="absolute -top-24 w-48 h-48 rounded-full blur-[80px] opacity-10 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none"
                style={{ backgroundColor: color }}
            />

            <span
                className="absolute top-4 right-4 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-md text-white shadow-sm"
                style={{ backgroundColor: color }}
            >
        {role}
      </span>

            <div className="relative mt-4 mb-4">
                <img
                    src={image}
                    alt={`Profile Picture of ${name}`}
                    className="w-24 h-24 rounded-full object-cover border-2 shadow-xl bg-[#1a1a1a]"
                    style={{ borderColor: color }}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/120x120/${fallbackBgColor}/ffffff?text=?`;
                    }}
                />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
            <p className="text-sm text-gray-500 font-mono mt-0.5">@{nickname}</p>

            <div className="w-12 h-[2px] my-4 bg-white/10 rounded-full" style={{ backgroundColor: `${color}33` }} />

            <p className="text-gray-300 text-sm italic leading-relaxed flex-grow max-w-[220px] whitespace-pre-line">
                "{quote}"
            </p>

            {socials.length > 0 && (
                <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-white/5 w-full">
                    {socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            title={social.label}
                            className="p-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                        >
                            <social.icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};