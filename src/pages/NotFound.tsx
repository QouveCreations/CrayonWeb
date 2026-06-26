import { Link } from "react-router-dom";
import { Ghost, Home } from "lucide-react";

// Import deiner Design-System Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";

function NotFound() {
    return (
        <main className="min-h-[75vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
            {/* Subtiler Glow-Effekt im Hintergrund für die Matrix/Cyberpunk-Atmosphäre */}
            <div className="absolute w-72 h-72 rounded-full bg-[#ff0040]/5 blur-[100px] pointer-events-none" />

            <div className="w-full max-w-md" data-aos="zoom-in">
                <CrayonCard accentBorder={true} className="p-8 md:p-12 text-center">
                    {/* Geist-Icon als visuelles Highlight */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#ff0040]/10 flex items-center justify-center border border-[#ff0040]/25 animate-pulse">
                        <Ghost className="w-8 h-8 text-[#ff0040]" />
                    </div>

                    {/* Großer Error Code */}
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-2">
                        404
                    </h1>

                    {/* Akzentuierter Gradient-Trennstrich */}
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#ff0040] to-[#f05689] mx-auto mb-6 rounded-full" />

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                        Page Not Found
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Zurück-Button via Design-System */}
                    <div className="flex justify-center">
                        <Link to="/">
                            <CrayonButton variant="primary" icon={Home}>
                                Back to Homepage
                            </CrayonButton>
                        </Link>
                    </div>
                </CrayonCard>
            </div>
        </main>
    );
}

export default NotFound;