import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';

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
    handleChange(event)
  };

  const handleTheSubmit = (event) => {
    console.log("VALUES", values)
    event.preventDefault()
    if(!values.category){
      alert("Please select a category");
    } else {
      handleSubmit(event)
    }
  }

  return(
    <Card style={{ width: '18rem' }}>
      <Form onSubmit={handleTheSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Question</Form.Label>
          <Form.Control onChange={handleChange} type="text" placeholder="Enter a new question" name="question" required isInvalid/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleChange} required isInvalid>
            <option key='blankChoice' hidden value> Select your category... </option>
            <option key='HTML' value="HTML">HTML</option>
            <option key='CSS' value="CSS">CSS</option>
            <option key='JavaScript' value="JavaScript">JavaScript</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range" min="1" max="3" name="difficulty" onChange={handleChange} defaultValue="1" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Answer Options</Form.Label>
            <Form.Control type="text" name="answer_a" key="answer_a" placeholder="Enter a new question" onChange={handleChange} required isInvalid/>
            <Form.Control type="text" name="answer_b" key="answer_b" placeholder="Enter a new question" onChange={handleChange} required isInvalid/>
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
                  name={`answer_${answerLettersArr[index+2].toLowerCase()}`}
                  required isInvalid
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
          <Form.Label>Correct Answer</Form.Label>
          <fieldset>
            <Form.Check
              type='radio'
              label={answerLettersArr[0]}
              key="A"
              name='correct_answer'
              value={`answer_${answerLettersArr[0].toLowerCase()}`}
              onChange={handleChange} 
            />
            <Form.Check
              type='radio'
              label={answerLettersArr[1]}
              key="B"
              name='correct_answer'
              value={`answer_${answerLettersArr[1].toLowerCase()}`}
              onChange={handleChange} 
            />
            {inputFields.map((item, index) => (
              <Form.Check
                type='radio'
                label={answerLettersArr[index+2]}
                key={`${item}~${index}`}
                name='correct_answer'
                value={`answer_${answerLettersArr[index+2].toLowerCase()}`}
                onChange={handleChange} 
              />
            ))}
            </fieldset>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tags</Form.Label>
          <Form.Control as="textarea" rows={3} name="tags" onChange={handleChange} placeholder="separate your tags with commas"/>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  )

}

export default QuestionsForm