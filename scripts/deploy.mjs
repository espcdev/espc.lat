// Despliegue manual de espc.lat a GitHub Pages (rama gh-pages), sin GitHub Actions.
//
// Uso:  npm run deploy
//
// Compila el sitio y publica la carpeta dist/ en la rama `gh-pages`,
// que es la fuente de GitHub Pages. Útil mientras GitHub Actions esté
// deshabilitado (p.ej. por un tema de facturación en la cuenta).
//
// Requisitos: tener acceso de escritorio al repo (Git Credential Manager
// te pedirá iniciar sesión la primera vez, o define la variable GH_TOKEN).

import { execSync } from 'node:child_process';
import { rmSync, existsSync } from 'node:fs';

const REMOTE = 'https://github.com/espcdev/espc.lat.git';
const BRANCH = 'gh-pages';

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', ...opts });
}

function cleanGit() {
  if (existsSync('dist/.git')) rmSync('dist/.git', { recursive: true, force: true });
}

try {
  run('npm run build');
  cleanGit();
  run(`git init -b ${BRANCH} -q`, { cwd: 'dist' });
  run('git add -A', { cwd: 'dist' });
  run('git commit -q -m "Deploy espc.lat"', { cwd: 'dist' });
  run(`git push --force ${REMOTE} ${BRANCH}:${BRANCH}`, { cwd: 'dist' });
  cleanGit();
  console.log('\n✅ Listo. El sitio se publicó en la rama gh-pages.');
  console.log('   GitHub Pages lo actualiza en ~1 minuto: https://espc.lat');
} catch (err) {
  cleanGit();
  console.error('\n❌ Falló el deploy:', err.message);
  process.exit(1);
}
