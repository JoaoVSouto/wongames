import type { Meta, Story } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' }
  }
} as Meta

export const Basic: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
