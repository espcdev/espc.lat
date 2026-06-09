// Utilidades de formato de texto.

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Markdown "ligero" para campos cortos: **negrita** y *cursiva*.
export function inlineMd(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*]+?)\*/g, '$1<em>$2</em>');
  return out;
}

export function formatDate(date: Date | undefined, locale: string): string {
  if (!date) return '';
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}
