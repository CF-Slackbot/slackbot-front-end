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
          "rgba(255,90,90, 1)",
          "rgba(255,90,90, 0.5)",
          "rgba(165,220,105, 1)",
          "rgba(165,220,105, 0.5)",
          "rgba(121,150,247, 1)",
          "rgba(121,150,247, 0.5)",
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
