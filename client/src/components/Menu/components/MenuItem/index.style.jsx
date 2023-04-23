import styled from "styled-components";

export const SubLinksWrapper = styled.div`
  z-index: 100;
  background-color: #fff;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border-radius: 5px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -5px;
    border: 1px solid transparent;
    border-color: transparent transparent #ddd #ddd;
    transform: translateY(-50%) rotate(45deg);
  }
`;

export const SubLinksTitle = styled.p`
  padding: 10px 16px 0px;
  font-size: 15px;
  font-weight: 600;
`;

export const SubLinks = styled.ul`
  list-style-position: inside;
  padding: 10px 30px 10px 16px;
`;

export const SubLink = styled.li`
  padding: 8px 6px;
`