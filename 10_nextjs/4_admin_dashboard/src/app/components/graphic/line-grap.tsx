"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Order } from "@/app/types";

interface LineGraphProps {
  orders: Order[];
}

const LineGraph: FC<LineGraphProps> = ({ orders }) => {
  const labels = orders.map((order) => order.order_date);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: orders.map((order) => order.total_price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line
        data={data}
        options={{ responsive: true }}
        className="!w-full !h-full"
      />
    </div>
  );
};

export default LineGraph;
