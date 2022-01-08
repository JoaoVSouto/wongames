import type { Meta, Story } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import { Slider, SliderProps } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderProps> = args => <Slider {...args} />

Horizontal.args = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  },
  children: [
    <Slide key="1">Slide 1</Slide>,
    <Slide key="2">Slide 2</Slide>,
    <Slide key="3">Slide 3</Slide>,
    <Slide key="4">Slide 4</Slide>,
    <Slide key="5">Slide 5</Slide>,
    <Slide key="6">Slide 6</Slide>
  ]
}

export const Vertical: Story<SliderProps> = args => <Slider {...args} />

Vertical.args = {
  settings: {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    slidesToShow: 1
  },
  children: [
    <Slide key="1">Slide 1</Slide>,
    <Slide key="2">Slide 2</Slide>,
    <Slide key="3">Slide 3</Slide>,
    <Slide key="4">Slide 4</Slide>,
    <Slide key="5">Slide 5</Slide>,
    <Slide key="6">Slide 6</Slide>
  ]
}
