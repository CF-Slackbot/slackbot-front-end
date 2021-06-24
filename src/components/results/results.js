import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useAjax from "../../hooks/ajax.js";
import BarChart from "./results-graph.js";
import ResultTable from "./results-table.js";

const Results = () => {
  const [list, setList] = useState([]);
  const { setOptions, response } = useAjax();
  const rAPI = "https://cf-slackbot-questions-api.herokuapp.com/api/v2/result";
  let resultData = Array.from(list);

  const getResults = useCallback(async () => {
    const options = {
      method: "get",
      url: rAPI,
    };
    setOptions(options);
  }, [setOptions]);

  useEffect(getResults, []);
  useEffect(() => {
    if (response) {
      response && setList(response);
    }
  }, [response]);

  // const convertToObj = (array, property) => {
  //   return array.reduce(function (obj, item) {
  //     obj[item[property]] = obj[item[property]] || [];
  //     obj[item[property]].push(item);
  //     return obj;
  //   }, Object.create(null));
  // };

  // let users = convertToObj(resultData, `user`);

  let findQNum = (arr, cat) => {
    if (!arr) return;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i].questions[j].category === cat) count += 1;
      }
    }
    return count;
  };

  let incorrectQ = (arr, cat) => {
    if (!arr) return;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].incorrectQ.length; j++) {
        if (arr[i].incorrectQ[j].category === cat) count += 1;
      }
    }
    return count;
  };

  let cssQ = findQNum(resultData, "CSS");
  let inCorrectCssQ = incorrectQ(resultData, "CSS");
  let htmlQ = findQNum(resultData, "HTML");
  let inCorrectHtmlQ = incorrectQ(resultData, "HTML");
  let jsQ = findQNum(resultData, "JavaScript");
  let inCorrectJsQ = incorrectQ(resultData, "JavaScript");

  return (
    <Container fluid="md" maxwidth="sm">
      <h1>Results</h1>
      <h3>See how Code Fellows students are performing by category</h3>
      <Row>
        <Col>
          <BarChart
            css={cssQ}
            iCss={inCorrectCssQ}
            html={htmlQ}
            iHtml={inCorrectHtmlQ}
            js={jsQ}
            iJs={inCorrectJsQ}
          />
        </Col>
        <Col style={{ margin: "auto" }}>
          <ResultTable
            css={cssQ}
            iCss={inCorrectCssQ}
            html={htmlQ}
            iHtml={inCorrectHtmlQ}
            js={jsQ}
            iJs={inCorrectJsQ}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
