import { ChangeEventHandler, useState } from 'react';
import { LabeledInput } from '../../components'
import * as S from './CadastroVaga.styles'
import axios from 'axios';

export const CadastroVaga = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target;
    setDescription(value);
  }

  const handleSubmit = () => {
    if (title.length > 0 && description.length > 0) {
      axios.post('http://localhost:4000/cadastrar/vaga', { title, description })
      .then((res) => {
        setTitle('');
        setDescription('');
        
        console.log(res.status);
        if (res.status === 200) {
          return alert('A vaga foi cadastrada com sucesso!');
        }
        return alert('Ocorreu um erro inesperado.\n Tente novamente!');
      })
      .catch((err) => console.log(err))
    } else {
      alert('Preencha todos os dados!');
    }
  }

  return (
    <S.Container>
      <S.Title>Cadastre uma vaga</S.Title>
      <LabeledInput value={title} onChange={setTitle} label='Titulo da vaga' placeholder='Digite o titulo da vaga...' />
      <S.DescriptionTitle>
        Descrição e informações
      </S.DescriptionTitle>
      <S.Description value={description} onChange={handleChangeDescription} />
      <S.Submit type="submit" onClick={handleSubmit}>Enviar</S.Submit>
    </S.Container>
  );
}