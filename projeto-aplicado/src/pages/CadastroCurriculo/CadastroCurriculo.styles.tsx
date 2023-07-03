import { styled } from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 80px;
`;

export const InputList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ResumeTitle = styled.h1`
`;

export const Resume = styled.textarea`
  width: 50%;
  height: 40%;
  
  border: 2px solid;
  border-color: gray;
  border-radius: 5px;
  
  padding: 20px 30px;
  font-size: 16px;
`;

export const Submit = styled.button`
  all: unset;

  width: 70px;
  height: 35px;
  
  text-align: center;
  border: 2px solid;
  border-color: gray;
  border-radius: 5px;
  font-size: 16px;

  cursor: pointer;
`;