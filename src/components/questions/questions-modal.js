import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import QuestionsForm from './questions-form.js';
import { SettingsContext } from '../../context/settings'

const QuestionsModal = (props) => {

  const context = useContext(SettingsContext);

  return (

    <Modal
      show={context.showModal}
      onHide={() => context.changeModalDisplay(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionsForm />
      </Modal.Body>
    </Modal>
  )
}

export default QuestionsModal;