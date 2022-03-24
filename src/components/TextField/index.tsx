import * as React from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  onInput?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
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
    <S.Wrapper>
      {label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
