import heroClinicImg from '../assets/images/hero_fisio_clinica_v2_1795527798895.jpg';
import rpgPosturaImg from '../assets/images/especialidade_rpg_postura_v2_1795527803624.jpg';
import pilatesClinicoImg from '../assets/images/especialidade_pilates_clinico_v2_1795527800314.jpg';
import sobreEstudioImg from '../assets/images/sobre_naliele_estudio_1795527785870.jpg';

export const CLINIC_IMAGES = {
  hero: heroClinicImg,
  rpg: rpgPosturaImg,
  pilates: pilatesClinicoImg,
  about: sobreEstudioImg,
};

export type SpecialtyCategory =
  | 'todas'
  | 'reabilitacao'
  | 'rpg'
  | 'pilates'
  | 'massoterapia';

export interface SpecialtyItem {
  id: string;
  number: string;
  category: Exclude<SpecialtyCategory, 'todas'>;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  indications: string[];
  sessionFormat: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface ClinicalMetric {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
}

export interface AcademicCredential {
  id: string;
  period: string;
  title: string;
  institution: string;
  focus: string;
}

export interface RecoveryTestimonial {
  id: string;
  patientName: string;
  patientProfile: string;
  condition: string;
  protocol: string;
  duration: string;
  quote: string;
  outcome: string;
}

export const CLINIC_CONTACT = {
  brandName: 'Naliele Massoterapeuta Topcorpus',
  shortBrand: 'Naliele Topcorpus',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20para%20agendar%20uma%20avalia%C3%A7%C3%A3o%20cl%C3%ADnica.',
  hours: 'Não informado',
};

export const HERO_CLINICAL_METRICS: ClinicalMetric[] = [
  {
    id: 'avaliacao',
    value: 100,
    suffix: '%',
    label: 'Avaliação individualizada',
    context: 'Mapeamento biomecânico completo antes de iniciar qualquer protocolo',
  },
  {
    id: 'pilares',
    value: 4,
    suffix: ' eixos',
    label: 'Integração terapêutica',
    context: 'Reabilitação ortopédica, RPG, Pilates clínico e massoterapia',
  },
  {
    id: 'atendimento',
    value: 60,
    suffix: ' min',
    label: 'Sessão dedicada 1:1',
    context: 'Acompanhamento exclusivo em ambiente clínico controlado',
  },
  {
    id: 'conduta',
    value: 12,
    suffix: '+ métodos',
    label: 'Recursos manuais e cinesiológicos',
    context: 'Protocolos baseados em evidência científica atualizada',
  },
];

export const SPECIALTY_CATEGORIES: {
  id: SpecialtyCategory;
  label: string;
}[] = [
  { id: 'todas', label: 'Todas as áreas' },
  { id: 'reabilitacao', label: 'Reabilitação' },
  { id: 'rpg', label: 'RPG' },
  { id: 'pilates', label: 'Pilates Clínico' },
  { id: 'massoterapia', label: 'Massoterapia' },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'reabilitacao-ortopedica',
    number: '01.',
    category: 'reabilitacao',
    categoryLabel: 'Fisioterapia Ortopédica · Recuperação Funcional',
    title: 'Reabilitação Ortopédica e Pós-Lesão',
    subtitle: 'Restauração articular, controle álgico e retorno seguro à rotina',
    description:
      'Conduta clínica direcionada ao tratamento de disfunções musculoesqueléticas, lombalgias, cervicalgias, lesões ligamentares e recuperação pós-operatória com progressão de carga monitorada.',
    indications: [
      'Hérnias discais e ciatalgias',
      'Tendinopatias de ombro e joelho',
      'Pós-operatório ortopédico',
    ],
    sessionFormat: 'Avaliação cinesiológica + terapia manual + cinesioterapia',
    featured: true,
    image: heroClinicImg,
    imageAlt:
      'Consultório clínico minimalista preparado para atendimento de reabilitação ortopédica',
  },
  {
    id: 'rpg-postura',
    number: '02.',
    category: 'rpg',
    categoryLabel: 'Reeducação Postural Global · Alinhamento',
    title: 'RPG — Reeducação Postural Global',
    subtitle: 'Correção de cadeias musculares e descompressão axial',
    description:
      'Método fisioterapêutico de posturas ativas e tração manual suave que atua diretamente sobre os encurtamentos miofasciais responsáveis por desvios posturais e sobrecargas articulares.',
    indications: [
      'Escoliose, hipercifose e hiperlordose',
      'Tensão cervical crônica e cefaleia tensional',
      'Sobrecarga postural por trabalho em tela',
    ],
    sessionFormat: 'Posturas progressivas guiadas + respiração diafragmática',
    featured: true,
    image: rpgPosturaImg,
    imageAlt:
      'Fisioterapeuta realizando avaliação postural e ajuste manual cervical em consultório',
  },
  {
    id: 'pilates-clinico',
    number: '03.',
    category: 'pilates',
    categoryLabel: 'Estabilização Segmentar · Controle Motor',
    title: 'Pilates Clínico Terapêutico',
    subtitle: 'Força profunda do centro de gravidade com proteção articular',
    description:
      'Aplicação clínica dos princípios de controle motor, mobilidade torácica e ativação do assoalho pélvico e transverso abdominal para consolidar os ganhos da reabilitação.',
    indications: [
      'Instabilidade lombar recorrente',
      'Prevenção de recidivas após alta fisioterapêutica',
      'Condicionamento físico terapêutico assistido',
    ],
    sessionFormat: 'Equipamentos clínicos + supervisão fisioterapêutica integral',
    featured: true,
    image: pilatesClinicoImg,
    imageAlt:
      'Estúdio de Pilates clínico com aparelho Reformer em madeira clara e iluminação natural',
  },
  {
    id: 'massoterapia-topcorpus',
    number: '04.',
    category: 'massoterapia',
    categoryLabel: 'Liberação Miofascial · Regeneração Tecidual',
    title: 'Massoterapia Clínica Topcorpus',
    subtitle: 'Desativação de pontos-gatilho e redução de rigidez muscular',
    description:
      'Técnicas manuais de precisão anatômica voltadas à melhora da perfusão tecidual, alívio de contraturas profundas, drenagem de sobrecargas inflamatórias e recuperação neuromuscular.',
    indications: [
      'Síndrome dolorosa miofascial',
      'Fadiga muscular em praticantes de esporte',
      'Contraturas paravertebrais e escapulares',
    ],
    sessionFormat: 'Manobras miofasciais profundas + mobilização articular passiva',
  },
  {
    id: 'prevencao-biomecanica',
    number: '05.',
    category: 'reabilitacao',
    categoryLabel: 'Ergonomia Clínica · Longevidade Corporal',
    title: 'Prevenção Biomecânica e Ergonomia',
    subtitle: 'Mapeamento de assimetrias antes que se tornem lesões',
    description:
      'Check-up funcional periódico para identificar déficits de amplitude de movimento, desequilíbrios musculares e padrões compensatórios em rotinas laborais ou esportivas.',
    indications: [
      'Executivos e profissionais em jornada prolongada',
      'Atletas amadores em transição de volume',
      'Manutenção preventiva semestral',
    ],
    sessionFormat: 'Testes ortopédicos funcionais + plano corretivo domiciliar',
  },
];

