import styled from '@emotion/styled';

export const MessageText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 24px;
  width: 500px;
  height: 70px;
  background-color: white;
  border-radius: ${({ theme }) => {
    return theme.inputBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
  text-align: center;
`;
