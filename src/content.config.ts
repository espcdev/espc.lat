import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de proyectos: cada proyecto es un .md dentro de
//   src/content/projects/es/<slug>.md   (versión en español)
//   src/content/projects/en/<slug>.md   (versión en inglés)
// El <slug> debe coincidir entre idiomas para enlazar las versiones.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['idea', 'en-progreso', 'en-pausa', 'terminado']).default('idea'),
      tags: z.array(z.string()).default([]),
      // Fecha de inicio del proyecto (YYYY-MM-DD)
      started: z.coerce.date().optional(),
      // Imagen de portada opcional (colócala junto al .md o en /public)
      cover: image().optional(),
      // ¿Mostrarlo en la portada como destacado?
      featured: z.boolean().default(false),
      // Orden de aparición (menor = primero)
      order: z.number().default(100),
      // Enlaces externos: repo, demo, etc.
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
    }),
});

export const collections = { projects };
