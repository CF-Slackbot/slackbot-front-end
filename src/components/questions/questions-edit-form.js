import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
// import useForm from '../../hooks/form';
import { If, Then } from 'react-if';

const QuestionsEditForm = props => {

  // const [inputFields, setInputFields] = useState([]);
  // const [modalFields, setModalFields] = useState(props.question);
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(props.question)

  const answerLettersArr = ['A', 'B', 'C', 'D', 'E', 'F'];

  const handleChange = (e) => {
    setValues(values => ({...values, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (event) => {
    console.log("FORM HANDLE SUBMIT", event)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Please fill in all required* fields')
      return;
    }
    setValidated(true);
    props.updateQuestion(values);
    event.target.reset();
  };

  return (
    <Card className="form-card">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Question</Form.Label>
          <Form.Control
            onChange={handleChange}
            as='textarea'
            defaultValue={props.question.question}
            name='question'
            required
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as='select'
            name='category'
            onChange={handleChange}
            required
            defaultValue={props.question.category}
          >
            <option key='blankChoice' hidden value>
              {' '}
              Select your category...{' '}
            </option>
            <option key='HTML' value='HTML'>
              HTML
            </option>
            <option key='CSS' value='CSS'>
              CSS
            </option>
            <option key='JavaScript' value='JavaScript'>
              JavaScript
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='formBasicRange'>
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            type='range'
            min='1'
            max='3'
            name='difficulty'
            onChange={handleChange}
            defaultValue={props.question.difficulty}
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput2'>
          <Form.Label>Answer Options</Form.Label>
          <Form.Control
            type='text'
            name='answer_a'
            key='answer_a'
            defaultValue={props.question.answers.answer_a}
            onChange={handleChange}
            style={{marginBottom:'6px'}}
            required
          />
          <Form.Control
            type='text'
            name='answer_b'
            key='answer_b'
            defaultValue={props.question.answers.answer_b}
            onChange={handleChange}
            required
            
          />
          <If condition={props.question.answers.answer_c}>
            <Form.Control
              type='text'
              name='answer_c'
              key='answer_c'
              defaultValue={props.question.answers.answer_c}
              onChange={handleChange}
              required
            />
          </If>
          <If condition={props.question.answers.answer_d}>
            <Form.Control
              type='text'
              name='answer_d'
              key='answer_d'
              defaultValue={props.question.answers.answer_d}
              onChange={handleChange}
              required
            />
          </If>
          <If condition={props.question.answers.answer_e}>
            <Form.Control
              type='text'
              name='answer_e'
              key='answer_e'
              defaultValue={props.question.answers.answer_e}
              onChange={handleChange}
              required
            />
          </If>
          <If condition={props.question.answers.answer_f}>
            <Form.Control
              type='text'
              name='answer_f'
              key='answer_f'
              defaultValue={props.question.answers.answer_f}
              onChange={handleChange}
              required
            />
          </If>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect2'>
          <Form.Label>Correct Answer</Form.Label>
          <fieldset>
            <Form.Check
              type='radio'
              label={answerLettersArr[0]}
              key='A'
              name='correct_answer'
              checked={
                props.question.correct_answer ===
                `answer_${answerLettersArr[0].toLowerCase()}`
              }
              value={`answer_${answerLettersArr[0].toLowerCase()}`}
              onChange={handleChange}
            />
            <Form.Check
              type='radio'
              label={answerLettersArr[1]}
              key='B'
              name='correct_answer'
              checked={
                props.question.correct_answer ===
                `answer_${answerLettersArr[1].toLowerCase()}`
              }
              value={`answer_${answerLettersArr[1].toLowerCase()}`}
              onChange={handleChange}
            />
            <If condition={props.question.answers.answer_c}>
              <Form.Check
                type='radio'
                label={answerLettersArr[2]}
                key='C'
                name='correct_answer'
                checked={
                  props.question.correct_answer ===
                  `answer_${answerLettersArr[2].toLowerCase()}`
                }
                value={`answer_${answerLettersArr[2].toLowerCase()}`}
                onChange={handleChange}
              />
              </If>
              <If condition={props.question.answers.answer_d}>
              <Form.Check
                type='radio'
                label={answerLettersArr[3]}
                key='C'
                name='correct_answer'
                checked={
                  props.question.correct_answer ===
                  `answer_${answerLettersArr[3].toLowerCase()}`
                }
                value={`answer_${answerLettersArr[3].toLowerCase()}`}
                onChange={handleChange}
              />
              </If>
              <If condition={props.question.answers.answer_e}>
              <Form.Check
                type='radio'
                label={answerLettersArr[4]}
                key='C'
                name='correct_answer'
                checked={
                  props.question.correct_answer ===
                  `answer_${answerLettersArr[4].toLowerCase()}`
                }
                value={`answer_${answerLettersArr[4].toLowerCase()}`}
                onChange={handleChange}
              />
              </If>
              <If condition={props.question.answers.answer_f}>
              <Form.Check
                type='radio'
                label={answerLettersArr[5]}
                key='C'
                name='correct_answer'
                checked={
                  props.question.correct_answer ===
                  `answer_${answerLettersArr[5].toLowerCase()}`
                }
                value={`answer_${answerLettersArr[5].toLowerCase()}`}
                onChange={handleChange}
              />
              </If>
          </fieldset>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='tags'
            onChange={handleChange}
            placeholder='separate your tags with commas'
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Card>
  );
};

export default QuestionsEditForm;
