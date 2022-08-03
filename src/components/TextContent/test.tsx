import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { theme } from 'styles/theme'

import { TextContent, TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Title',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /title/i })
    ).not.toBeInTheDocument()
  })

  it('should render the correct colors based on screen size', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /title/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})
