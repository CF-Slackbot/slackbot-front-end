import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';

const AdminForm = (props) => {

  const [ handleSubmit, handleChange ] = useForm(props.addUser)

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter user email" name="email" required isInvalid/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Temp Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" placeholder="Enter temporary password" name="password" required isInvalid/>
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
          />
          <Form.Check
            type="radio"
            label="Faculty"
            key="faculty"
            name="role"
            value="faculty"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Teachers Assistant"
            key="ta"
            name="role"
            value="ta"
            onChange={handleChange}
          />
        </fieldset>
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  )

}

export default AdminForm
