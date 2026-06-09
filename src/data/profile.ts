// Perfil de ESPC — edita este archivo para actualizar tus datos en todo el sitio.
// Los campos con { es, en } son bilingües.

export type Localized = { es: string; en: string };

export interface SocialLink {
  label: string;
  url: string;
  handle?: string;
  meta?: Localized; // texto extra opcional, p.ej. "53K suscriptores"
}

export const profile = {
  brand: 'ESPC',
  // Nombre real: guardado para tu referencia, pero NO se muestra en público.
  // Cambia showRealName a true si algún día quieres mostrarlo.
  realName: 'Elias Puente',
  showRealName: false,
  // País
  country: { es: 'México', en: 'Mexico' } as Localized,
  countryCode: 'MX',
  flag: '🇲🇽',

  // Roles / "ocupación" para el infobox
  roles: {
    es: ['Aprendev', 'Especialista en IA general'],
    en: ['Aprendev', 'General-AI specialist'],
  },

  // Lema
  tagline: {
    es: 'Haciendo más fácil el presente y el futuro.',
    en: 'Making the present and future easier.',
  } as Localized,

  // Bio (admite **negritas** y *cursivas* en Markdown ligero)
  bio: {
    es: '**ESPC** es un *aprendev* mexicano: un desarrollador que aprende construyendo. Se especializa en **IA general** —prompting, desarrollo asistido por IA y todo lo que ayude a crear más rápido y mejor— con interés en el **desarrollo** y el **diseño**, y habilidad en **UI/UX**. Su apuesta es simple: **hacer más fácil el presente y el futuro**, un proyecto a la vez.',
    en: '**ESPC** is a Mexican *aprendev*: a developer who learns by building. He specializes in **general AI** —prompting, AI-assisted development and anything that helps create faster and better— with interests in **development** and **design**, and a knack for **UI/UX**. His bet is simple: **make the present and future easier**, one project at a time.',
  } as Localized,

  interests: {
    es: ['Desarrollo', 'Diseño'],
    en: ['Development', 'Design'],
  },

  skills: ['UI/UX', 'Prompting', 'Desarrollo con IA / AI dev'],

  // Email público — déjalo como null hasta que tengas el correo del dominio
  email: null as string | null,

  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/espcdev',
      handle: 'espcdev',
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@GhostiM23',
      handle: '@GhostiM23',
      meta: { es: 'suscriptores', en: 'subscribers' },
    },
  ] as SocialLink[],

  // Métrica destacada del canal (edítala cuando crezca 😉)
  youtubeSubs: '53K',
};

export type Profile = typeof profile;
