import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  SPECIALTIES,
  SPECIALTY_CATEGORIES,
  type SpecialtyCategory,
  type SpecialtyItem,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export function SpecialtiesSection({
  onSelectSpecialty,
}: SpecialtiesSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<SpecialtyCategory>('todas');

  const filteredSpecialties =
    activeCategory === 'todas'
      ? SPECIALTIES
      : SPECIALTIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="especialidades"
      className="border-b border-border bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho Assimétrico da Seção */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-border pb-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
              Áreas de Atuação Clínica
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Especialidades estruturadas para tratar a origem da disfunção
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cada intervenção combina raciocínio cinesiológico, terapia manual
              específica e progressão funcional ativa. Selecione uma área para
              consultar indicações ou solicitar avaliação.
            </p>
          </motion.div>
        </div>

        {/* Barra de Filtros Interativa */}
        <div
          role="tablist"
          aria-label="Filtrar especialidades"
          className="mt-8 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface p-1.5"
        >
          {SPECIALTY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-[40px] rounded-md px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 sm:text-sm ${
                  isActive
                    ? 'bg-surface-elevated text-foreground shadow-clinical-card'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Assimétrico (12 colunas) */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {filteredSpecialties.map((specialty, index) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              isWide={
                activeCategory === 'todas'
                  ? index === 0 || index === 1 || index === 2
                  : true
              }
              spanClass={getBentoSpanClass(activeCategory, index)}
              onSelectSpecialty={onSelectSpecialty}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function getBentoSpanClass(
  activeCategory: SpecialtyCategory,
  index: number,
): string {
  if (activeCategory !== 'todas') {
    return 'lg:col-span-6';
  }
  if (index === 0) return 'lg:col-span-7';
  if (index === 1) return 'lg:col-span-5';
  if (index === 2) return 'lg:col-span-6';
  return 'lg:col-span-3';
}

interface SpecialtyCardProps {
  specialty: SpecialtyItem;
  isWide: boolean;
  spanClass: string;
  onSelectSpecialty: (specialtyTitle: string) => void;
}

function SpecialtyCard({
  specialty,
  isWide,
  spanClass,
  onSelectSpecialty,
}: SpecialtyCardProps) {
  const hasImage = Boolean(specialty.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface-elevated transition-all duration-200 hover:-translate-y-1 hover:shadow-clinical-card-hover ${spanClass}`}
    >
      <div>
        {hasImage && isWide && (
          <div className="relative h-56 w-full overflow-hidden border-b border-border bg-surface sm:h-64">
            <ResilientImage
              src={specialty.image}
              alt={specialty.imageAlt || specialty.title}
              fallbackTitle={specialty.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
            <span className="font-medium">{specialty.categoryLabel}</span>
            <span className="font-display text-sm font-semibold tabular-nums text-primary">
              {specialty.number}
            </span>
          </div>

          <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {specialty.title}
          </h3>

          <p className="mt-1.5 text-sm font-medium text-foreground/85">
            {specialty.subtitle}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {specialty.description}
          </p>

          <ul className="mt-5 space-y-2 border-t border-border pt-5">
            {specialty.indications.map((indication) => (
              <li
                key={indication}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground sm:text-sm"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{indication}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-surface/60 px-6 py-4 sm:px-8">
        <span className="text-xs text-muted-foreground">
          {specialty.sessionFormat}
        </span>

        <button
          type="button"
          onClick={() => onSelectSpecialty(specialty.title)}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground whitespace-nowrap shrink-0 transition-colors hover:bg-primary-hover"
        >
          <span>Entrar em contato</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}
