import React, {
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import ReactDOM from 'react-dom'

import './modal.css'

export interface ModalProps {
  primary?: boolean

  className?: string

  size?: 'small' | 'medium' | 'large'

  title: string

  onClose: () => void

  isOpen: boolean
  children: ReactNode
}

/** Primary UI Modal component */
export const Modal = ({
  primary = false,
  isOpen,
  size = 'medium',
  title,
  className,
  children,
  onClose,
  ...props
}: ModalProps) => {
  const mode = primary ? 'simple-modal--primary' : 'simple-modal--secondary'
  if (!isOpen) return null
  const [appLayoutElement, setAppLayoutElement] = useState<HTMLElement | null>(
    null,
  )

  useEffect(() => {
    const checkElement = () => {
      const element = document.querySelector<HTMLElement>('.docs-story')
      if (element) {
        setAppLayoutElement(element)
      }
    }

    checkElement()

    const observer = new MutationObserver(checkElement)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {!!appLayoutElement &&
        ReactDOM.createPortal(
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={onClose}>
                ✖
              </button>
              {children}
            </div>
          </div>,
          appLayoutElement,
        )}
    </>
  )
}
