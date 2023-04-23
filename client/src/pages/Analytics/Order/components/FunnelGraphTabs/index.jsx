import React from "react";
import { Nav } from "react-bootstrap";
import { FUNNEL_GRAPH_TAB_LIST } from "./constants";
import { FunnelGraphsTabs } from "./index.style";

const FunnelGraphTabs = ({
  activeState,
  setActiveState,
}) => {
  const navItemClick = (state) => {
    if (activeState !== state) setActiveState(state);
  };

  return (
    <FunnelGraphsTabs variant="pills" className="mb-3">
      {FUNNEL_GRAPH_TAB_LIST.map((item, index) => {
        return (
          <Nav.Item
            key={index}
            className="funnel-graph-item me-4"
            onClick={() => navItemClick(item.state)}
          >
            <Nav.Link
              className="funnel-graph-link d-flex align-items-center"
              active={activeState === item.state}
            >
              <div className="me-2 funnel-graph-tab-icon">{item.icon}</div>
              {item.label}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </FunnelGraphsTabs>
  );
};

export default FunnelGraphTabs;
