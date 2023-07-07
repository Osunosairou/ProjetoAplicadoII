import axios from "axios";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import  * as S  from './Curriculo.styles'

type ResumesType = Record<string, string>[];

export const Curriculos = () => {
  const [resumes, setResumes] = useState<ResumesType>([]);
  const [selectedResumeIndex, setSelectedResumeIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [resumesFiltered, setResumesFiltered] = useState<ResumesType>(resumes);
  const [search, setSearch] = useState<string>('');

  const openModal = useCallback((id: string) => {
    const resumeIndex = resumes.findIndex(( item ) => item.id === id)
    
    setSelectedResumeIndex(resumeIndex);
    setIsModalOpen(true);
  }, [resumes]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target;
    setSearch(value);

    if(value !== '') {
      const newList = resumes.filter((item) => item.name.includes(value));
      return setResumesFiltered(newList);
    } 
    return setResumesFiltered(resumes);
  }, [resumes])

  useEffect(() => {
    axios.get('http://localhost:4000/aplicantes')
    .then(async (res) => {
      return await axios.get('http://localhost:4000/vagas')
      .then((response) => {
        const newResumes = res.data;
        newResumes.forEach((item: Record<string, string>) => {
          const job = response.data.find((job: Record<string, string>) => job.id === item.job);
          if(job) {
            item.job = job.title;
          } else {
            item.job = '*Vaga inexistente'
          }
        });
        setResumesFiltered(newResumes);
        return setResumes(newResumes);
      })
    })
  }, [])

  return (
    <S.Container>
      <S.SearchContainer>
        &#128269;
        <S.Search type="text" placeholder="Pesquisar..." value={search} onChange={handleSearch} />
      </S.SearchContainer>
        {resumesFiltered.length > 0 ? 
          <>
            <S.Title>Lista de curriculos disponíveis</S.Title>
            <S.List>
                {resumesFiltered.map((item) => (
                  <S.Job key={item.id} onClick={() => openModal(item.id)} type="button">
                    <S.JobTitle>{item.name}</S.JobTitle>
                    <S.JobDescription>{item.job}</S.JobDescription>
                  </S.Job>
                ))}
            </S.List>
            <S.Modal data-open={isModalOpen}>
              <S.ModalContent>
                <S.JobTitle>{resumes[selectedResumeIndex].name}</S.JobTitle>
                <S.CloseModal type="button" onClick={() => setIsModalOpen(false)}>Fechar</S.CloseModal>
                <S.JobDescriptionModal>Vaga: {resumes[selectedResumeIndex].job}</S.JobDescriptionModal>
                <S.JobDescriptionModal>Email: {resumes[selectedResumeIndex].email}</S.JobDescriptionModal>
                <S.JobDescriptionModal>Data de nascimento: {new Date(resumes[selectedResumeIndex].dateOfBirth).toLocaleDateString('pt-Br')}</S.JobDescriptionModal>
                <S.JobDescriptionModal>{resumes[selectedResumeIndex].resume}</S.JobDescriptionModal>
              </S.ModalContent>
            </S.Modal>
          </>
          :
          <S.ErrorContainer>
            <h1>Nenhum curriculo foi encontrado com essa opção de filtro</h1>
            <h2>Tente novamente mais tarde</h2>
          </S.ErrorContainer>
        }
    </S.Container>
  )
}