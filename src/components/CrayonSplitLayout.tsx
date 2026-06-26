import React from "react";

interface SplitLayoutProps {
  media: React.ReactNode;     // Das <img> oder <video> Element
  children: React.ReactNode;  // Der Text-Inhalt (Absätze, Buttons, etc.)
  reverse?: boolean;          // Wenn true, wandert Media auf großen Bildschirmen nach rechts (lg:order-2)
  mediaDelay?: string;        // AOS Delay für die Media-Spalte
}

export const CrayonSplitLayout: React.FC<SplitLayoutProps> = ({
  media,
  children,
  reverse = false,
  mediaDelay = "200",
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div
        data-aos="zoom-in"
        data-aos-delay={mediaDelay}
        className={reverse ? "lg:order-2" : ""}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5">
          {media}
        </div>
      </div>

      <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
        {children}
      </div>
    </div>
  );
};