import React, { useState, useEffect, useCallback } from "react";
import useAjax from "../../hooks/ajax.js";

const Results = () => {
  const [list, setList] = useState([]);
  const { setOptions, response } = useAjax();
  const rAPI = "https://cf-slackbot-questions-api.herokuapp.com/api/v2/result";
  let resultData = Array.from(list)

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

  const convertToObj = (array,property) => {
    return array.reduce(function (obj, item) {
      obj[item[property]] = obj[item[property]] || [];
      obj[item[property]].push(item);
      return obj;
    }, Object.create(null));
  };
  // let result = list.map(x=>x)
  // for (let i = 0; i < list.length; i++) {
  //   resultData.push(list[i]);
  // }
  let users = convertToObj(resultData,`user`);
  let userArray = Object.keys(users);
  // console.table(list)
  // console.table(users);
  console.log(users)

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

