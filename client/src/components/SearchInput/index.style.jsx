import styled from "styled-components";

export const StyledSearchInput = styled.div`
  display: flex;
  border-radius: 6px;

  overflow: hidden;
  position: relative;
  .searchIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
  }
  .custom-input-all {
    padding: 9px 24px 9px 40px;
    width: 13rem;
    border-radius: 6px;
    min-width: 250px;
    font-weight: 500;
    font-size: 1rem;
    border: 1px solid #ddd;
    line-height: 1.5;
    background-color: #fff;
    transition: color 0.2s ease;
    color: #666;

    &::placeholder {
      font-weight: 400;
    }
  }
  .custom-input-all:focus-visible {
    outline: none !important;
  }
  .input-label {
    font-size: 15px;
    color: #666;
    letter-spacing: -0.02em;
  }
`;
