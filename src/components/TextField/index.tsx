import * as React from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  error?: string
  onInput?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  onInput,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    onInput?.(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {icon && <S.Icon position={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...rest}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
