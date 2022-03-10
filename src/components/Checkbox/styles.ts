import styled, { css } from 'styled-components'

import type { CheckboxProps } from '.'

export const Wrapper = styled.div``

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
