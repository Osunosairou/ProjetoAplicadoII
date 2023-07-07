import axios from "axios";
import { useEffect, useState } from "react"
import  * as S  from './Home.styles'
import { useNavigate } from "react-router-dom";

type AvailableJobsType = Record<string, string>[];

export const Home = () => {
  const [availableJobs, setAvailableJobs] = useState<AvailableJobsType>([]);
  const navigate = useNavigate();

  const navigateTo = (id: string) => {
    navigate('/cadastro-curriculo', { state: { id } });
  }

  useEffect(() => {
    axios.get('http://localhost:4000/vagas')
    .then((res) => {
      return setAvailableJobs(res.data);
    })
  }, [])

  return (
    <S.Container>
        {availableJobs.length > 0 ? 
          <>
            <S.Title>Lista de vagas disponíveis</S.Title>
            <S.List>
                {availableJobs.map((item) => (
                  <S.Job key={item.id} onClick={() => navigateTo(item.id)} type="button">
                    <S.JobTitle>{item.title}</S.JobTitle>
                    <S.JobDescription>{item.description}</S.JobDescription>
                  </S.Job>
                ))}
            </S.List>
          </>
          :
          <S.ErrorContainer>
            <h1>Estamos sem vagas no momento :(</h1>
            <h2>Tente novamente mais tarde</h2>
          </S.ErrorContainer>
        }
    </S.Container>
  )
}