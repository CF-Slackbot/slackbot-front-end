import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import useForm from '../../hooks/form'

const QuestionsForm = (props) => {

  const [ handleSubmit, handleChange, values ] = useForm(props.addQuestion)
  const [ inputFields, setInputFields ] = useState([{ answerOption: '' }])

  const answerLettersArr = ['A', 'B', 'C', 'D', 'E', 'F']

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ answerOption: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].answerOption = event.target.value;
    setInputFields(values);
  };

  // const handleAnswerOption = e => {
  //   e.preventDefault();
  //   console.log("inputFields", inputFields);
  // };

  return(
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Questions</Form.Label>
        <Form.Control type="text" placeholder="Enter a new question" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select">
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control type="range" min="1" max="3" name="difficulty"/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Answer Options</Form.Label>
          <Form.Control type="text" name="" placeholder="Enter a new question" />
          <Form.Control type="text" placeholder="Enter a new question" />
            <button
              className="btn btn-link"
              type="button"
              onClick={() => handleAddFields()}
            >
              +
            </button>
          {inputFields.map((inputFields, index) => ( 
            <>
              <Form.Control 
                type="text" 
                key={`${inputFields}~${index}`} 
                placeholder="Enter a new question"
                value={inputFields.answerOption}
                onChange={event => handleInputChange(index, event)} 
              />
              <button
                className="btn btn-link"
                type="button"
                onClick={() => handleRemoveFields(index)}
              >
                -
              </button>
            </>
          ))}
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Correct Answeer</Form.Label>
        <fieldset>
          <Form.Check
            type='radio'
            label={answerLettersArr[0]}
            name='answer'
          />
          <Form.Check
            type='radio'
            label={answerLettersArr[1]}
            name='answer'
          />
          {inputFields.map((item, index) => (
            <Form.Check
              type='radio'
              label={answerLettersArr[index+2]}
              key={`${item}~${index}`}
              name='answer'
            />
          ))}
          </fieldset>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tags</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  )

}

export default QuestionsForm