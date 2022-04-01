import * as React from 'react'

import * as S from './styles'

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

export const Button = React.forwardRef<S.WrapperProps, ButtonProps>(
  (
    {
      children,
      icon,
      size = 'medium',
      fullWidth = false,
      minimal = false,
      ...rest
    },
    ref
  ) => (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...rest}
    >
      {icon}
      {children && <span>{children}</span>}
    </S.Wrapper>
  )
)

Button.displayName = 'Button'
