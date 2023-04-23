import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components"

const hoverAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }
  
  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

export const Aside = styled.aside`
  height: calc(100vh - 81px);
  overflow-y: auto;
  position: fixed;
  top: 81px;
  left: 0;
  height: calc(100vh - 81px);
  border-top: 1px solid #ddd;
`

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 25px;
  height: max-content;
`;

export const MenuLink = styled.div`
  width: max-content;
`;

export const MenuLinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;

  &:hover {
    color: #3d68ff
  }
  
  &:hover svg {
    animation: 0.25s linear 0s 1 reverse none running ${hoverAnimation};
  }
  
  & svg {
    font-size: 25px;
  }
  
  &:hover + .menu__sublinks-wrapper {
    opacity: 1;
    pointer-events: all;
  }
`;

