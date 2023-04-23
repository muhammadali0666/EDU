import styled, { keyframes } from "styled-components";

const visibliteAnimation = keyframes`
 0% {   opacity: 0; }


 100% {  opacity: 1 ; }
`;

export const FunnelGraphStyled = styled.div`
  width: 100%;
  animation-duration: 0.3s;
  animation-name: ${visibliteAnimation};
  .svg-funnel-js__labels {
    .svg-funnel-js__label {
      .label__value {
        color: #333 !important;
        font-size: 24px;
        font-weight: 500;
      }
      .label__title {
        color: #ddd !important;
      }
      .label__percentage {
        color: #ccc !important;
        font-weight: 500 !important;
      }
    }
  }
`;
