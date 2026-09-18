import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Snapshot } from './components/Snapshot';
import { Workflow } from './components/Workflow';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Assignments } from './components/Assignments';
import { Education } from './components/Education';
import { Tools } from './components/Tools';
import { ResumeSection } from './components/ResumeSection';
import { WorkSamples } from './components/WorkSamples';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = [
      'home',
      'snapshot',
      'workflow',
      'about',
      'skills',
      'experience',
      'assignments',
      'education',
      'tools',
      'resume',
      'work-samples',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-slate-800 selection:text-white">
        {/* Sticky Top Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <Snapshot />
          <Workflow />
          <About />
          <Skills />
          <Experience />
          <Assignments />
          <Education />
          <Tools />
          <ResumeSection />
          <WorkSamples />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Back-to-Top Button */}
        <BackToTop />
      </div>
    </ProfilePhotoProvider>
  );
}
