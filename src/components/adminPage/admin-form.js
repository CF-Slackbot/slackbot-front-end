import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import useForm from "../../hooks/form";

const AdminForm = (props) => {
  const [handleSubmit, handleChange] = useForm(props.addUser);
  const [validated, setValidated] = useState(false);

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    handleSubmit(event);
  };

  return (
    <Card className="form-card">
      <Card.Body>
        <Form onSubmit={handleSubmit2} noValidate validated={validated}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            {/* <Form.Control onChange={handleChange} type="email" placeholder="Enter user email" name="email" required isInvalid/> */}
            <Form.Control
              onChange={handleChange}
              type="email"
              placeholder="Enter user email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Temp Password</Form.Label>
            {/* <Form.Control onChange={handleChange} type="password" placeholder="Enter temporary password" name="password" required isInvalid/> */}
            <Form.Control
              onChange={handleChange}
              type="password"
              placeholder="Enter temporary password"
              name="password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <fieldset>
              <Form.Check
                type="radio"
                label="Admin"
                key="admin"
                name="role"
                value="admin"
                onChange={handleChange}
                required
              />
              <Form.Check
                type="radio"
                label="Faculty"
                key="faculty"
                name="role"
                value="faculty"
                onChange={handleChange}
                required
              />
              <Form.Check
                type="radio"
                label="Teachers Assistant"
                key="ta"
                name="role"
                value="ta"
                onChange={handleChange}
                required
              />
            </fieldset>
          </Form.Group>
          <Button type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AdminForm;
