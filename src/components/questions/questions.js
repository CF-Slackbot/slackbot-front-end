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
    let tagValues = val.tags ? val.tags.replace(' ', '').split(',') : null
    let newTagArr = val.tag? tagValues.map( item => {name: item}) : null

    if(val.difficulty === '1') {
      val.difficulty = 'Easy'
    } else if(val.difficulty === '2'){
      val.difficulty = 'Medium'
    } else if(val.difficulty === '3'){
      val.difficulty = 'Hard'
    } else {
      val.difficulty = 'Easy'
    }

    const options = {
      method: 'post',
      url: qAPI, 
      data: {
        question: val.question,
        answers:{
          answer_a: val.answer_a,
          answer_b: val.answer_b,
          answer_c: val.answer_c ? val.answer_c : null,
          answer_d: val.answer_d ? val.answer_d : null,
          answer_e: val.answer_e ? val.answer_e : null,
          answer_f: val.answer_f ? val.answer_f : null,          
        },
        correct_answer: val.correct_answer, 
        tags: newTagArr, 
        category: val.category,
        difficulty: val.difficulty
      }
    } 
    await setOptions(options)
  }

  // console.log('list', list);

  return (
    <>
      <h1>Questions</h1>
      <QuestionsForm addQuestion={addQuestion}/>
    </>
  )
}

export default Questions;