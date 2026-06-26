import React from "react";
import type {LucideIcon} from "lucide-react";

interface FeatureTagProps {
    icon: LucideIcon;
    iconColorClass?: string;
    children: React.ReactNode;
}

export const CrayonFeatureTag: React.FC<FeatureTagProps> = ({
                                                                icon: Icon,
                                                                iconColorClass = "text-[#ff0040]",
                                                                children,
                                                            }) => {
    return (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl transition-colors duration-300 hover:bg-white/10">
            <Icon className={`w-5 h-5 ${iconColorClass}`} />
            <span className="font-medium text-sm text-gray-200">{children}</span>
        </div>
    );
};