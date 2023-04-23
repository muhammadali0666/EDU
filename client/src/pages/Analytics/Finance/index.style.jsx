const { default: styled } = require("styled-components");

export const TabsContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  position: relative;

  button {
    padding: 6px 26px;
    border-radius: 5px;
    width: 120px;
    position: relative;
    z-index: 2;
    background-color: transparent;
    transition: .3s;
  }
`;

export const TabBg = styled.div`
  width: 120px;
  height: 100%;
  background-color: #009ef7;
  border-radius: 12px;
  position: absolute;
  top: 0;
  transition: .3s;
  left: ${({ active }) => (active * 120 + "px")} !important;
`;

export const ChartSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 20px;
`;

export const TableStyle = styled.div`
  border-radius: 12px 12px 0 0 !important;
  background-color: #fff;
  height: 95%;
  overflow: auto;
  position: relative;

  table {
    margin: 0 !important;
    padding: 0 !important;
    position: relative;
    & > :not(:first-child) {
      border-top: none !important;
    }
    &:last-child {
      border-radius: 12px !important;
    }
    & > :not(:first-child) {
      border-top: 1px solid #ccc !important;
    }
    tr {
      padding: 5px 20px;
    }
    th {
      color: #333;
      font-style: normal;
      font-weight: normal;
    }
    thead {
      position: sticky;
      top: 0;
      background-color: #fff;
      box-shadow: rgb(128 116 116 / 5%) 3px 5px 5px 1px;
    }
    tbody {
      tr {
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          background: #efefef;
        }
        th {
          border: none;
          padding: 9px;
        }
      }
    }
  }

  .not_found_text {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(50%);
    font-size: 20px;
  }
`;

