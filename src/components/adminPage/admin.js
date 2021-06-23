import React, { useCallback, useEffect, useState } from 'react';
import useAjax from '../../hooks/ajax'
import AdminForm from './admin-form';
import Pagination from '../pagination.js';
import UserList from './user-list.js';

const Admin = () => {

  const [userList, setUserList] = useState([]);
  const { setOptions, response } = useAjax();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const usersList = Array.from(userList);

  const API = "https://dev-d6ditd3b.us.auth0.com/api/v2/users";
  const uAPI = process.env.REACT_APP_USER_URL;

  const getUsers = useCallback(async () => {
    const options = {
      method: 'get',
      url: uAPI,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    };
    setOptions(options)
  }, [setOptions])

  useEffect(() => getUsers(), [getUsers]);

  useEffect(() => {
    if (response) {
      response && setUserList(response);
    }
  }, [response, getUsers, setUserList]);

  // console.log('user list', userList);

  const addUser = async (user) => {
    console.log("IS THIS USER?", user)
    try {
      const options = {
        method: 'post',
        url: API,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        data: {
          email: user.email,
          connection: 'CF-Slackbot-DB',
          password: user.password,
          user_metadata: {
            role: user.role
          }
        }
      }
      await setOptions(options)
    } catch (e) {
      console.error(e.message)
    }
  }

  const deleteUser = async (id) => {
    const options = {
      method: 'delete',
      url: `${API}/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    }
    await setOptions(options);

  };

  // for Pagination
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = usersList.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNum) => setCurrentPage(pageNum)
  // console.log('list', list);

  return (
    <>
      <h1>admin</h1>
      <AdminForm addUser={addUser} />
      <UserList
        userList={currentPosts}
        deleteUser={deleteUser}
      />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={usersList.length}
        setCurrentPage={paginate}
      />
    </>
  )
}

export default Admin;