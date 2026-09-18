import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Linkedin, Mail, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Assignments', href: '#assignments' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Work Samples', href: '#work-samples' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/95 text-white backdrop-blur-md shadow-md border-b border-slate-800'
          : 'bg-slate-900 text-white border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo / Professional Headline */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-serif text-lg font-bold text-amber-300 tracking-wider shadow-inner group-hover:border-amber-400/60 transition-colors">
              PJS
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold tracking-wider text-slate-100 uppercase group-hover:text-amber-200 transition-colors">
                {personalInfo.name}
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase font-medium">
                Accounting & Audit
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-amber-300 shadow-sm border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              id="nav-linkedin-btn"
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              title="Connect on LinkedIn: www.linkedin.com/in/pavithra-jothiprakash-07ba922b9"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              id="nav-resume-btn"
              href={personalInfo.resumeUrl}
              download="Pavithra-J-S-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </a>

            <a
              id="nav-contact-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-300 hover:bg-amber-400 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Mail className="w-3.5 h-3.5 text-slate-900" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Pavithra-J-S-Resume.pdf"
              className="sm:hidden p-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-md"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 border border-slate-700/60"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 backdrop-blur-lg shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="py-2 px-3 mb-2 bg-slate-800/80 rounded-md border border-slate-700/80 flex items-center justify-between">
            <span className="text-xs text-slate-300">Status</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              <Shield className="w-3 h-3" />
              CA Intermediate Ongoing
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-amber-300 border-l-2 border-amber-400'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Pavithra-J-S-Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-md"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
