import React, { useEffect } from "react";
import { FunnelGraphStyled } from "./FunnelGraphComponent/index.style";
import FunnelGraph from "funnel-graph-js";

const FunnelGraphByCourse = ({ data }) => {
  const graph = new FunnelGraph({
    container: ".funnelGraphContainerByCourse",
    gradientDirection: "vertical",
    data: {
      labels: data.labels,
      values: data.values,
      colors: ["#90CAF9", "#42A5F5", "#1E88E5", "#0D47A1"],
    },
    displayPercent: true,
    direction: "vertical",
    height: 490,
    subLabelValue: "percent",
  });

  useEffect(() => {
    graph.draw();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FunnelGraphStyled className="funnelGraphContainerByCourse" />;
};

export default FunnelGraphByCourse;
