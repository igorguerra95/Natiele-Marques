import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const handleMobileNavClick = (href: string) => {
    setIsDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-10">
          {/* Zona 1: Wordmark em linha única */}
          <a
            href="#inicio"
            className="font-display text-lg font-bold tracking-tight text-foreground whitespace-nowrap shrink-0 transition-colors hover:text-primary"
          >
            {CLINIC_CONTACT.shortBrand}
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação principal única + gatilho do drawer mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-clinical-cta whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover active:scale-[0.98]"
            >
              Entrar em contato
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isDrawerOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground md:hidden transition-colors hover:border-border-strong"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-surface-dark/40 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col justify-between border-l border-border bg-background p-6 shadow-clinical-card"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-display text-base font-bold tracking-tight text-foreground">
                    {CLINIC_CONTACT.shortBrand}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Fechar menu de navegação"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground transition-colors hover:border-border-strong"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <nav
                  aria-label="Navegação móvel"
                  className="mt-6 flex flex-col gap-2"
                >
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNavClick(item.href);
                      }}
                      className="flex min-h-[44px] items-center justify-between rounded-md px-3 py-2.5 font-display text-lg font-medium text-foreground transition-colors hover:bg-surface"
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-border pt-5">
                <p className="mb-3 text-xs text-muted-foreground">
                  {CLINIC_CONTACT.brandName} · {CLINIC_CONTACT.phoneDisplay}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onContactClick();
                  }}
                  className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-clinical-cta transition-colors hover:bg-primary-hover"
                >
                  Entrar em contato
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
