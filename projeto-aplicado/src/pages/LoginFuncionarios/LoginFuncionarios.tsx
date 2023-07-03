import { LabeledInput } from '../../components';
import * as S from './LoginFuncionarios.styles'

export const LoginFuncionarios = () => {
  return (
    <S.Container>
      <S.Title>Login de funcionários</S.Title>
      <S.LoginFields>
        <LabeledInput label="Usuário" placeholder='Digite seu usuário...' />
        <LabeledInput label="Senha" placeholder='Digite sua senha...' type='password' />
      </S.LoginFields>
      <S.Submit type="submit">Enviar</S.Submit>
    </S.Container>
  );
}