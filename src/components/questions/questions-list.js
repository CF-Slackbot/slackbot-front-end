import React, { useState, useCallback, useEffect, useContext } from 'react';
import useAjax from '../../hooks/ajax.js';
import { Form, Card, Button } from 'react-bootstrap';
import useForm from '../../hooks/form';
import changeQuestionsModal, { SettingsContext } from '../../context/settings'

const QuestionsList = (props) => {

  const context = useContext(SettingsContext)
  const [list, setList] = useState([]);
  const { setOptions, response } = useAjax();
  const qAPI = "https://cf-slackbot-questions-api.herokuapp.com/api/v2/question"

  const getQuestions = useCallback(async() => {
  const options = {
    method: 'get',
    url: qAPI
  };
  setOptions(options)
  },[setOptions])

  // const updateQuestion = async() => {
  //   const options = {
  //     method: 'put',
  //     url: qAPI
  //   };
  //   setOptions(options)
  // }

  // const displayModal = () => {
  //   changeQuestionsModal(true)
  // }

  return(
    <>
      {/* <h1>test</h1> */}
      <ul>
        {props.questionsList.map((item, index) => (
          <li key={index}>
            {item.question}
            <button onClick={()=>props.deleteQuestion(item._id)}>X</button>
            <button onClick={()=>context.changeQuestionsModal(true)}>edit</button>
          </li>
        ))}
      </ul>
    </>
  )
  
}

export default QuestionsList