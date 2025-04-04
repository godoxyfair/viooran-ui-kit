import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Checkbox } from '@/uiKit/Checkbox/Checkbox'

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    checked: {
      description: 'Checked checkbox',
      type: { name: 'boolean', required: true },
    },
    onChange: {
      description: 'Function for managment checkbox',
      type: { name: 'function', required: false },
    },
    label: {
      description: 'Checkbox contents',
      type: { name: 'string', required: true },
    },
    disabled: {
      description: 'Optional disabled parameter',
      type: { name: 'boolean', required: false },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleCheckbox: Story = {
  args: {
    checked: true,
    label: 'Checkbox',
    onChange: () => {},
  },
}
