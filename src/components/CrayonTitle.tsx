import React from "react";

interface CrayonTitleProps {

    size?: "sm" | "md" | "lg" | "xl";
    numberScale?: string;
    showSubtitle?: boolean;
    className?: string;
}

export const CrayonTitle: React.FC<CrayonTitleProps> = ({
                                                            size = "xl",
                                                            numberScale,
                                                            showSubtitle = true,
                                                            className = "",
                                                        }) => {
    const titleSizes = {
        sm: "text-xl",
        md: "text-2xl sm:text-3xl md:text-4xl",
        lg: "text-4xl sm:text-5xl md:text-6xl",
        xl: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
    };

    const subtitleStyles = {
        sm: "text-[9px] tracking-[0.2em] mt-0.5",
        md: "text-[11px] sm:text-xs tracking-[0.3em] mt-1.5",
        lg: "text-xs sm:text-sm tracking-[0.35em] mt-3",
        xl: "text-xs sm:text-sm md:text-base tracking-[0.4em] mt-5",
    };

    const defaultNumberScales = {
        sm: "scale-105 ml-1",
        md: "scale-110 ml-1.5",
        lg: "scale-115 ml-2 animate-pulse",
        xl: "scale-125 ml-3 animate-pulse",
    };

    const activeScale = numberScale || defaultNumberScales[size];
    const isCentered = size === "lg" || size === "xl";

    return (
        <div
            className={`flex flex-col select-none ${
                isCentered ? "items-center justify-center text-center" : "items-start"
            } ${className}`}
        >
            <h1 className={`font-black tracking-tighter text-white uppercase relative leading-none ${titleSizes[size]}`}>
                Crayon<span className="accent-gradient-text">SMP</span>

                <span
                    className={`inline-block text-[#ff0040] italic transform origin-bottom-left -rotate-12 font-black drop-shadow-[0_0_15px_rgba(255,0,64,0.6)] ${activeScale}`}
                >
          3
        </span>
            </h1>

            {showSubtitle && (
                <p
                    className={`font-mono font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 opacity-90 ${subtitleStyles[size]}`}
                >
                    // Over the horizon
                </p>
            )}
        </div>
    );
};