import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Quote } from 'lucide-react';
import {
  ACADEMIC_CREDENTIALS,
  CLINIC_CONTACT,
  CLINIC_IMAGES,
  RECOVERY_TESTIMONIALS,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface AboutAndTestimonialsSectionProps {
  onContactClick: () => void;
}

export function AboutAndTestimonialsSection({
  onContactClick,
}: AboutAndTestimonialsSectionProps) {
  const [selectedCaseId, setSelectedCaseId] = useState(
    RECOVERY_TESTIMONIALS[0].id,
  );

  const activeTestimonial =
    RECOVERY_TESTIMONIALS.find((item) => item.id === selectedCaseId) ??
    RECOVERY_TESTIMONIALS[0];

  return (
    <section id="sobre" className="border-b border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Bloco 1: Sobre e Formação Acadêmica */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Retrato / Estúdio Clínico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-clinical-card">
              <ResilientImage
                src={CLINIC_IMAGES.about}
                alt="Espaço de consulta clínica da Naliele Massoterapeuta Topcorpus com modelo anatômico de coluna vertebral"
                fallbackTitle="Formação Clínica Topcorpus"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-surface-dark-foreground">
                <p className="text-xs font-medium text-surface-dark-foreground/85">
                  Atuação Profissional · Fisioterapia e Massoterapia
                </p>
                <p className="mt-1 font-display text-xl font-semibold">
                  {CLINIC_CONTACT.brandName}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biografia Clínica + Formação Acadêmica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                Sobre a Especialista
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Rigor acadêmico aliado à escuta clínica e cuidado manual
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A prática clínica de{' '}
                <strong className="font-semibold text-foreground">
                  Naliele Massoterapeuta Topcorpus
                </strong>{' '}
                parte do princípio de que o alívio sintomático só se sustenta
                quando a causa mecânica e postural é compreendida em
                profundidade. Cada atendimento integra avaliação funcional,
                terapia manual de precisão e reeducação do movimento.
              </p>

              {/* Formação Acadêmica */}
              <div className="mt-8">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <GraduationCap
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-semibold text-foreground">
                    Formação Acadêmica e Qualificações Clínicas
                  </h3>
                </div>

                <div className="divide-y divide-border">
                  {ACADEMIC_CREDENTIALS.map((credential) => (
                    <div
                      key={credential.id}
                      className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6"
                    >
                      <div className="sm:col-span-4">
                        <span className="text-xs font-semibold text-primary">
                          {credential.period}
                        </span>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {credential.institution}
                        </p>
                      </div>
                      <div className="sm:col-span-8">
                        <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
                          {credential.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {credential.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-clinical-cta whitespace-nowrap shrink-0 transition-colors hover:bg-primary-hover"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="text-xs text-muted-foreground">
                Atendimento mediante agendamento prévio
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Depoimentos de Recuperação (Prova Clínica Adjacente) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-20 border-t border-border pt-16"
        >
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                Depoimentos de Recuperação
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Evolução funcional documentada na prática clínica
              </h3>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm text-muted-foreground">
                Relatos de pacientes acompanhados em reabilitação, RPG, Pilates
                clínico e massoterapia.
              </p>
            </div>
          </div>

          {/* Seletor Interativo para Foco em Desktop/Mobile + Grade Completa */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Lista de Casos */}
            <div className="flex flex-col gap-3 lg:col-span-4">
              {RECOVERY_TESTIMONIALS.map((item) => {
                const isSelected = item.id === activeTestimonial.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCaseId(item.id)}
                    className={`flex flex-col items-start rounded-xl border p-5 text-left transition-all duration-150 ${
                      isSelected
                        ? 'border-primary bg-surface-elevated shadow-clinical-card'
                        : 'border-border bg-surface-elevated/60 hover:border-border-strong hover:bg-surface-elevated'
                    }`}
                  >
                    <span className="text-xs font-medium text-primary">
                      {item.duration}
                    </span>
                    <span className="mt-1 font-display text-base font-bold text-foreground">
                      {item.patientName}
                    </span>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {item.condition}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Cartão de Evidência do Caso Selecionado */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface-elevated p-7 shadow-clinical-card sm:p-10 lg:col-span-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {activeTestimonial.patientName}
                    </span>
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    <span>{activeTestimonial.patientProfile}</span>
                  </div>
                  <Quote
                    className="h-5 w-5 text-primary/70"
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="mt-6 font-display text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  “{activeTestimonial.quote}”
                </blockquote>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Protocolo aplicado
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {activeTestimonial.protocol}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Resultado clínico
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {activeTestimonial.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
