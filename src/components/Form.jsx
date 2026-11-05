import { useId, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { formEndpoint } from '../config/site'

/**
 * Generic enquiry form. Every submission is emailed to `to`.
 * fields: [{ name, label, type: 'text'|'email'|'tel'|'select'|'textarea'|'file'|'number', options?, required?, wide? }]
 */
export default function Form({ to, subject, fields, submitLabel, note, success, idPrefix }) {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const uid = useId()
  const id = (n) => `${idPrefix || uid}-${n}`

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (form.elements._honey?.value) return
    setState('sending')
    const data = new FormData(form)
    data.append('_subject', subject)
    data.append('_template', 'table')
    try {
      const res = await fetch(formEndpoint(to), { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={34} aria-hidden />
        <h3>{success.title}</h3>
        <p>{success.text}</p>
        <button className="btn btn-ghost" onClick={() => setState('idle')}>Send another</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <div className="form-grid">
        {fields.map((f) => (
          <div key={f.name} className={`field${f.wide || f.type === 'textarea' ? ' field-wide' : ''}`}>
            <label htmlFor={id(f.name)}>
              {f.label}
              {!f.required && <span className="optional"> (optional)</span>}
            </label>
            {f.type === 'select' ? (
              <select id={id(f.name)} name={f.label} required={f.required} defaultValue="">
                <option value="" disabled>Choose one</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea id={id(f.name)} name={f.label} rows={5} required={f.required} />
            ) : f.type === 'file' ? (
              <input id={id(f.name)} name="attachment" type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
            ) : (
              <input id={id(f.name)} name={f.label} type={f.type || 'text'} required={f.required} autoComplete={f.autoComplete} />
            )}
          </div>
        ))}
      </div>
      <div className="form-foot">
        <button type="submit" className="btn btn-navy" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {note && <p className="form-note">{note}</p>}
      </div>
      {state === 'error' && (
        <p className="form-error" role="alert">
          Your form did not send. Check your connection and try again, or email us directly at <a href={`mailto:${to}`}>{to}</a>.
        </p>
      )}
    </form>
  )
}
