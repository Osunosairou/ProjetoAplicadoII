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

export const SearchContainer = styled.div`
  border-radius: 8px;
  border: 2px solid; 
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

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);

  &[data-open='true'] {
    display: flex;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;
  height: 40%;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;

  overflow-y: auto;
`;

export const CloseModal = styled.button`
  margin-left: 20px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
