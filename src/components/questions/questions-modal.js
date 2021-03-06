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
    console.log('WHAT IS ON val.tags?', val.tags);
    let tagValues;
    let newTagArr = [];
    if (val.tags == '' || !val.tags) newTagArr = [];
    else if (val.tags.includes(' ') && val.tags.includes(','))
      newTagArr = val.tags
        .replace(' ', '')
        .split(',')
        .map(item => {
          return {
            name: item,
          };
        });
    else if (val.tags.length > 0) newTagArr = val.tags;
    console.log('WHAT IS ON newTagArr?', newTagArr);

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
          answer_a: val.answer_a
            ? val.answer_a
            : props.question.answers.answer_a,
          answer_b: val.answer_b
            ? val.answer_b
            : props.question.answers.answer_b,
          answer_c: val.answer_c
            ? val.answer_c
            : props.question.answers.answer_c,
          answer_d: val.answer_d
            ? val.answer_d
            : props.question.answers.answer_d,
          answer_e: val.answer_e
            ? val.answer_e
            : props.question.answers.answer_e,
          answer_f: val.answer_f
            ? val.answer_f
            : props.question.answers.answer_f,
        },
        correct_answer: val.correct_answer
          ? val.correct_answer
          : props.question.correct_answer,
        tags: newTagArr ? newTagArr : props.question.tags,
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
    props.getQuestions();
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
        />
      </Modal.Body>
    </Modal>
  );
};

export default QuestionsModal;
