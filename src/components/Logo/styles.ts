import styled, { css } from 'styled-components'

import type { LogoProps } from '.'

const wrapperModifiers = {
  medium: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${wrapperModifiers[size!]}
  `}
`
