import React from "react";

interface LegalCardProps {
    title: string;
    children: React.ReactNode;
}

export const CrayonLegalCard: React.FC<LegalCardProps> = ({ title, children }) => {
    return (
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 transition-all duration-300 hover:border-white/20">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">
                {title}
            </h3>
            <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4">
                {children}
            </div>
        </div>
    );
};