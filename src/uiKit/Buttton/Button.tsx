import React, { ButtonHTMLAttributes } from 'react'

import './button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean

  size?: 'small' | 'medium' | 'large'

  label: string

  onClick?: () => void
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'simple-button--primary' : 'simple-button--secondary'
  return (
    <button
      type="button"
      className={[
        'simple-button',
        `simple-button--${size}`,
        mode,
        className,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
