import type { Meta, StoryObj } from '@storybook/react'

import { InputForm } from '../uiKit/InputForm/InputForm'

const meta = {
  title: 'Example/InputForm',
  component: InputForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      description: 'Label contents',
      type: { name: 'string', required: true },
    },
    labelClass: {
      description: 'Label style',
      type: { name: 'string', required: false },
    },
    error: {
      description: 'Optional error props',
      type: { name: 'string', required: false },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof InputForm>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Clean: Story = {
  args: {
    error: '',
    label: 'Label',
  },
}

export const Error: Story = {
  args: {
    error: 'Wrong enter',
    label: 'Label',
  },
}
