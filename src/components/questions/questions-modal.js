import React, { useState, useContext, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import QuestionsEditForm from './questions-edit-form.js';
import { SettingsContext } from '../../context/settings';
// import useAjax from '../../hooks/ajax.js';
import axios from 'axios';

const QuestionsModal = props => {
  const context = useContext(SettingsContext);

  // const [list, setList] = useState([]);
  // const { setOptions, response } = useAjax();
  const qAPI =
    'https://cf-slackbot-questions-api.herokuapp.com/api/v2/question';

  const updateQuestion = async val => {
    console.log('WHAT IS ON VAL?', val);
    let tagValues = val.tags ? val.tags.replace(' ', '').split(',') : null;
    let newTagArr = val.tag
      ? tagValues.map(item => {
          name: item;
        })
      : null;

    if (val.difficulty === '1') {
      val.difficulty = 'Easy';
    } else if (val.difficulty === '2') {
      val.difficulty = 'Medium';
    } else if (val.difficulty === '3') {
      val.difficulty = 'Hard';
    } else {
      val.difficulty = 'Easy';
    }

    const options = {
      method: 'put',
      url: `${qAPI}/${val._id}`,
      mode: 'no-cors',
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
    try {
      const res = await axios(options);
      console.log('useAjax response:', res.data);
    } catch (error) {
      console.error('useAjax error:', error);
    }
    // await setOptions(options);
    // on successful update of the api it should update the list of questions again - either call out to get or update the list in state with newList = newlist.find(!updatedItem) - newList.push(options.data) setList(newList);
    context.changeModalDisplay(false);
  };

  return (
    <Modal
      show={context.showModal}
      onHide={() => context.changeModalDisplay(false)}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionsEditForm
          updateQuestion={updateQuestion}
          question={props.question}
          getQuestions={props.getQuestions}
        />
      </Modal.Body>
    </Modal>
  );
};

export default QuestionsModal;
