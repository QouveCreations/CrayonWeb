import React from "react";
import type {LucideIcon} from "lucide-react";

interface SectionHeaderProps {
    icon?: LucideIcon;
    iconColorClass?: string;
    title: React.ReactNode;
    description?: string;
    className?: string;
}

export const CrayonSectionHeader: React.FC<SectionHeaderProps> = ({
                                                                      icon: Icon,
                                                                      iconColorClass = "text-[#ff0040]",
                                                                      title,
                                                                      description,
                                                                      className = "",
                                                                  }) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            {Icon && <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColorClass}`} />}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                {title}
            </h2>
            {description && (
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};