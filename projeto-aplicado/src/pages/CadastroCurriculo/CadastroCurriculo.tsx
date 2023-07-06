import { ChangeEventHandler, useState } from 'react';
import { LabeledInput } from '../../components'
import * as S from './CadastroCurriculo.styles'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const CadastroCurriculo = () => {
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [resume, setResume] = useState('');

  const handleChangeResume: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target;
    setResume(value);
  }

  const handleSubmit = () => {
    axios.post('http://localhost:4000/cadastrar/aplicante', { name, email, dateOfBirth, resume, job: location.state.id })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        return alert('Seu currículo foi cadastrado com sucesso!')
      }
      return alert('Ocorreu um erro inesperado.\n Tente novamente!');
    })
    .catch((err) => console.log(err))
  }

  return (
    <S.Container>
      <S.Title>Cadastre seu currículo</S.Title>
      <S.InputList>
        <LabeledInput value={name} onChange={setName} label='Nome' placeholder='Digite o nome...' />
        <LabeledInput value={email} onChange={setEmail} label='E-mail' placeholder='Digite o email...' type='email' />
        <LabeledInput value={dateOfBirth} onChange={setDateOfBirth} label='Data de nascimento' placeholder='xx/xx/xxxx' type='date' />
      </S.InputList>
      <S.ResumeTitle>
        Currículo
      </S.ResumeTitle>
      <S.Resume value={resume} onChange={handleChangeResume} />
      <S.Submit type="submit" onClick={handleSubmit}>Enviar</S.Submit>
    </S.Container>
  );
}