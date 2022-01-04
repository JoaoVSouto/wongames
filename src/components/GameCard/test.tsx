import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { theme } from 'styles/theme'

import { GameCard } from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
    expect(price).not.toHaveStyleRule('color', theme.colors.gray)
    expect(price).toHaveStyleRule('background-color', theme.colors.secondary)
  })

  it("should render a line-through in price when it's promotional", () => {
    const newPrice = 'R$ 15,00'

    renderWithTheme(<GameCard {...props} promotionalPrice={newPrice} />)

    const oldPrice = screen.getByText(props.price)
    const promotionalPrice = screen.getByText(newPrice)

    expect(oldPrice).toHaveStyleRule('text-decoration', 'line-through')
    expect(oldPrice).toHaveStyleRule('color', theme.colors.gray)

    expect(promotionalPrice).not.toHaveStyleRule(
      'text-decoration',
      'line-through'
    )
  })

  it('should render a filled favorite icon when game is favorited', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<GameCard {...props} onFavorite={onFavorite} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toHaveBeenCalled()
  })

  it('should render the ribbon correctly', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="Best Seller"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
