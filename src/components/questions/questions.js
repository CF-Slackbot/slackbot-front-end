import React, { useState, useCallback, useEffect } from 'react';
import useAjax from '../../hooks/ajax.js';

const Questions = () => {

  const [list, setList] = useState([]);
  const { setOptions, response } = useAjax();
  const qAPI = "https://cf-slackbot-questions-api.herokuapp.com/questions"

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

  console.log('list', list);

  return (
    <>
    <h1>Questions</h1>
    </>
  )
}

export default Questions;