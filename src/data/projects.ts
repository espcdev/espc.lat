import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type ProjectEntry = CollectionEntry<'projects'> & { slug: string };

/** Devuelve los proyectos de un idioma, con su `slug` (sin el prefijo de idioma). */
export async function getProjects(lang: Locale): Promise<ProjectEntry[]> {
  const all = await getCollection('projects');
  return all
    .filter((e) => e.id.startsWith(`${lang}/`))
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => {
      if (a.data.order !== b.data.order) return a.data.order - b.data.order;
      const da = a.data.started?.getTime() ?? 0;
      const db = b.data.started?.getTime() ?? 0;
      return db - da;
    });
}

export async function getFeatured(lang: Locale): Promise<ProjectEntry[]> {
  return (await getProjects(lang)).filter((p) => p.data.featured);
}

/** Para getStaticPaths: todas las rutas [slug] de un idioma. */
export async function getProjectPaths(lang: Locale) {
  const projects = await getProjects(lang);
  return projects.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
