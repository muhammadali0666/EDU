import styled from "styled-components";

export const FromToInputStyled = styled.div`
  .main {
    position: relative;
    min-width: 150px;
    background-color: #fff;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    border-radius: 6px;
    border: 1px solid #ddd;
  }

  .form-view { 
    box-shadow: none !important;
  }
  .form-view .main {
    width: 100%;
  }
  .form-view .drop-down-list-container-x {
    width: 100% !important;
  }
  .form-view .search-option {
    width: 100% !important;
  }
  .form-view .drop-down-header {
    border: 1px solid #777;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
  }

  .select-label {
    margin: auto;
    color: #666;
    font-size: 15px;
    padding: 8.5px 0 8.5px 15px;
  }
  .chevron {
    transition: 0.2s ease;
    margin-left: 1rem;
  }
  .chevron-rotate {
    transform: rotate(180deg);
  }
  .drop-down-container {
    margin: 0 auto;
  }

  .checkedIcon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
  }

  .drop-down-header {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    padding: 9.3px 15px 9.3px 15px;
    gap: 12px;
    color: #666 !important;
    justify-content: space-between;
  }

  /* .drop-down-list::-webkit-scrollbar {
  width: 0 !important;
} */
  .drop-down-list-container-x {
    margin-top: 4rem !important;
    box-shadow: 0 5px 25px 0 #ddd;
    /* margin-top: 0.5rem; */
    width: max-content;
    transition: 0.4s ease;
    position: absolute;
    right: 0;
    border-radius: 6px;
    z-index: 1000;
    background: white;
  }
  .drop-down-list-container-x .fromToForm {
    box-shadow: 0 5px 25px 0 #ddd;
    margin-top: -60px !important;
    width: max-content;
    transition: 0.4s ease;
    position: absolute;
    right: 0;
    border-radius: 6px;
    z-index: 1000;
    background: white;
  }

  .drop-down-list {
    min-width: 100%;
    max-height: 10rem;
    overflow-y: auto;
    width: max-content;
    cursor: pointer;
  }

  .drop-down-list::-webkit-scrollbar {
    width: 4px !important;
  }

  .drop-down-list::-webkit-scrollbar-track {
    background: #222 !important;
  }

  .drop-down-list::-webkit-scrollbar-thumb {
    background: #666 !important;
  }
  .list-item:hover {
    background: #ccc !important;
    color: blue !important;
  }
  .list-item.active {
    background: #ccc !important;
    color: blue !important;
  }

  .list-wrapper {
    position: relative;
  }

  .list-item {
    padding: 0.75rem 2rem 0.75rem 1rem;
    color: #222  !important;
    font-size: 14px;
    transition: color 0.2s ease;
  }

  .search-option:focus-visible {
    outline: 0 !important;
  }

  .options-header {
    position: absolute;
    z-index: 5;
    top: 0;
  }
  .search-option {
    max-width: 90%;
    font-size: 14px;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem 0.5rem;
    border: #ddd;
  }

  .multiple-header svg {
    margin-bottom: -5px;
  }
  .multiple-header span {
    padding: 0.3rem 0.4rem 0.4rem 0.4rem;
    margin-right: 0.3rem;
    margin-bottom: 0.2rem;
  }
  .delete-filter {
    font-size: 12px;
    font-weight: 800;
    color: #ccc;
  }
`;
