import React, { useState, useCallback, useEffect } from 'react';
import useAjax from '../../hooks/ajax.js';
import QuestionsForm from './questions-form'

const Questions = () => {

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

  useEffect(getQuestions, []);

  useEffect(() => {
    if (response){
      response && setList(response);
    } 
  }, [response]);

  const addQuestion = async(val) => {
    const options = {
      method: 'post',
      url: qAPI, 
      data: val
    } 
    await setOptions(options)
  }

  console.log('list', list);

  return (
    <>
      <h1>Questions</h1>
      <QuestionsForm addQuestion={addQuestion}/>
    </>
  )
}

export default Questions;