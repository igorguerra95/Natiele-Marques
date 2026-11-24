import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={CLINIC_CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Entrar em contato pelo WhatsApp ${CLINIC_CONTACT.phoneDisplay}`}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-clinical-cta transition-transform duration-200 hover:scale-105 hover:bg-primary-hover focus-visible:scale-105"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary/35 motion-safe:animate-ping"
          style={{ animationDuration: '2.8s' }}
        />
        <MessageCircle
          className="relative h-5 w-5 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
