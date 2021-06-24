import React, { useState, useCallback, useEffect, useContext } from "react";
// import { Form, Card, Button } from 'react-bootstrap';
import QuestionsModal from "./questions-modal.js";
import { SettingsContext } from "../../context/settings.js";
import { ListGroup, Button } from "react-bootstrap";

const QuestionsList = (props) => {
  const context = useContext(SettingsContext);
  const [itemId, setItemId] = useState("");

  const updateItem = (e) => {
    // console.log(
    //   'here is e.target.value <<<<<<<<===============',
    //   e.target.value
    // );
    // console.log('here is itemId <<<<<<<<===============', itemId);
    let selectedItem = props.questionsList.filter(
      (item) => item._id == e.target.value
    );
    console.log("here is selectedItem <<<<<<<<===============", selectedItem);
    setItemId(selectedItem[0]);
    context.changeModalDisplay(true);
  };

  console.log("here is questionsList", props.questionsList);

  return (
    <>
      <ListGroup>
        {props.questionsList.map((item, index) => (
          <ListGroup.Item key={index} action>
            {item.question}
            <span className="delete-edit-btn">
              <Button variant="outline-danger" onClick={() => props.deleteQuestion(item._id)}>X</Button>{' '}
              <Button variant="outline-success" onClick={updateItem} value={item._id}>
                edit
              </Button>
            </span>
          </ListGroup.Item>
        ))}
        <QuestionsModal itemId={itemId} />
      </ListGroup>
    </>
  );
};

export default QuestionsList;
