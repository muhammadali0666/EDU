import styled from "styled-components";

export const LoginForm = styled.div`
  padding: 50px 50px;
  text-align: center;
  margin-top: 100px;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
`;

export const LoginFormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 13px 16px;
  outline: none;
  background-color: rgb(245, 248, 250);
  border: 1px solid rgb(245, 248, 250);
`;

export const LoginFormBtn = styled.button`
  width: 100%;
  padding: 13px 16px;
  border-radius: 8px;
  background-color: #1403fffb;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:active {
    background-color: rgba(20, 3, 255, 0.6);
  }
`;

export const Error = styled.p`
  color: rgb(255, 0, 0);
`