// Simple brand glyphs for the footer (drawn here so no brand icon library is needed).
export default function SocialIcon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'Facebook') {
    return (
      <svg {...common}>
        <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H9v3h2.6V21" />
      </svg>
    )
  }
  if (name === 'Instagram') {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </svg>
    )
  }
  return null
}
