import type { GameCardProps } from 'components/GameCard'
import { GameCardSlider, GameCardSliderProps } from 'components/GameCardSlider'
import { Heading } from 'components/Heading'
import { Highlight, HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  gameCardSliderChevronColor?: GameCardSliderProps['color']
}

export const Showcase = ({
  title,
  highlight,
  games,
  gameCardSliderChevronColor = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {highlight && <Highlight {...highlight} />}

    {games && (
      <GameCardSlider items={games} color={gameCardSliderChevronColor} />
    )}
  </S.Wrapper>
)
