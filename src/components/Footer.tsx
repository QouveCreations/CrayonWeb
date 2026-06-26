import { Link } from "react-router-dom";
import {
  Github,
  FileText,
  Shield,
  Activity,
  Heart,
  Home,
  Users,
  Trophy,
  Pencil,
  FileIcon,
  Code,
  Youtube,
  Instagram,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import { CrayonTitle } from ".././components/CrayonTitle.tsx";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="footer bg-[#040406] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-white/5">

            <div className="md:col-span-4 space-y-4" data-aos="fade-up">
              <CrayonTitle size="sm" showSubtitle={false} numberScale="scale-105" />
              <p className="text-gray-400 text-sm font-light tracking-wide pt-1">
                Where creativity meets innovation.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                    href="https://github.com/CrayonSMP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                    aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                    href="https://discord.gg/M2M6m3j2Qf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 transition-all"
                    aria-label="Discord"
                >
                  <BsDiscord className="w-4 h-4" />
                </a>
                <a
                    href="https://www.youtube.com/@CrayonSMP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 transition-all"
                    aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                    href="https://www.instagram.com/crayon_smp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 transition-all"
                    aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-300">// Quick Links</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <Link to="/#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Home className="w-3.5 h-3.5 text-gray-500" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Users className="w-3.5 h-3.5 text-gray-500" /> Team
                  </Link>
                </li>
                <li>
                  <Link to="/pioneers" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Trophy className="w-3.5 h-3.5 text-gray-500" /> Pioneers
                  </Link>
                </li>
                <li>
                  <Link to="/rules" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Shield className="w-3.5 h-3.5 text-gray-500" /> Rules
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Code className="w-3.5 h-3.5 text-gray-500" /> Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-4" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-300">// Resources</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <a href="https://github.com/CrayonSMP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-3.5 h-3.5 text-gray-500" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://nexomaker.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Pencil className="w-3.5 h-3.5 text-gray-500" /> NexoMaker
                  </a>
                </li>
                <li>
                  <a href="https://stats.uptimerobot.com/kzouirisYX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Activity className="w-3.5 h-3.5 text-gray-500" /> Server Status
                  </a>
                </li>
                <li>
                  <Link to="/assets" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <FileIcon className="w-3.5 h-3.5 text-gray-500" /> Assets
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-300">// Legal</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <Link to="/imprint" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <FileText className="w-3.5 h-3.5 text-gray-500" /> Imprint
                  </Link>
                </li>
                <li>
                  <Link to="/rules#terms" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Shield className="w-3.5 h-3.5 text-gray-500" /> Terms
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono tracking-wider text-gray-300">
            <p>© {currentYear} "QouveCreations". All rights reserved.</p>
            <p className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-md text-gray-300">
              <Heart className="w-3.5 h-3.5 text-[#ff0040] drop-shadow-[0_0_6px_rgba(255,0,64,0.4)]" />
              <span>Built by the <span className="text-white font-medium">community</span> for the community</span>
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;