// Chart.jsx
import React from "react";
import { RadialChart } from "react-vis";

const ChartComponent = ({ userCount }) => {
  const data = [{ angle: userCount, label: "User Count" }];

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <RadialChart
        data={data}
        width={300}
        height={300}
        showLabels
        labelsAboveChildren
      />
    </div>
  );
};

export default ChartComponent;
