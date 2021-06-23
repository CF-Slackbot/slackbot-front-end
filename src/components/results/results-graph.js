/* App.js */
import React from "react";
import { Doughnut } from "react-chartjs-2";

const BarChart = (props) => {
  const doughnutData = {
    labels: [
      "Correct HTML",
      "Incorrect HTML",
      "Correct CSS",
      "Incorrect CSS",
      "Correct JavaScript",
      "Incorrect JavaScript",
    ],
    datasets: [
      {
        label: "Quiz Results",
        data: [
          props.html - props.iHtml,
          props.iHtml,
          props.css - props.iCss,
          props.iCss,
          props.js - props.iJs,
          props.iJs,
        ],
        backgroundColor: [
          "rgba(255, 43, 0, 0.5)",
          "rgba(255, 43, 0, 0.2)",
          "rgba(0, 99, 255, 0.5)",
          "rgba(0, 99, 255, 0.2)",
          "rgba(0, 255, 66, 0.5)",
          "rgba(0, 255, 66, 0.2)",
        ],

        hoverOffset: 8,
      },
    ],
  };

  return (
    <Doughnut
      data={doughnutData}
      width={600}
      height={600}
      options={{
        legend: { display: true },
        responsive: false,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default BarChart;
