import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the menu correctly', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })
})
