import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    place-items: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
