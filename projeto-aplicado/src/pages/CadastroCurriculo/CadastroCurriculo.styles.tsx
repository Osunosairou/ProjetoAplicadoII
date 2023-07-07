import { styled } from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100vw;
  height: 100vh;

  background-color: gray;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: white;

  @media (min-width: 600px) {
    font-size: 60px;
    color: white;
  }
`;

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

`;

export const ResumeTitle = styled.h1`
  color: white;
`;

export const Resume = styled.textarea`
  width: 50%;
  height: 40%;
  
  border: 2px solid;
  border-color: black;
  border-radius: 5px;
  border-style: solid;
  border-width: thin;
  
  padding: 20px 30px;
  font-size: 16px;

  background-color: lightgray;

  color: #424242;
  
`;

export const Submit = styled.button`
  all: unset;

  width: 70px;
  height: 35px;
  
  text-align: center;
  border: 2px solid;
  border-style: solid;
  border-color: black;
  border-width: thin;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;

  cursor: pointer;

  margin-bottom: 20px;
`;