import type { Meta, Story } from '@storybook/react/types-6-0'

import { mock as items } from './mock'
import { GameCardSlider, GameCardSliderProps } from '.'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardSliderProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
