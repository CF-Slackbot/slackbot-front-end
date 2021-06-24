import React, { useState, useCallback, useEffect, useContext } from 'react';
// import { Form, Card, Button } from 'react-bootstrap';
import QuestionsModal from './questions-modal.js';
import { SettingsContext } from '../../context/settings.js';

const QuestionsList = props => {
  const context = useContext(SettingsContext);
  const [itemId, setItemId] = useState('');

  const updateItem = e => {
    // console.log(
    //   'here is e.target.value <<<<<<<<===============',
    //   e.target.value
    // );
    // console.log('here is itemId <<<<<<<<===============', itemId);
    let selectedItem = props.questionsList.filter(
      item => item._id == e.target.value
    );
    console.log('here is selectedItem <<<<<<<<===============', selectedItem);
    setItemId(selectedItem[0]);
    context.changeModalDisplay(true);
  };

  console.log('here is questionsList', props.questionsList);

  return (
    <>
      <ul>
        {props.questionsList.map((item, index) => (
          <li key={index}>
            {item.question}
            <button onClick={() => props.deleteQuestion(item._id)}>X</button>
            <button onClick={updateItem} value={item._id}>
              edit
            </button>
          </li>
        ))}
        <QuestionsModal itemId={itemId} />
      </ul>
    </>
  );
};

export default QuestionsList;
