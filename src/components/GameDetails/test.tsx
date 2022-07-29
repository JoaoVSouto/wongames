import { render, screen } from '@testing-library/react'

import { GameDetails } from '.'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    render(<GameDetails />)

    expect(screen.getByRole('heading', { name: /GameDetails/i })).toBeInTheDocument()
  })
})
