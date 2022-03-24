import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined'

import { renderWithTheme } from 'utils/tests/helpers'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should change its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField label="TextField" labelFor="textfield" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" labelFor="textfield" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
