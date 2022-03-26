import * as React from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  onInput?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
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
        {icon && <S.Icon position={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
