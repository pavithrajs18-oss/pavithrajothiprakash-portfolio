import React, { useState } from 'react';
import {
  FileText,
  Briefcase,
  Linkedin,
  Download,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { personalInfo, heroIntro } from '../data/portfolioData';
import pavithraPhotoAsset from '../assets/images/pavithra_photo_1788557259340.jpg';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export const Hero: React.FC = () => {
  const { photoUrl } = useProfilePhoto();
  const [imageError, setImageError] = useState(false);

  // Reset error if photoUrl updates
  React.useEffect(() => {
    setImageError(false);
  }, [photoUrl]);

  const currentPhoto = photoUrl || pavithraPhotoAsset || personalInfo.profilePhotoUrl;

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800"
    >
      {/* Subtle grid pattern background for analytical finance feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Professional Details */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                CA Intermediate Candidate · ICAI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                B.Com Graduate · M.Com Student
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-semibold tracking-wider text-amber-300 uppercase">
                {personalInfo.headline}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide text-slate-400 uppercase">
                {personalInfo.positioning}
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {heroIntro}
            </p>

            {/* Location & Quick Contact */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {personalInfo.location}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                {personalInfo.email}
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                {personalInfo.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                id="hero-view-experience-btn"
                onClick={() => scrollTo('#experience')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View My Experience</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-view-assignments-btn"
                onClick={() => scrollTo('#assignments')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View My Assignments</span>
              </button>

              {/* LinkedIn CTA */}
              <a
                id="hero-linkedin-btn"
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                title="Connect on LinkedIn: www.linkedin.com/in/pavithra-jothiprakash-07ba922b9"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              {/* Resume Section Link */}
              <button
                id="hero-view-resume-btn"
                onClick={() => scrollTo('#resume')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 rounded-lg transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Resume</span>
              </button>

              {/* Download Resume Button */}
              <a
                id="hero-download-resume-btn"
                href={personalInfo.resumeUrl}
                download="Pavithra-J-S-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 bg-transparent hover:bg-slate-800/80 border border-slate-700 rounded-lg transition-all"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-slate-700/30 to-blue-600/20 blur-sm" />

              {/* Main portrait frame */}
              <div className="relative w-64 h-76 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl bg-slate-800 border-2 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Photo or Fallback */}
                <div className="relative w-full flex-1 bg-slate-900 flex items-center justify-center overflow-hidden group">
                  {!imageError ? (
                    <img
                      src={currentPhoto}
                      alt="Pavithra J S - Accounting & Audit Professional"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    /* Dignified fallback when photo is loading or updated */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-800 to-slate-900">
                      <div className="w-24 h-24 rounded-full bg-slate-700 border-2 border-amber-400/40 flex items-center justify-center mb-4 shadow-inner">
                        <span className="font-serif text-3xl font-bold text-amber-300 tracking-wider">
                          PJS
                        </span>
                      </div>
                      <div className="text-base font-bold text-slate-200">PAVITHRA J S</div>
                      <div className="text-xs text-amber-400 mt-0.5 font-medium">CA Intermediate Candidate</div>
                      <div className="text-[11px] text-slate-400 mt-2 max-w-[200px] leading-snug">
                        Accounting & Audit Professional
                      </div>
                    </div>
                  )}

                  {/* Subtle status overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/80 flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider truncate">
                        Pavithra J S
                      </div>
                      <div className="text-[10px] text-slate-300 truncate">
                        Singarapettai · Open for Opportunities
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Verified Profile</span>
                  </span>
                  <span className="text-amber-300 font-semibold">ICAI Student</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
