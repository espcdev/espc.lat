# espc.lat

La **wiki personal de ESPC** — un "about me" y el lugar donde documento los
proyectos que voy construyendo. Estética tipo Wikipedia + bento grid, bilingüe
(ES/EN) y con modo claro/oscuro.

Hecho con [Astro](https://astro.build/) y desplegado en GitHub Pages.

---

## 🚀 Comandos

| Comando             | Qué hace                                          |
| ------------------- | ------------------------------------------------- |
| `npm install`       | Instala las dependencias                          |
| `npm run dev`       | Servidor local en `http://localhost:4321`         |
| `npm run build`     | Genera el sitio en `./dist/`                       |
| `npm run preview`   | Previsualiza el build local                        |

---

## ✏️ Cómo editar el contenido

### Tus datos (about me, redes, skills…)

Todo está en **`src/data/profile.ts`**. Edita ahí tu nombre de marca, lema, bio,
intereses, habilidades, redes y el correo cuando lo tengas. Los campos `{ es, en }`
son bilingües.

> Nota de privacidad: tu nombre real está guardado pero **oculto**
> (`showRealName: false`). Ponlo en `true` si algún día quieres mostrarlo.

### Añadir un proyecto nuevo

1. Crea un archivo en **`src/content/projects/es/mi-proyecto.md`**.
2. Crea la versión en inglés en **`src/content/projects/en/mi-proyecto.md`**
   (mismo nombre de archivo → se enlazan al cambiar de idioma).
3. Rellena los datos del frontmatter:

   ```yaml
   ---
   title: "Nombre del proyecto"
   description: "Una o dos frases."
   status: en-progreso       # idea | en-progreso | en-pausa | terminado
   featured: true            # true = aparece en la portada
   order: 1                  # menor = sale primero
   started: 2026-06-08
   tags: ["Web", "IA"]
   links:
     - label: "Repositorio"
       url: "https://github.com/espcdev/mi-proyecto"
   ---
   ```

4. Escribe el contenido debajo en Markdown normal.

Hay una plantilla lista para copiar en `src/content/projects/**/proyecto-ejemplo.md`.

### Cambiar textos de la interfaz

Los textos de menús y etiquetas están en **`src/data/i18n.ts`** (ES y EN).

### Cambiar el logo

El logo actual es un SVG (`src/components/Logo.astro`) que se adapta al modo
oscuro. Si quieres usar tu PNG exacto, colócalo en `public/logo.png` y se puede
cambiar el componente para usarlo.

---

## 🌐 Despliegue y dominio

El sitio vive en **GitHub Pages** (rama `gh-pages`) con el dominio `espc.lat`.

### Publicar cambios

```bash
npm run deploy
```

Eso compila el sitio y sube `dist/` a la rama `gh-pages`. GitHub Pages lo
actualiza en ~1 minuto.

> **Nota:** hay un workflow de GitHub Actions (`.github/workflows/deploy.yml`)
> para auto-desplegar en cada `push`, pero está **deshabilitado** porque la
> cuenta tenía un bloqueo de facturación que desactiva Actions. Si resuelves el
> billing en <https://github.com/settings/billing>, se puede reactivar el
> workflow y cambiar la fuente de Pages de "rama" a "GitHub Actions" para que el
> deploy sea automático otra vez.

### DNS (Namecheap)

El dominio apunta a GitHub Pages con estos registros (pestaña *Advanced DNS*):

| Tipo  | Host | Valor              |
| ----- | ---- | ------------------ |
| A     | `@`  | `185.199.108.153`  |
| A     | `@`  | `185.199.109.153`  |
| A     | `@`  | `185.199.110.153`  |
| A     | `@`  | `185.199.111.153`  |
| CNAME | `www`| `espcdev.github.io`|

El archivo `public/CNAME` fija el dominio personalizado al desplegar.

---

## 🗂️ Estructura

```
src/
  components/        Componentes (Header, Footer, Infobox, Logo, ProjectCard…)
    pages/           Vistas reutilizables (Home, About, ProjectsIndex, ProjectArticle)
  content/projects/  Proyectos en Markdown (es/ y en/)
  data/              profile.ts, i18n.ts, projects.ts, format.ts
  layouts/           BaseLayout.astro
  pages/             Rutas /es/** y /en/**
  styles/            global.css (tema claro/oscuro)
public/              CNAME, favicon, assets estáticos
```
