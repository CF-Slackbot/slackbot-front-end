import React, { useState, useCallback, useEffect, useContext } from "react";
import QuestionsModal from "./questions-modal.js";
import { SettingsContext } from "../../context/settings.js";
import { ListGroup, Button } from "react-bootstrap";

const QuestionsList = (props) => {
  const context = useContext(SettingsContext);
  const [question, setQuestion] = useState('');

  const updateItem = (e) => {
    console.log('updateItem in questions-list [question]', question);
    let selectedItem = props.questionsList.filter(
      (item) => item._id == e.target.value
    );
    console.log("here is selectedItem <<<<<<<<===============", selectedItem);
    setQuestion(selectedItem[0]);
    context.changeModalDisplay(true);
  };

  console.log('OUTSIDE FUNCTION in questions-list [question]', question);

  return (
    <>
      <ListGroup>
        {props.questionsList.map((item, index) => (
          <ListGroup.Item key={index} action>
            {item.question}
            <span className="delete-edit-btn">
              <Button variant="outline-danger" className="x" onClick={() => props.deleteQuestion(item._id)}>X</Button>
              <Button variant="outline-success" onClick={updateItem} value={item._id}>edit</Button>
            </span>
          </ListGroup.Item>
        ))}
        <QuestionsModal question={question} />
      </ListGroup>
    </>
  );
};

export default QuestionsList;
