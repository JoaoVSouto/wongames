import * as React from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioValue
  onCheck?: (value?: RadioValue) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const Radio = ({
  label,
  labelColor = 'white',
  labelFor = '',
  value,
  onCheck,
  ...rest
}: RadioProps) => {
  const onChange = () => {
    onCheck?.(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...rest}
      />
      {label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
