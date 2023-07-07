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

export const DescriptionTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  color: white;

  @media (min-width: 600px) {
    font-size: 50px;
    color: white;
  }
`;

export const Description = styled.textarea`
  width: 50%;
  height: 40%;
  
  text-align: justify;
  border: 2px solid;
  border-color: black;
  border-style: solid;
  border-width: thin;
  border-radius: 5px;
  background-color: lightgray;

  padding: 20px 30px;
  font-size: 16px;
`;

export const Submit = styled.button`
  all: unset;

  width: 70px;
  height: 35px;
  
  text-align: center;
  border: 2px solid;
  border-color: black;
  border-style: solid;
  border-width: thin;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;

  cursor: pointer;
`;