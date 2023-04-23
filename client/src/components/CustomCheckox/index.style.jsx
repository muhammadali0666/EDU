import styled from "styled-components";

export const CheckboxStyled = styled.div`
    border-radius: 6px;
    color: #666;
    border: none;
  .cbx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #666;
    transition: all 0.2s ease;
    background-color: #fff;
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: blue;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .cbx span:last-child {
    padding-left: 8px;
  }
  .cbx:hover span:first-child {
    border-color: blue;
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: blue;
    border-color: blue;
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
`;
