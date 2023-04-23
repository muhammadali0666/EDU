import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const FunnelGraphsTabs = styled(Nav)`
  .funnel-graph-item {
    transition: all 0.2s linear;
    box-sizing: border-box !important;
    background-color: transparent;
    overflow: hidden;
    .funnel-graph-link {
      padding: 0;
      width: 100%;
      background-color: transparent;
      color: #8d8b8b;
      font-weight: 500;
      transition: all 0.2s linear;
      &.active {
        color: #004bd6;
        .funnel-graph-tab-icon {
          svg {
            path {
              fill: #004bd6;
            }
          }
        }
      }
    }
  }
`;
