import type { Meta, Story } from '@storybook/react/types-6-0'

import { Gallery, GalleryProps } from '.'
import { mock } from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: mock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<GalleryProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
