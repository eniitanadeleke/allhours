import L from '../assets/logo-paths.json'

/**
 * All Hours logo, traced from the supplied artwork.
 * variant: 'full' (mark + wordmark) | 'mark' | 'word'
 * tone:    'light' (for light backgrounds) | 'dark' (for navy backgrounds)
 */
export default function Logo({ variant = 'full', tone = 'light', className = '', title = 'All Hours', weight = 0 }) {
  const ink = tone === 'dark' ? '#FFFFFF' : '#3B3A9A'
  const mark = (
    <>
      <circle cx={L.cx} cy={L.cy} r={L.rm} fill="none" stroke={ink} strokeWidth={L.sw} />
      <circle cx={L.cx} cy={L.cy} r={L.rd} fill="#F7941D" />
      <path fill="#FFFFFF" fillRule="evenodd" d={L.glyph} />
    </>
  )
  // weight adds an outline so the thin wordmark strokes stay visible at small sizes
  const word = <path fill={ink} fillRule="evenodd" d={L.word} stroke={weight ? ink : 'none'} strokeWidth={weight} strokeLinejoin="round" />

  if (variant === 'mark') {
    return (
      <svg className={className} viewBox={`0 0 ${L.w} ${L.cb}`} role="img" aria-label={title}>
        {mark}
      </svg>
    )
  }
  if (variant === 'word') {
    return (
      <svg className={className} viewBox={`0 ${L.cb} ${L.w} ${L.h - L.cb}`} role="img" aria-label={title}>
        {word}
      </svg>
    )
  }
  return (
    <svg className={className} viewBox={`0 0 ${L.w} ${L.h}`} role="img" aria-label={title}>
      {mark}
      {word}
    </svg>
  )
}
