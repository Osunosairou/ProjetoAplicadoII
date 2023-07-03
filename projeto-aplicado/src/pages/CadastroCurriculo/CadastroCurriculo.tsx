import { LabeledInput } from '../../components'
import * as S from './CadastroCurriculo.styles'

export const CadastroCurriculo = () => {
  return (
    <S.Container>
      <S.Title>Cadastre seu currículo</S.Title>
      <S.InputList>
        <LabeledInput label='Nome' placeholder='Digite o nome...' />
        <LabeledInput label='E-mail' placeholder='Digite o email...' type='email' />
        <LabeledInput label='Data de nascimento' placeholder='xx/xx/xxxx' type='date' />
      </S.InputList>
      <S.ResumeTitle>
        Currículo
      </S.ResumeTitle>
      <S.Resume />
      <S.Submit type="submit">Enviar</S.Submit>
    </S.Container>
  );
}