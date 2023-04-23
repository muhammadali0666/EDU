import styled from "styled-components";

export const NewSelectStyled = styled.div`
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
  .form-view .drop-down-list-container {
    width: 100% !important;
  }
  .form-view .search-option {
    width: 100% !important;
  }
  .form-view .drop-down-header {
    display: flex;
    justify-content: space-between;
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
    padding: 0;
    padding: 0.575rem 1rem 0.575rem 1rem;
    gap: 12px;
    color: #888;
  }

  .drop-down-list-container {
    width: auto;
    transition: 0.4s ease;
    position: absolute;
    right: 0;
    background: white;
    margin: 0 !important;
    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
    border-radius: 0.475rem;
    padding: 1rem 0;
    z-index: 100001;
    .search-input-content {
      margin-bottom: 5px;
      padding: 0 10px;
      width: 100%;
      .search-option {
        width: 100%;
        font-size: 14px;
        padding: 0.3rem 0.5rem;
        border: 1px solid #666;
        border-radius: 5px;
        outline: none;
      }
    }
  }

  .drop-down-list {
    width: 100%;
    overflow-y: auto;
    cursor: pointer;
    &::-webkit-scrollbar {
      width: 4px !important;
    }

    &::-webkit-scrollbar-track {
      background: blue !important;
    }

    &::-webkit-scrollbar-thumb {
      background: #999 !important;
    }
  }
  .list-name {
    color: #666 !important;
    font-size: 1rem;
    font-weight: 500;
  }
  .list-item:hover {
    background: #ddd !important;
    color: blue !important;
  }
  .list-item.active {
    background: #ddd !important;
    color: blue !important;
  }

  .list-wrapper {
    position: relative;
  }

  .list-item {
    padding: 0.75rem 2rem 0.75rem 1rem;
    color: #666 !important;
    font-size: 14px;
    transition: color 0.2s ease;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .delete-filter {
    font-size: 12px;
    font-weight: 800;
    color: #666;
  }

  .options-header {
    position: absolute;
    z-index: 5;
    top: 0;
  }
`;
