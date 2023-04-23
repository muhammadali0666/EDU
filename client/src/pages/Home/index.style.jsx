import { Link } from "react-router-dom";
import styled from "styled-components"


export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 20px;
`;

export const Card = styled(Link)`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: .3s;
  font-weight: 600;

  &:hover {
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  }

  svg {
    font-size: 45px;
    padding: 10px;
    border-radius: 50%;
  }
`;

export const CardNum = styled.span`
  font-size: 24px;
`;

export const CardName = styled.span`
  font-size: 14px;
`