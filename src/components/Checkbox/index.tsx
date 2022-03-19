import * as React from 'react'

import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
