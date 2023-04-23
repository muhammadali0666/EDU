const { TableCell } = require("@mui/material");
const { default: styled } = require("styled-components");

export const PhoneNumber = styled(TableCell)`
  position: relative;
  cursor: pointer;

  .number {
    background-color: ${({ color }) => color || ""};
    color: ${({ color }) => color ? "#fff" : ""};
    padding: 10px 20px;
    border-radius: 20px;
  }

  .phone_statuses {
    position: absolute;
    top: 80%;
    left: 0;
    border-radius: 10px;
    padding: 15px 20px;
    flex-direction: column;
    gap: 20px;
    display: ${({ active }) => active ? "flex" : "none"};
    background-color: #fff;
    z-index: 1;
    box-shadow: rgb(223 227 246) 0px 0px 10px;

    button {
      border: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .status-color {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
`