import styled from '@emotion/styled';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  border-radius: ${({ theme }) => {
    return theme.inputBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
`;
