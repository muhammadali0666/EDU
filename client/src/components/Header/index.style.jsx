import styled from "styled-components";

export const HeaderTag = styled.header`
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: #fff;

  .MuiSelect-select {
    padding: 11px 13px;
  }
`;

export const HeaderLogo = styled.img`
  width: 160px;
  object-fit: contain;
`;

export const HeaderSide = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const HeaderSelect = styled.div`
  padding-left: 10px;
`;

export const HeaderBackBtn = styled.button`
  color: #333;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: .3s;

  svg {
    font-size: 30px;
    color: #555;
    transition: .3s;
  }

  &:hover svg {
    color: #3d68ff
  }

  &:hover {
    color: #3d68ff;
  }
`;

export const HeaderRightBtn = styled.button`
  font-size: 25px;
  transition: .3s;

  &:hover {
    color: #3d68ff
  }
`;

