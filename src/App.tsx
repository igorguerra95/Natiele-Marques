import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutAndTestimonialsSection } from './components/AboutAndTestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { SPECIALTIES } from './data/clinicData';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    SPECIALTIES[0].title,
  );

  const scrollToContact = (specialtyTitle?: string) => {
    if (specialtyTitle) {
      setSelectedSpecialty(specialtyTitle);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Navbar onContactClick={() => scrollToContact()} />

        <main>
          <HeroSection onContactClick={() => scrollToContact()} />
          <SpecialtiesSection
            onSelectSpecialty={(title) => scrollToContact(title)}
          />
          <AboutAndTestimonialsSection
            onContactClick={() => scrollToContact()}
          />
          <ContactSection preselectedSpecialty={selectedSpecialty} />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
