import type { Meta, Story } from '@storybook/react/types-6-0'

import { GameInfo, GameInfoProps } from '.'
import { mock } from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
