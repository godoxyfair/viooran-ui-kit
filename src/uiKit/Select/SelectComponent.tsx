import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import './selectForm.css'

type SelectComponentType = {
  label: string
  labelClass?: string
  error?: string
  optionsData: ReactNode
} & InputHTMLAttributes<HTMLSelectElement>

export const SelectComponent = forwardRef<
  HTMLSelectElement,
  SelectComponentType
>((props: SelectComponentType, ref) => {
  return (
    <div>
      <label className="label">
        {props.label}
        <select ref={ref} className={`${props.className} input`} {...props}>
          <option value="">Select</option>
          {props.optionsData}
        </select>
        <span className={`error ${props.error ? 'error' : 'description'}`}>
          {props.error ? props.error : ''}
        </span>{' '}
      </label>
    </div>
  )
})

SelectComponent.displayName = 'SelectComponent'