export const ACADEMIC_CREDENTIALS: AcademicCredential[] = [
  {
    id: 'graduacao',
    period: 'Formação Superior',
    title: 'Bacharelado em Fisioterapia',
    institution: 'Formação Clínica e Biomecânica Aplicada',
    focus:
      'Base sólida em anatomia palpatória, cinesiologia, fisiologia do exercício e reabilitação musculoesquelética.',
  },
  {
    id: 'rpg-formacao',
    period: 'Especialização Postural',
    title: 'Formação em Reeducação Postural Global (RPG)',
    institution: 'Abordagem de Cadeias Musculares e Coluna Vertebral',
    focus:
      'Tratamento estrutural de disfunções vertebrais, assimetrias escapulares e dor crônica postural.',
  },
  {
    id: 'pilates-formacao',
    period: 'Certificação Clínica',
    title: 'Pilates Clínico Aplicado à Reabilitação',
    institution: 'Controle Motor e Estabilização Segmentar',
    focus:
      'Prescrição individualizada de exercícios terapêuticos em aparelhos e solo para proteção articular.',
  },
  {
    id: 'massoterapia-topcorpus',
    period: 'Qualificação Avançada',
    title: 'Massoterapia Clínica e Terapia Manual Topcorpus',
    institution: 'Liberação Miofascial e Recuperação Neuromuscular',
    focus:
      'Protocolo integrado de desativação de pontos-gatilho, mobilização fascial e regeneração tecidual.',
  },
];

export const RECOVERY_TESTIMONIALS: RecoveryTestimonial[] = [
  {
    id: 'case-1',
    patientName: 'Camila Vasconcelos',
    patientProfile: 'Arquiteta · Atendimento em Reabilitação e RPG',
    condition: 'Cervicalgia irradiada e restrição de rotação cervical',
    protocol: '8 semanas de Terapia Manual Topcorpus + RPG semanal',
    duration: 'Alta clínica em 8 semanas',
    quote:
      'Cheguei ao consultório sem conseguir trabalhar mais de duas horas seguidas sem dor cervical e formigamento no braço. A avaliação inicial mapeou exatamente minha compensação postural, e a combinação entre liberação miofascial e RPG devolveu minha rotina sem analgésicos.',
    outcome: 'Amplitude cervical integral recuperada e retorno ao trabalho sem dor.',
  },
  {
    id: 'case-2',
    patientName: 'Ricardo Alencar',
    patientProfile: 'Engenheiro Civil · Atendimento em Pilates Clínico',
    condition: 'Protusão discal lombar L4-L5 com episódios de travamento',
    protocol: '12 sessões progressivas de estabilização lombar no Pilates Clínico',
    duration: 'Evolução consolidada em 10 semanas',
    quote:
      'Evitei atividades físicas por mais de um ano com receio de novas crises lombares. O atendimento individualizado e o rigor técnico em cada ajuste de carga no Pilates Clínico reconstruíram minha confiança para voltar a caminhar e treinar.',
    outcome: 'Ausência de crises álgicas nos últimos 9 meses e ganho de estabilidade.',
  },
  {
    id: 'case-3',
    patientName: 'Fernanda Siqueira',
    patientProfile: 'Corredora Amadora · Massoterapia e Prevenção Biomecânica',
    condition: 'Sobrecarga em trato iliotibial e dor lateral no joelho',
    protocol: '4 sessões de massoterapia clínica + ajustes biomecânicos de corrida',
    duration: 'Retorno progressivo em 4 semanas',
    quote:
      'A precisão da leitura muscular durante as sessões de massoterapia clínica fez toda a diferença. Além de aliviar a tensão aguda, recebemos orientações claras de mobilidade de quadril que eliminaram a sobrecarga nos treinos.',
    outcome: 'Conclusão de prova de 10 km com conforto articular e sem recidiva.',
  },
];
