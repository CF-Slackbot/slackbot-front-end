import React, { useState, useContext } from 'react';
import { Modal, Form, Card, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';
import QuestionsForm from './questions-form'
import changeQuestionsModal, { SettingsContext } from '../../context/settings'

const QuestionsModal = (props) => {

  const context = useContext(SettingsContext)

  return(
    <Modal show={true}>
      <QuestionsForm />
    </Modal>
  )
}

export default QuestionsModal;