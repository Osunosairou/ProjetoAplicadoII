import { styled } from '../../styles/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
`;

export const LoginFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Submit = styled.button`
  all: unset;

  margin-top: 10px;
  width: 60px;
  height: 25px;
  
  text-align: center;
  border: 2px solid;
  border-color: gray;
  border-radius: 5px;
  font-size: 14px;

  cursor: pointer;
`;