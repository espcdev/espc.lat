---
title: "Example project (template)"
description: "Copy this file to create a new project. Delete it when you no longer need it."
status: idea
featured: false
order: 99
started: 2026-06-08
tags: ["Template", "Example"]
links:
  - label: "Repository"
    url: "https://github.com/espcdev"
---

## How to add a new project

1. Duplicate this file inside `src/content/projects/en/` and name it something like
   `my-project.md`. The file name is the **slug** (the URL).
2. Create the Spanish version in `src/content/projects/es/` **with the same name**
   so the language switch links both.
3. Edit the data above (between `---`):
   - **title**: project name.
   - **description**: one or two sentences.
   - **status**: `idea`, `en-progreso`, `en-pausa` or `terminado`.
   - **featured**: `true` to show it on the home page.
   - **tags**: list of tags.
   - **links**: links (repo, demo, etc.).
4. Write the content below using regular **Markdown**.

## Sections you can use

Headings, lists, quotes, code… all Markdown works:

```js
console.log("Hello from espc.lat!");
```

> Tip: start simple. You can always come back and expand the project page.
