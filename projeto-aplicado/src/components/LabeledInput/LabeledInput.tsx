import { ChangeEventHandler } from 'react';
import * as S from './LabeledInput.styles'

type LabeledInputProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export const LabeledInput = ({ label, type = 'text', value, onChange, placeholder }: LabeledInputProps) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    onChange(value)
  }

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input type={type} value={value} onChange={handleChange} placeholder={placeholder} />
    </S.InputContainer>
  )
}