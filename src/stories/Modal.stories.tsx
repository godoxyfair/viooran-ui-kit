import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Modal } from '../uiKit/Modal/Modal'
import { useEffect, useState } from 'react'

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primary: {
      description: 'Is this the principal call to action on the page?',
      type: { name: 'boolean', required: true },
    },
    size: {
      description: 'How large should the button be?',
      type: { name: 'function', required: false },
    },
    title: {
      description: 'Button contents',
      type: { name: 'string', required: false },
    },
    onClose: {
      description: 'Close Modal function',
      type: { name: 'function', required: true },
    },
    isOpen: {
      description: 'Open Modal',
      type: { name: 'boolean', required: true },
    },
    children: {
      description: 'Modal content',
    },
  },
  render: ({ ...args }) => (
    <div>
      <button onClick={args.onClose}>Открыть модалку</button>
      <Modal title={'Title'} isOpen={args.isOpen} onClose={args.onClose}>
        <h2>Заголовок</h2>
        <p>Это содержимое модального окна.</p>
      </Modal>
    </div>
  ),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ModalPrimary: Story = {
  args: {
    primary: true,
    title: 'Modal title',
    onClose: () => {},
    isOpen: true,
    children: <span>Text text text</span>,
  },
}
