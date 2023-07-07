import axios from "axios";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import  * as S  from './Home.styles'
import { useNavigate } from "react-router-dom";

type AvailableJobsType = Record<string, string>[];

export const Home = () => {
  const [availableJobs, setAvailableJobs] = useState<AvailableJobsType>([]);
  const [availableJobsFiltered, setAvailableJobsFiltered] = useState<AvailableJobsType>(availableJobs);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const navigateTo = (id: string) => {
    navigate('/cadastro-curriculo', { state: { id } });
  }

  const handleSearch: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target;
    setSearch(value);

    if(value !== '') {
      const newList = availableJobs.filter((item) => item.title.includes(value));
      return setAvailableJobsFiltered(newList);
    } 
    return setAvailableJobsFiltered(availableJobs);
  }, [availableJobs])

  useEffect(() => {
    axios.get('http://localhost:4000/vagas')
    .then((res) => {
      setAvailableJobsFiltered(res.data);
      return setAvailableJobs(res.data);
    })
  }, [])

  return (
    <S.Container>
      <S.SearchContainer>
        &#128269;
        <S.Search type="text" placeholder="Pesquisar..." value={search} onChange={handleSearch} />
      </S.SearchContainer>
        {availableJobsFiltered.length > 0 ? 
          <>
            <S.Title>Lista de vagas disponíveis</S.Title>
            <S.List>
                {availableJobsFiltered.map((item) => (
                  <S.Job key={item.id} onClick={() => navigateTo(item.id)} type="button">
                    <S.JobTitle>{item.title}</S.JobTitle>
                    <S.JobDescription>{item.description}</S.JobDescription>
                  </S.Job>
                ))}
            </S.List>
          </>
          :
          <S.ErrorContainer>
            <h1>Nenhuma vaga foi encontrada com essa opção de filtro</h1>
            <h2>Tente novamente mais tarde</h2>
          </S.ErrorContainer>
        }
    </S.Container>
  )
}