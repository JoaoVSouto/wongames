import styled, { css } from 'styled-components'

import type { TextFieldProps } from '.'

export const Wrapper = styled.div``

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type InputProps = {
  iconPosition: NonNullable<TextFieldProps['iconPosition']>
}

export const Input = styled.input<InputProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

type IconProps = {
  position: TextFieldProps['iconPosition']
}

export const Icon = styled.div<IconProps>`
  ${({ theme, position }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${position === 'right' ? 1 : 0};

    > svg {
      width: 100%;
    }
  `}
`
