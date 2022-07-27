import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { mock as bannersMock } from 'components/BannerSlider/mock'
import { mock as gamesMock } from 'components/GameCardSlider/mock'
import { mock as highlightMock } from 'components/Highlight/mock'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="Mock Menu" />
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: () => <div data-testid="Mock Footer" />
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: () => <div data-testid="Mock Showcase" />
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  BannerSlider: () => <div data-testid="Mock BannerSlider" />
}))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
