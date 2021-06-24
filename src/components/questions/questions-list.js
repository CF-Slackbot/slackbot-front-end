import React, { useState, useCallback, useEffect, useContext } from 'react';
import QuestionsModal from './questions-modal.js';
import { SettingsContext } from '../../context/settings.js';
import { ListGroup, Button } from 'react-bootstrap';

const QuestionsList = props => {
  const context = useContext(SettingsContext);
  const [question, setQuestion] = useState('');

  const updateItem = e => {
    let selectedItem = props.questionsList.filter(
      item => item._id == e.target.value
    );
    setQuestion(selectedItem[0]);
    context.changeModalDisplay(true);
    // updateQuestion(selectedItem);
  };

  // const updateQuestion = async user => {
  //   try {
  //     const options = {
  //       method: 'patch',
  //       url: `${API}/${selectedUser.user_id}`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //       },
  //       data: {
  //         user_metadata: {
  //           role: user.role,
  //         },
  //       },
  //     };
  //     setOptions(options);
  //     context.changeModalDisplay(false);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  return (
    <>
      <ListGroup>
        {props.questionsList.map((item, index) => (
          <ListGroup.Item key={index} action as='li'>
            {item.question}
            <span className='delete-edit-btn'>
              <Button
                variant='outline-danger'
                className='x'
                onClick={() => props.deleteQuestion(item._id)}
              >
                X
              </Button>
              <Button
                variant='outline-success'
                onClick={updateItem}
                value={item._id}
              >
                edit
              </Button>
            </span>
          </ListGroup.Item>
        ))}
        <QuestionsModal question={question} getQuestions={props.getQuestions} />
      </ListGroup>
    </>
  );
};

export default QuestionsList;
