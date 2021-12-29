import * as React from 'react'

import * as S from './styles'

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

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
