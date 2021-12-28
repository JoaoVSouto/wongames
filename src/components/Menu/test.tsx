import { fireEvent, screen } from '@testing-library/react'

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

  it('should handle the open/close mobile menu correctly', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).not.toBeVisible()

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toBeVisible()

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).not.toBeVisible()
  })
})
