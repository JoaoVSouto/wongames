import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
