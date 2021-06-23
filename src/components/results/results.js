import React, { useState, useEffect, useCallback } from "react";
import useAjax from "../../hooks/ajax.js";

const Results = () => {
  const [list, setList] = useState([]);
  const { setOptions, response } = useAjax();
  const rAPI = "https://cf-slackbot-questions-api.herokuapp.com/api/v2/result";
  let resultData = Array.from(list);

  const getResults = useCallback(async () => {
    const options = {
      method: "get",
      url: rAPI,
    };
    setOptions(options);
  }, [setOptions]);

  useEffect(getResults, []);
  useEffect(() => {
    if (response) {
      response && setList(response);
    }
  }, [response]);

  const convertToObj = (array, property) => {
    return array.reduce(function (obj, item) {
      obj[item[property]] = obj[item[property]] || [];
      obj[item[property]].push(item);
      return obj;
    }, Object.create(null));
  };

  let users = convertToObj(resultData, `user`);
  let userArray = Object.keys(users);
  // console.table(list)
  // console.table(users);
  // console.log(resultData)
  // console.log(convertToObj(resultData,'questions'))
  let countQs = (user, cat) => {
    if (!user) return;
    let count = 0;
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (user[i].questions[j].category === cat) count += 1;
      }
    }
    return count;
  };

  let incorrectQ = (user, cat) => {
    if (!user) return;
    let count = 0;
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i].incorrectQ.length; j++) {
        if (user[i].incorrectQ[j].category === cat) count += 1;
      }
    }
    return count;
  };

  let findQNum = (arr,cat) => {
    if(!arr) return
    // return arr[0].questions[0].category
    let count = 0
    for(let i =0;i<arr.length;i++){
      for(let j = 0; j<5;j++){
        if(arr[i].questions[j].category===cat) count +=1
      }
    }
    return count
  }


  // console.log(countQs(users["yjoo.eyoo"], "HTML"));
  // console.log(incorrectQ(users["yjoo.eyoo"], "HTML"));
  console.log(findQNum(resultData,'CSS'))

  return (
    <>
      <h1>results</h1>
      <ul>
        {userArray.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default Results;
