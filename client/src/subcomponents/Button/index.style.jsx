import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #009ef7;
  color: #fff;
  border: 0;
  transition: .3s;
  padding: 10px 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  outline: 0;
  font-weight: 500;
  height: max-content;
  width: max-content;

  &:hover {
    background-color: #26adf8;
  }

  svg {
    font-size: 18px;
  }
`
