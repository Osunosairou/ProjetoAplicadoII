import { useState } from 'react';
import { LabeledInput } from '../../components';
import * as S from './LoginFuncionarios.styles'
import axios from 'axios';

export const LoginFuncionarios = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:4000/login', { username, password })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        // navegar pra outra pagina
      }
      return;
    })
    .catch((err) => console.log(err))
  }

  return (
    <S.Container>
      <S.Title>Login de funcionários</S.Title>
      <S.LoginFields>
        <LabeledInput 
          value={username} 
          onChange={(value) => setUsername(value)} 
          label="Usuário" 
          placeholder='Digite seu usuário...'
        />
        <LabeledInput 
          value={password} 
          onChange={(value) => setPassword(value)} 
          label="Senha" 
          placeholder='Digite sua senha...' 
          type='password' 
        />
      </S.LoginFields>
      <S.Submit type="submit" onClick={handleSubmit}>Enviar</S.Submit>
    </S.Container>
  );
}