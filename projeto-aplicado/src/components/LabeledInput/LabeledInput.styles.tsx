import { styled } from '../../styles/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.label`
  color: gray;
`;

export const Input = styled.input`
  width: 200px;
  height: 35px;
  border: 2px solid;
  border-color: gray;
  border-radius: 5px;
  
  font-size: 16px;
  padding: 4px 8px;
`;