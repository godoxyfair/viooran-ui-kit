import React from 'react'
import { forwardRef, InputHTMLAttributes } from 'react'
import './inputForm.css'

export type InputFormProps = {
  label: string
  labelClass?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (props: InputFormProps, ref) => {
    return (
      <div>
        <label className="label">
          {props.label}
          <input ref={ref} className={`${props.className} input`} {...props} />
          <span className={`error ${props.error ? 'error' : 'description'}`}>
            {props.error ? props.error : ''}
          </span>{' '}
        </label>
      </div>
    )
  },
)
