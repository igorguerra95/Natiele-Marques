import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import {
  CLINIC_CONTACT,
  CLINIC_IMAGES,
  HERO_CLINICAL_METRICS,
} from '../data/clinicData';
import { AnimatedCounter } from './AnimatedCounter';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-clinical-canvas"
    >
      <div
        aria-hidden="true"
        className="clinical-grid-texture pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 md:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Headline Monumental & Proposição Clínica */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
                className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm"
              >
                <span className="font-semibold text-primary">
                  {CLINIC_CONTACT.brandName}
                </span>
                <span aria-hidden="true">·</span>
                <span>Fisioterapia Clínica</span>
                <span aria-hidden="true">·</span>
                <span>Reabilitação e Terapia Manual</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
                className="font-display text-[clamp(2.75rem,5.2vw,5.15rem)] font-bold leading-[1.01] tracking-[-0.035em] text-foreground"
              >
                Precisão clínica para restaurar o movimento sem dor.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.16 }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Protocolos fisioterapêuticos individualizados em Reabilitação
                Ortopédica, Reeducação Postural Global (RPG), Pilates Clínico e
                Massoterapia Terapêutica Topcorpus — conduzidos com rigor
                anatômico para devolução funcional duradoura.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-clinical-cta whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-sm font-medium text-foreground whitespace-nowrap shrink-0 transition-colors hover:text-primary"
              >
                <span>Explorar especialidades</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Coluna Direita: Fotografia Clínica Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-clinical-card sm:min-h-[380px]">
              <ResilientImage
                src={CLINIC_IMAGES.hero}
                alt="Ambiente clínico da Naliele Massoterapeuta Topcorpus com maca terapêutica e iluminação natural"
                fallbackTitle="Consultório Naliele Massoterapeuta Topcorpus"
                priority
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark/65 via-surface-dark/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-surface-dark-foreground">
                <p className="text-xs font-medium text-surface-dark-foreground/85">
                  Conduta Regenerativa · Atendimento Individual
                </p>
                <p className="mt-1 font-display text-lg font-semibold leading-snug">
                  Avaliação biomecânica e terapia manual em ambiente clínico
                  dedicado
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Clínicas em 4 Colunas (abaixo do split principal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-clinical-card sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          {HERO_CLINICAL_METRICS.map((metric) => (
            <div key={metric.id} className="p-6 sm:p-7">
              <div className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {metric.context}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
