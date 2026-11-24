import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_CONTACT, SPECIALTIES } from '../data/clinicData';

interface ContactSectionProps {
  preselectedSpecialty: string;
}

interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  specialty: string;
  preferredPeriod: string;
  preferredDate: string;
  notes: string;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ preselectedSpecialty }: ContactSectionProps) {
  const [formState, setFormState] = useState<BookingFormState>({
    name: '',
    phone: '',
    email: '',
    specialty: preselectedSpecialty || SPECIALTIES[0].title,
    preferredPeriod: 'Manhã',
    preferredDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormState, string>>
  >({});
  const [submittedBooking, setSubmittedBooking] =
    useState<BookingFormState | null>(null);

  useEffect(() => {
    if (preselectedSpecialty) {
      setFormState((prev) => ({ ...prev, specialty: preselectedSpecialty }));
      setSubmittedBooking(null);
    }
  }, [preselectedSpecialty]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof BookingFormState, string>> = {};
    const phoneDigits = formState.phone.replace(/\D/g, '');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formState.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo para o prontuário.';
    }
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }
    if (!emailPattern.test(formState.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }
    if (!formState.specialty) {
      nextErrors.specialty = 'Selecione a especialidade desejada.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedBooking(formState);
  };

  const buildWhatsappSummaryHref = (booking: BookingFormState): string => {
    const dateSegment = booking.preferredDate
      ? `Data sugerida: ${booking.preferredDate}. `
      : '';
    const notesSegment = booking.notes.trim()
      ? `Queixa principal: ${booking.notes.trim()}.`
      : '';

    const message = `Olá, gostaria de entrar em contato para agendamento na ${CLINIC_CONTACT.brandName}. Nome: ${booking.name}. Telefone: ${booking.phone}. Especialidade: ${booking.specialty}. Turno preferencial: ${booking.preferredPeriod}. ${dateSegment}${notesSegment}`;
    return `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contato"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda: Informações Institucionais e Canais Diretos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                Contato e Agendamento Online
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Inicie sua avaliação clínica personalizada
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Preencha o pré-agendamento ao lado com a especialidade de
                interesse ou utilize nossos canais diretos para confirmar
                disponibilidade de agenda.
              </p>

              {/* Lista Estruturada de Dados de Contato */}
              <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-surface-elevated">
                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-primary">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Endereço do Consultório
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {CLINIC_CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Telefone e WhatsApp
                    </p>
                    <a
                      href={CLINIC_CONTACT.phoneHref}
                      className="mt-1 inline-block font-display text-base font-bold tabular-nums text-foreground transition-colors hover:text-primary"
                    >
                      {CLINIC_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-primary">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Horário de Atendimento
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {CLINIC_CONTACT.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-surface p-6">
              <p className="font-display text-sm font-bold text-foreground">
                Atendimento direto via WhatsApp
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Para dúvidas rápidas sobre encaminhamentos médicos, pós-operatório
                ou disponibilidade imediata.
              </p>
              <a
                href={CLINIC_CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-border-strong bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground whitespace-nowrap shrink-0 transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Entrar em contato</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Agendamento Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="rounded-xl border border-border bg-surface-elevated p-6 shadow-clinical-card sm:p-10 lg:col-span-7"
          >
            {submittedBooking ? (
              <div className="flex h-full flex-col justify-between py-4">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Solicitação de agendamento registrada
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Seus dados clínicos preliminares foram organizados com
                    segurança. Conclua o envio pelo WhatsApp para confirmação
                    imediata de horário ou aguarde nosso retorno.
                  </p>

                  <dl className="mt-6 grid grid-cols-1 gap-4 rounded-lg border border-border bg-surface p-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-muted-foreground">Paciente</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-foreground">
                        {submittedBooking.name}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">Telefone</dt>
                      <dd className="mt-0.5 text-sm font-semibold tabular-nums text-foreground">
                        {submittedBooking.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">
                        Especialidade
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-foreground">
                        {submittedBooking.specialty}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">
                        Preferência
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-foreground">
                        {submittedBooking.preferredPeriod}
                        {submittedBooking.preferredDate
                          ? ` · ${submittedBooking.preferredDate}`
                          : ''}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                  <a
                    href={buildWhatsappSummaryHref(submittedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-clinical-cta whitespace-nowrap shrink-0 transition-colors hover:bg-primary-hover"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Entrar em contato</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedBooking(null)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground whitespace-nowrap shrink-0 transition-colors hover:border-border-strong"
                  >
                    Editar solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <CalendarCheck
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Agendamento Online
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Resposta clínica rápida
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold text-foreground"
                    >
                      Nome completo
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => {
                        setFormState((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      placeholder="Ex.: Mariana Ferreira"
                      className="mt-1.5 min-h-[44px] w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-primary">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold text-foreground"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      value={formState.phone}
                      onChange={(e) => {
                        const formatted = formatBrazilPhone(e.target.value);
                        setFormState((prev) => ({ ...prev, phone: formatted }));
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder="(00) 00000-0000"
                      className="mt-1.5 min-h-[44px] w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm tabular-nums text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-primary">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-semibold text-foreground"
                    >
                      E-mail
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => {
                        setFormState((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      placeholder="contato@exemplo.com.br"
                      className="mt-1.5 min-h-[44px] w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-primary">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-specialty"
                      className="block text-xs font-semibold text-foreground"
                    >
                      Especialidade de interesse
                    </label>
                    <select
                      id="booking-specialty"
                      value={formState.specialty}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          specialty: e.target.value,
                        }))
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                    >
                      {SPECIALTIES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <span className="block text-xs font-semibold text-foreground">
                      Turno preferencial
                    </span>
                    <div className="mt-1.5 grid grid-cols-3 gap-1.5 rounded-md border border-border bg-surface p-1">
                      {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => {
                        const selected = formState.preferredPeriod === period;
                        return (
                          <button
                            key={period}
                            type="button"
                            onClick={() =>
                              setFormState((prev) => ({
                                ...prev,
                                preferredPeriod: period,
                              }))
                            }
                            className={`min-h-[36px] rounded px-2 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                              selected
                                ? 'bg-surface-elevated text-foreground shadow-clinical-card'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {period}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold text-foreground"
                    >
                      Data sugerida (opcional)
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={formState.preferredDate}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          preferredDate: e.target.value,
                        }))
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm tabular-nums text-foreground transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Breve relato ou objetivo clínico (opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={formState.notes}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                    placeholder="Descreva região da dor, encaminhamento médico ou objetivo com RPG/Pilates."
                    className="mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <p className="text-xs text-muted-foreground">
                    Atendimento ético e sigiloso conforme normas clínicas.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-clinical-cta whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover"
                  >
                    Entrar em contato
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
