import React from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold tracking-tight text-foreground">
              {CLINIC_CONTACT.brandName}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Fisioterapia clínica, reabilitação ortopédica, RPG, Pilates
              clínico e massoterapia terapêutica com atendimento individualizado.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-foreground">Navegação</p>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:text-sm">
              <li>
                <a
                  href="#inicio"
                  className="transition-colors hover:text-foreground"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#especialidades"
                  className="transition-colors hover:text-foreground"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="transition-colors hover:text-foreground"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="transition-colors hover:text-foreground"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-foreground">
              Informações da Clínica
            </p>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:text-sm">
              <li>Endereço: {CLINIC_CONTACT.address}</li>
              <li>
                Telefone:{' '}
                <a
                  href={CLINIC_CONTACT.phoneHref}
                  className="tabular-nums transition-colors hover:text-foreground"
                >
                  {CLINIC_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>Horário: {CLINIC_CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {currentYear} {CLINIC_CONTACT.brandName}. Todos os direitos
            reservados.
          </p>
          <p>Fisioterapia Clínica e Saúde Corporal</p>
        </div>
      </div>
    </footer>
  );
}
