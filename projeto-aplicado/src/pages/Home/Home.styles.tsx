import { styled } from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  padding: 20px 0;

  overflow-y: auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  max-width: 60%;
`;

export const Job = styled.button`
  all: unset;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  width: 60%;
  background-color: lightgray;
  border-radius: 8px;
  padding: 30px 50px;
  
  p {
    margin: 0;
  }
`;

export const JobTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const JobDescription = styled.p`
  word-wrap: break-word;
  text-align: justify;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
