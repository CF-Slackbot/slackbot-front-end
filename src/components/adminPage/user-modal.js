import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';

import { SettingsContext } from '../../context/settings'

const UserModal = (props) => {

  const context = useContext(SettingsContext);
  const [handleSubmit, handleChange, values] = useForm(props.updateUser);

  return (

    <Modal
      show={context.showModal}
      onHide={() => context.changeModalDisplay(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className="modal-header"
        closeButton
        closeLabel=''
      >
        <Modal.Title >Update Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className='modal-form'>
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
          <Button className="modal-submit-btn" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default UserModal;