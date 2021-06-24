import React, { useState } from "react";
import { Form, Card, Button, Badge } from "react-bootstrap";
import useForm from "../../hooks/form";

const QuestionsForm = (props) => {
  // const [ handleSubmit, handleChange, values ] = useForm(props.addQuestion);
  const [handleSubmit, handleChange, values] = useForm(props.addQuestion);
  const [inputFields, setInputFields] = useState([]);
  const [validated, setValidated] = useState(false);

  const answerLettersArr = ["A", "B", "C", "D", "E", "F"];

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Please fill in all required* fields')
      return;
    }
    setValidated(true);
    handleSubmit(event);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ answerOption: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].answerOption = event.target.value;
    setInputFields(values);
    handleChange(event);
  };

  return (
    <Card className="form-card">
      <Form onSubmit={handleSubmit2} noValidate validated={validated}>
        <Form.Group controlId="exampleForm.ControlInput1" required>
          <Form.Label>Question*</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            placeholder="Enter a new question"
            name="question"
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category*</Form.Label>
          <Form.Control
            as="select"
            name="category"
            onChange={handleChange}
            required
          >
            <option key="blankChoice" hidden value>
              {" "}
              Select your category...{" "}
            </option>
            <option key="HTML" value="HTML">
              HTML
            </option>
            <option key="CSS" value="CSS">
              CSS
            </option>
            <option key="JavaScript" value="JavaScript">
              JavaScript
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label style={{ display: "block" }}>Difficulty</Form.Label>
          <Form.Control
            type="range"
            min="1"
            max="3"
            name="difficulty"
            onChange={handleChange}
            defaultValue="1"
            style={{ width: "100%" }}
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Answer Options*</Form.Label>
          <Form.Control
            type="text"
            name="answer_a"
            key="answer_a"
            placeholder="Enter an anwer"
            onChange={handleChange}
            required
          />
          <Form.Control
            type="text"
            name="answer_b"
            key="answer_b"
            placeholder="Enter an answer"
            onChange={handleChange}
            required
          />
          <Badge
            // className="btn btn-link"
            type="button"
            onClick={() => handleAddFields()}
            style={{
              backgroundColor: "#0275d8",
              marginTop: "3px",
              marginBottom: "3px",
            }}
          >
            +
          </Badge>      
            {inputFields.map((inputFields, index) => (
            <>
              <Form.Control
                type="text"
                key={`${inputFields}~${index}`}
                placeholder="Enter an answer"
                value={inputFields.answerOption}
                onChange={(event) => handleInputChange(index, event)}
                name={`answer_${answerLettersArr[index + 2].toLowerCase()}`}
                // required
              />
              <Badge
                // className="btn btn-link"
                type="button"
                onClick={() => handleAddFields()}
                style={{
                  backgroundColor: "#0275d8",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
              >
                +
              </Badge>{" "}
              <Badge
                // className="btn btn-link"
                type="button"
                onClick={() => handleRemoveFields(index)}
                style={{
                  backgroundColor: "#d9534f",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
              >
                -
              </Badge>
            </>
          ))}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Correct Answer*</Form.Label>
          <fieldset>
            <Form.Check
              type="radio"
              label={answerLettersArr[0]}
              key="A"
              name="correct_answer"
              value={`answer_${answerLettersArr[0].toLowerCase()}`}
              onChange={handleChange}
              required
            />
            <Form.Check
              type="radio"
              label={answerLettersArr[1]}
              key="B"
              name="correct_answer"
              value={`answer_${answerLettersArr[1].toLowerCase()}`}
              onChange={handleChange}
              required
            />
            {inputFields.map((item, index) => (
              <Form.Check
                type="radio"
                label={answerLettersArr[index + 2]}
                key={`${item}~${index}`}
                name="correct_answer"
                value={`answer_${answerLettersArr[index + 2].toLowerCase()}`}
                onChange={handleChange}
                // required
              />
            ))}
          </fieldset>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="tags"
            onChange={handleChange}
            placeholder="separate your tags with commas"
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "9px" }}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default QuestionsForm;
