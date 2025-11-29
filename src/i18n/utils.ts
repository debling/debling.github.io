export const translations = {
  en: {
    title: 'debling@home',
    description: 'Personal website coming soon',
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
    title: 'debling@home',
    description: 'Site pessoal em breve',
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

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function getRelativeUrl(lang: Language, path: string = ''): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${prefix}${path}`;
}

export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'pt') {
    return 'pt';
  }
  
  return 'en';
}
