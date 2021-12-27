import type { Meta, Story } from '@storybook/react/types-6-0'

import { MediaMatch } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = args => (
  <MediaMatch {...args}>Only on desktop</MediaMatch>
)

Desktop.args = {
  greaterThan: 'medium'
}

export const Mobile: Story = args => (
  <MediaMatch {...args}>Only on mobile</MediaMatch>
)

Mobile.args = {
  lessThan: 'medium'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
