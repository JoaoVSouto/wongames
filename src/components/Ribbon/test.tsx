import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { theme } from 'styles/theme'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render the children text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render the primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with the medium size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
