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
          <td style={{ backgroundColor: "rgba(255,90,90, 1)" }}>
            {props.html - props.iHtml}
          </td>
          <td style={{ backgroundColor: "rgba(165,220,105, 1)" }}>
            {props.css - props.iCss}
          </td>
          <td style={{ backgroundColor: "rgba(121,150,247, 1)" }}>
            {props.js - props.iJs}
          </td>
        </tr>
        <tr>
          <td>Incorrect Questions</td>
          <td style={{ backgroundColor: "rgba(255,90,90, 0.5)" }}>
            {props.iHtml}
          </td>
          <td style={{ backgroundColor: "rgba(165,220,105, 0.5)" }}>
            {props.iCss}
          </td>
          <td style={{ backgroundColor: "rgba(121,150,247, 0.5)" }}>
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
