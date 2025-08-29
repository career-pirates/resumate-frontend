export function truncateText(text: string | null, maxLength: number) {
  if (!text) return ''
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...'
}
