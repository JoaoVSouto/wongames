import * as React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
    {icon}
    {children && <span>{children}</span>}
  </S.Wrapper>
)
