import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Rocket,
  Code2,
  Shield,
  Trophy,
  UsersRound,
  Code,
} from "lucide-react";
// Neu importieren:
import { CrayonTitle } from ".././components/CrayonTitle.tsx";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
      <nav className="navbar backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="navbar-content">

            {/* Logo mit neuem, kompakten CrayonSMP 3 Titel */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img
                  src="https://crayonsmp.com/logo.png"
                  alt="CrayonSMP Logo"
                  className="navbar-logo-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                        "https://placehold.co/40x40/1e1e1e/e0e0e0?text=C";
                  }}
              />
              {/* Kompakter Titel ohne pulsieren und ohne Inline-Subtitle */}
              <CrayonTitle size="md" showSubtitle={false} numberScale="scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-links">
              <Link to="/rules" className="navbar-link">
                <Shield className="w-4 h-4" />
                <span>Rules</span>
              </Link>
              <Link to="/changelog" className="navbar-link">
                <Code className="w-4 h-4" />
                <span>Changelog</span>
              </Link>
              <Link to="/technology" className="navbar-link">
                <Code2 className="w-4 h-4" />
                <span>Tech</span>
              </Link>
              <Link to="/pioneers" className="navbar-link">
                <Trophy className="w-4 h-4" />
                <span>Pioneers</span>
              </Link>
              <Link to="/team" className="navbar-link">
                <UsersRound className="w-4 h-4" />
                <span>Team</span>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="navbar-cta">
              <a
                  href="https://discord.gg/M2M6m3j2Qf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button primary"
              >
                <Rocket className="w-4 h-4" />
                <span>Join Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="navbar-mobile-toggle"
                aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
              ) : (
                  <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
              <div className="navbar-mobile-menu">
                <Link to="/rules" onClick={closeMobileMenu} className="navbar-mobile-link">
                  <Shield className="w-5 h-5" />
                  <span>Rules</span>
                </Link>
                <Link to="/changelog" onClick={closeMobileMenu} className="navbar-mobile-link">
                  <Code className="w-5 h-5" />
                  <span>Changelog</span>
                </Link>
                <Link to="/technology" onClick={closeMobileMenu} className="navbar-mobile-link">
                  <Code2 className="w-5 h-5" />
                  <span>Tech</span>
                </Link>
                <Link to="/pioneers" onClick={closeMobileMenu} className="navbar-mobile-link">
                  <Trophy className="w-5 h-5" />
                  <span>Pioneers</span>
                </Link>
                <Link to="/team" onClick={closeMobileMenu} className="navbar-mobile-link">
                  <UsersRound className="w-5 h-5" />
                  <span>Team</span>
                </Link>

                {/* Slogan-Detail in der mobilen Ansicht[cite: 12] */}
                <div className="text-center pt-4 pb-2 text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500 select-none">
                  // Over the horizon[cite: 12]
                </div>

                <a
                    href="https://discord.gg/M2M6m3j2Qf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button primary w-full mt-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Join Now</span>
                </a>
              </div>
          )}
        </div>
      </nav>
  );
}

export default Header;