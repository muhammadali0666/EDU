import styled from "styled-components";

export const TableStyle = styled.div`
  border-radius: 12px 12px 0 0 !important;
  background-color: #fff;
  height: 100%;
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

export const FunnelGraphConteiner = styled("div")`
  background-color: #fff;
`;

