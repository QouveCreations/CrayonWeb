import React from "react";

interface CrayonCardProps {
    children: React.ReactNode;
    hoverEffect?: boolean;
    accentBorder?: boolean;
    className?: string;
}

export const CrayonCard: React.FC<CrayonCardProps> = ({
                                                          children,
                                                          hoverEffect = true,
                                                          accentBorder = false,
                                                          className = "",
                                                      }) => {
    return (
        <div
            className={`
        bg-[#1e1e1e] border rounded-2xl p-6 transition-all duration-300
        ${accentBorder ? "border-[#ff0040]/50" : "border-white/10"}
        ${hoverEffect ? "hover:border-[#ff0040]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
};