import type { Meta, Story } from '@storybook/react/types-6-0'

import { mock as items } from './mock'
import { BannerSlider, BannerSliderProps } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
