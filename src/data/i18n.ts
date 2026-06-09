// Cadenas de la interfaz (navegación, etiquetas, etc.) en ES/EN.
// Para añadir un texto nuevo, agrégalo en ambos idiomas.

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export const ui = {
  es: {
    'site.tagline': 'La wiki personal de ESPC',
    'nav.home': 'Portada',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.search': 'Buscar',

    'home.intro.title': 'Bienvenido a espc.lat',
    'home.about.title': 'Sobre ESPC',
    'home.featured.title': 'Proyectos destacados',
    'home.facts.title': 'Datos rápidos',
    'home.dyk.title': '¿Sabías que…?',
    'home.channel.title': 'En YouTube',
    'home.projects.title': 'Todos los proyectos',
    'home.readmore': 'Leer más',
    'home.viewall': 'Ver todos los proyectos',

    'about.title': 'ESPC',
    'about.subtitle': 'Desarrollador y entusiasta de la IA',
    'about.section.who': '¿Quién es ESPC?',
    'about.section.focus': 'En qué trabaja',
    'about.section.contact': 'Contacto',

    'projects.title': 'Proyectos',
    'projects.intro': 'Cosas que ESPC está construyendo y documentando. Esta lista crece con el tiempo.',
    'projects.empty': 'Aún no hay proyectos publicados. ¡Pronto!',
    'projects.all': 'Todos',

    'infobox.realname': 'Nombre',
    'infobox.known': 'Conocido como',
    'infobox.country': 'País',
    'infobox.occupation': 'Ocupación',
    'infobox.skills': 'Habilidades',
    'infobox.interests': 'Intereses',
    'infobox.links': 'Enlaces',
    'infobox.status': 'Estado',
    'infobox.tags': 'Etiquetas',
    'infobox.started': 'Iniciado',
    'infobox.type': 'Tipo',
    'infobox.project': 'Proyecto',

    'status.idea': 'Idea',
    'status.en-progreso': 'En progreso',
    'status.en-pausa': 'En pausa',
    'status.terminado': 'Terminado',
    'status.deprecado': 'Deprecado',

    'email.soon': 'Próximamente',
    'footer.builtwith': 'Hecho con Astro · estilo wiki',
    'footer.edit': 'Este sitio es de código abierto',
    'toc.title': 'Contenido',
    'lang.switch': 'English',
    'theme.toggle': 'Cambiar tema',
  },
  en: {
    'site.tagline': 'The personal wiki of ESPC',
    'nav.home': 'Main Page',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.search': 'Search',

    'home.intro.title': 'Welcome to espc.lat',
    'home.about.title': 'About ESPC',
    'home.featured.title': 'Featured projects',
    'home.facts.title': 'Quick facts',
    'home.dyk.title': 'Did you know…?',
    'home.channel.title': 'On YouTube',
    'home.projects.title': 'All projects',
    'home.readmore': 'Read more',
    'home.viewall': 'View all projects',

    'about.title': 'ESPC',
    'about.subtitle': 'Developer and AI enthusiast',
    'about.section.who': 'Who is ESPC?',
    'about.section.focus': 'What he works on',
    'about.section.contact': 'Contact',

    'projects.title': 'Projects',
    'projects.intro': 'Things ESPC is building and documenting. This list grows over time.',
    'projects.empty': 'No projects published yet. Soon!',
    'projects.all': 'All',

    'infobox.realname': 'Name',
    'infobox.known': 'Known as',
    'infobox.country': 'Country',
    'infobox.occupation': 'Occupation',
    'infobox.skills': 'Skills',
    'infobox.interests': 'Interests',
    'infobox.links': 'Links',
    'infobox.status': 'Status',
    'infobox.tags': 'Tags',
    'infobox.started': 'Started',
    'infobox.type': 'Type',
    'infobox.project': 'Project',

    'status.idea': 'Idea',
    'status.en-progreso': 'In progress',
    'status.en-pausa': 'On hold',
    'status.terminado': 'Completed',
    'status.deprecado': 'Deprecated',

    'email.soon': 'Coming soon',
    'footer.builtwith': 'Built with Astro · wiki style',
    'footer.edit': 'This site is open source',
    'toc.title': 'Contents',
    'lang.switch': 'Español',
    'theme.toggle': 'Toggle theme',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  };
}

/** Devuelve el locale a partir de la URL (/es/... o /en/...). */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

/** Construye una ruta con prefijo de idioma. */
export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}/${clean}`.replace(/\/+$/, '/').replace(/\/$/, clean ? '' : '/');
}

/** Devuelve la URL equivalente en el otro idioma. */
export function alternateUrl(url: URL, target: Locale): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return '/' + parts.join('/') + (url.pathname.endsWith('/') && parts.length ? '/' : '');
}
