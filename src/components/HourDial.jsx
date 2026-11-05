import { useEffect, useState } from 'react'

// Current time in Lagos as fractional hours (0–24)
function lagosHours() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date())
  const h = Number(parts.find((p) => p.type === 'hour').value)
  const m = Number(parts.find((p) => p.type === 'minute').value)
  return { h, m, value: h + m / 60 }
}

const pad = (n) => String(n).padStart(2, '0')

/**
 * The 24-hour dial: the logo's ring turned into a clock face around a store photograph.
 * The orange marker sits on the current hour in Lagos.
 */
export default function HourDial({ image, alt }) {
  const [now, setNow] = useState(lagosHours)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setNow(lagosHours()), 30000)
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)))
    return () => { clearInterval(t); cancelAnimationFrame(r) }
  }, [])

  const C = 300
  const R = 282 // tick ring
  const angle = (now.value / 24) * 360
  const ticks = []
  for (let i = 0; i < 96; i++) {
    const major = i % 4 === 0
    const quarter = i % 24 === 0
    const a = (i / 96) * Math.PI * 2 - Math.PI / 2
    const r1 = R - (quarter ? 22 : major ? 14 : 7)
    ticks.push(
      <line
        key={i}
        x1={C + Math.cos(a) * r1} y1={C + Math.sin(a) * r1}
        x2={C + Math.cos(a) * R} y2={C + Math.sin(a) * R}
        className={quarter ? 'tick tick-q' : major ? 'tick tick-h' : 'tick'}
      />
    )
  }
  const labels = [0, 6, 12, 18].map((h) => {
    const a = (h / 24) * Math.PI * 2 - Math.PI / 2
    const r = R - 44
    return (
      <text key={h} x={C + Math.cos(a) * r} y={C + Math.sin(a) * r} className="dial-num" textAnchor="middle" dominantBaseline="central">
        {pad(h)}
      </text>
    )
  })

  // Arc from midnight to now
  const arcR = R + 12
  const end = (angle * Math.PI) / 180 - Math.PI / 2
  const large = angle > 180 ? 1 : 0
  const arc = `M ${C} ${C - arcR} A ${arcR} ${arcR} 0 ${large} 1 ${C + Math.cos(end) * arcR} ${C + Math.sin(end) * arcR}`

  return (
    <figure className={`dial${ready ? ' is-ready' : ''}`}>
      <svg viewBox="0 0 600 600" className="dial-svg" role="img" aria-label={`A 24 hour dial around a store photograph. It is ${pad(now.h)}:${pad(now.m)} in Lagos.`}>
        <defs>
          <clipPath id="dial-photo">
            <circle cx={C} cy={C} r={214} />
          </clipPath>
        </defs>
        <circle cx={C} cy={C} r={arcR} className="dial-track" />
        <path d={arc} className="dial-arc" pathLength="1" />
        <g>{ticks}</g>
        {labels}
        <image href={image} x={C - 214} y={C - 214} width={428} height={428} preserveAspectRatio="xMidYMid slice" clipPath="url(#dial-photo)" />
        <circle cx={C} cy={C} r={214} className="dial-photo-ring" />
        <g className="dial-hand" style={{ transform: `rotate(${ready ? angle : 0}deg)` }}>
          <circle cx={C} cy={C - arcR} r={11} className="dial-marker" />
        </g>
      </svg>
      <figcaption className="dial-caption">
        <span>00:00 Night trading</span>
        <strong>All hours</strong>
        <span>Day trading 23:59</span>
      </figcaption>
      <p className="dial-now"><span className="dot" aria-hidden /> {pad(now.h)}:{pad(now.m)} in Lagos</p>
    </figure>
  )
}
