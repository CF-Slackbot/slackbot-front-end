import React, { useState, useEffect, useContext } from "react";
import useAjax from "../../hooks/ajax.js";
import QuestionsForm from "./questions-form";
import QuestionsList from "./questions-list";
import Pagination from "../pagination.js";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Questions = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [list, setList] = useState([]);
  const { setOptions, response, options } = useAjax();
  const qAPI =
    "https://cf-slackbot-questions-api.herokuapp.com/api/v2/question";

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const questionsList = Array.from(list);

  const getQuestions = async () => {
    const options = {
      method: "get",
      url: qAPI,
    };
    setOptions(options);
  };

  const deleteQuestion = async (id) => {
    const newlist = list.filter((question) => question._id !== id);
    await axios({
      method: "delete",
      url: `${qAPI}/${id}`,
    });
    setList(newlist);
  };

  useEffect(getQuestions, []);

  useEffect(() => {
    if (options.method === "get") {
      setList(response);
    } else if (options.method === "post" || options.method === "put") {
      setList([...list, response]);
    }
  }, [response]);

  const addQuestion = async (val) => {
    let tagValues = val.tags ? val.tags.replace(" ", "").split(",") : null;
    let newTagArr = val.tag
      ? tagValues.map((item) => {
          name: item;
        })
      : null;

    if (val.difficulty === "1") {
      val.difficulty = "Easy";
    } else if (val.difficulty === "2") {
      val.difficulty = "Medium";
    } else if (val.difficulty === "3") {
      val.difficulty = "Hard";
    } else {
      val.difficulty = "Easy";
    }

    const options = {
      method: "post",
      url: qAPI,
      data: {
        question: val.question,
        answers: {
          answer_a: val.answer_a,
          answer_b: val.answer_b,
          answer_c: val.answer_c ? val.answer_c : null,
          answer_d: val.answer_d ? val.answer_d : null,
          answer_e: val.answer_e ? val.answer_e : null,
          answer_f: val.answer_f ? val.answer_f : null,
        },
        correct_answer: val.correct_answer,
        tags: newTagArr,
        category: val.category,
        difficulty: val.difficulty,
      },
    };
    await setOptions(options);
  };

  // for Pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = questionsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);
  if (isLoading) {
    return <Spinner animation="border" />
  }
  return (
    isAuthenticated && (
      <Container fluid>
        <h1>Questions</h1>
        <Row style={{ marginTop: "16px" }}>
          <Col>
            <QuestionsForm addQuestion={addQuestion} />
          </Col>
          <Col xs={8}>
            <QuestionsList
              questionsList={currentPosts}
              deleteQuestion={deleteQuestion}
              getQuestions={getQuestions}
            />
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={questionsList.length}
              setCurrentPage={paginate}
            />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Questions;
