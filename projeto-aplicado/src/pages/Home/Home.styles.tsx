import { styled } from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 99,5vw;
  min-height: 100vh;
  padding: 20px 0;

  overflow-y: auto;

  background-color: gray;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
`;

export const SearchContainer = styled.div`
  border-radius: 8px;
  border: 2px solid; 
  background-color: white;
  padding-left: 6px;
`;

export const Search = styled.input`
  all: unset;
  padding: 10px 20px;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  width: 60%;
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

  border-style: solid;
  border-color: black;
  border-width: thin;

  color: #424242;
  
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
