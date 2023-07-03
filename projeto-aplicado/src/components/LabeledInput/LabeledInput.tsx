import * as S from './LabeledInput.styles'

type LabeledInputProps = {
  label: string;
  placeholder: string;
  type?: string;
}

export const LabeledInput = ({ label, type = 'text', placeholder }: LabeledInputProps) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input type={type} placeholder={placeholder} />
    </S.InputContainer>
  )
}