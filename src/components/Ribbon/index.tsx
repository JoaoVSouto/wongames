import * as React from 'react'

import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'medium'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'medium'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)
