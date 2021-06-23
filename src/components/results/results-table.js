import React from "react";
import { Table } from "react-bootstrap";
const ResultTable = (props) => {
  return (
    <Table
      bordered
      hover
      size="lg"
      style={{ backgroundColor: "#F5F5F5", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th></th>
          <th>HTML</th>
          <th>CSS</th>
          <th>JavaScript</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Correct Questions</td>
          <td style={{ backgroundColor: "rgba(255, 43, 0, 0.5)" }}>
            {props.html - props.iHtml}
          </td>
          <td style={{ backgroundColor: "rgba(0, 99, 255, 0.5)" }}>
            {props.css - props.iCss}
          </td>
          <td style={{ backgroundColor: "rgba(0, 255, 66, 0.5)" }}>
            {props.js - props.iJs}
          </td>
        </tr>
        <tr>
          <td>Incorrect Questions</td>
          <td style={{ backgroundColor: "rgba(255, 43, 0, 0.2)" }}>
            {props.iHtml}
          </td>
          <td style={{ backgroundColor: "rgba(0, 99, 255, 0.2)" }}>
            {props.iCss}
          </td>
          <td style={{ backgroundColor: "rgba(0, 255, 66, 0.2)" }}>
            {props.iJs}
          </td>
        </tr>
        <tr>
          <td>Total Questions</td>
          <td>{props.html}</td>
          <td>{props.css}</td>
          <td>{props.js}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ResultTable;
