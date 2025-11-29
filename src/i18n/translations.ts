export const translations = {
  en: {
    title: 'Site Under Construction',
    description: 'Personal website coming soon - Linux enthusiast, developer',
    langLabel: '[lang]:',
    typingText: [
      'Site under construction...',
      'Building something awesome.',
      'Check back soon!'
    ],
    linksTitle: '# Connect with me:',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  pt: {
    title: 'Site em Construção',
    description: 'Site pessoal em breve - Entusiasta Linux, desenvolvedor',
    langLabel: '[idioma]:',
    typingText: [
      'Site em construção...',
      'Construindo algo incrível.',
      'Volte em breve!'
    ],
    linksTitle: '# Conecte-se comigo:',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
