"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineGraph: FC = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [3, 2, 10, 1, 9, 10, 3, 3, 10],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [9, 1, 5, 1, 2, 5, 9, 2, 5, 9],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default LineGraph;
