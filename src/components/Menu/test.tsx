import { renderWithTheme } from 'utils/tests/helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)
  })
})
