import { ArrowBackIos as ArrowLeftIcon } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRightIcon } from '@styled-icons/material-outlined/ArrowForwardIos'

import { GameCard, GameCardProps } from 'components/GameCard'
import { Slider, SliderSettings } from 'components/Slider'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRightIcon aria-label="next games" />,
  prevArrow: <ArrowLeftIcon aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export const GameCardSlider = ({
  items,
  color = 'black'
}: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map(item => (
        <GameCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
