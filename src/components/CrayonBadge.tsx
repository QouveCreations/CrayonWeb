import React from "react";

interface CrayonBadgeProps {
    children: React.ReactNode;
    variant?: "red" | "pink" | "purple" | "gray";
    pulse?: boolean;
    className?: string;
}

export const CrayonBadge: React.FC<CrayonBadgeProps> = ({
                                                            children,
                                                            variant = "red",
                                                            pulse = false,
                                                            className = "",
                                                        }) => {
    const variants = {
        red: "bg-[#ff0040]/10 text-[#ff0040] border-transparent",
        pink: "bg-[#f05689]/10 text-[#f05689] border-transparent",
        purple: "bg-[#9735f2]/10 text-[#9735f2] border-transparent",
        gray: "bg-white/5 text-gray-400 border-white/10",
    };

    return (
        <span
            className={`
        inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded border text-center
        ${variants[variant]}
        ${className}
      `}
        >
      {pulse && (
          <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${variant === "gray" ? "bg-white" : variant === "red" ? "bg-[#ff0040]" : variant === "pink" ? "bg-[#f05689]" : "bg-[#9735f2]"}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${variant === "gray" ? "bg-gray-400" : variant === "red" ? "bg-[#ff0040]" : variant === "pink" ? "bg-[#f05689]" : "bg-[#9735f2]"}`}></span>
        </span>
      )}
            {children}
    </span>
    );
};