import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  border-radius: ${({ theme }) => {
    return theme.inputBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: ${({ theme }) => {
    return theme.colors.buttonBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.buttonBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};

  font-size: 14px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
