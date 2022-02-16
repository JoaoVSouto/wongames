import type { Meta, Story } from '@storybook/react/types-6-0'

import { mock as item } from './mock'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: item
} as Meta

export const Basic: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
