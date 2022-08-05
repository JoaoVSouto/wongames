import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { Gallery } from '.'
import { mock } from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', {
        name: `Thumb - ${mock[0].label}`
      })
    ).toHaveAttribute('src', mock[0].src)

    expect(
      screen.getByRole('button', {
        name: `Thumb - ${mock[1].label}`
      })
    ).toHaveAttribute('src', mock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).not.toBeVisible()

    fireEvent.click(
      screen.getByRole('button', {
        name: `Thumb - ${mock[0].label}`
      })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toBeVisible()
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', {
        name: `Thumb - ${mock[1].label}`
      })
    )

    const img = await screen.findByRole('img', { name: mock[1].label })

    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button is clicked', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', {
        name: `Thumb - ${mock[0].label}`
      })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toBeVisible()

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).not.toBeVisible()
  })

  it('should handle close modal when ESC is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', {
        name: `Thumb - ${mock[0].label}`
      })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toBeVisible()

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).not.toBeVisible()
  })
})
