---
title: "Proyecto de ejemplo (plantilla)"
description: "Copia este archivo para crear un proyecto nuevo. Borra este cuando ya no lo necesites."
status: idea
featured: false
order: 99
started: 2026-06-08
tags: ["Plantilla", "Ejemplo"]
links:
  - label: "Repositorio"
    url: "https://github.com/espcdev"
---

## Cómo añadir un proyecto nuevo

1. Duplica este archivo dentro de `src/content/projects/es/` y ponle un nombre tipo
   `mi-proyecto.md`. El nombre del archivo es el **slug** (la URL).
2. Crea la versión en inglés en `src/content/projects/en/` **con el mismo nombre**
   para que el cambio de idioma enlace ambas.
3. Edita los datos de arriba (entre `---`):
   - **title**: nombre del proyecto.
   - **description**: una o dos frases.
   - **status**: `idea`, `en-progreso`, `en-pausa` o `terminado`.
   - **featured**: `true` para que salga en la portada.
   - **tags**: lista de etiquetas.
   - **links**: enlaces (repo, demo, etc.).
4. Escribe el contenido aquí abajo usando **Markdown** normal.

## Secciones que puedes usar

Títulos, listas, citas, código… todo Markdown funciona:

```js
console.log("¡Hola desde espc.lat!");
```

> Tip: empieza simple. Siempre puedes volver y ampliar la ficha del proyecto.
