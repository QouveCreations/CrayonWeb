import React from "react";

interface CrayonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "glow";

    icon?: React.ComponentType<{ className?: string }>;
    fullWidth?: boolean;
}

export const CrayonButton: React.FC<CrayonButtonProps> = ({
                                                              children,
                                                              variant = "primary",
                                                              icon: Icon,
                                                              fullWidth = false,
                                                              className = "",
                                                              ...props
                                                          }) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#ff0040] hover:bg-[#d00034] text-white shadow-lg shadow-[#ff0040]/20 hover:shadow-[#ff0040]/40 hover:-translate-y-0.5",
        secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20",
        glow: "bg-transparent border-2 border-[#ff0040] text-white shadow-[0_0_15px_rgba(255,0,64,0.2)] hover:shadow-[0_0_25px_rgba(255,0,64,0.6)] hover:bg-[#ff0040] hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
            <span>{children}</span>
        </button>
    );
};