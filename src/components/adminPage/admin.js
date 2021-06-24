import React, { useCallback, useEffect, useState } from 'react';
import useAjax from '../../hooks/ajax'
import AdminForm from './admin-form';
import Pagination from '../pagination.js';
import UserList from './user-list.js';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'

const Admin = () => {

  const [userList, setUserList] = useState([]);
  const { setOptions, response, options } = useAjax();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const usersList = Array.from(userList);

  const API = "https://dev-d6ditd3b.us.auth0.com/api/v2/users";
  const uAPI = process.env.REACT_APP_USER_URL;

  const _getUsers = async () => {
    try {
      setOptions({
        method: 'get',
        url: uAPI,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      })
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    console.log('options', options);
    if (options.method === 'get') {
      setUserList(response)
    } else if (options.method === 'post' || options.method === 'patch') {
      setUserList([...userList, response])
    }
  }, [response])

  useEffect(_getUsers, []);

  console.log('user list', userList);

  const _addUser = async (user) => {
    try {
      setOptions({
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
      })
    } catch (e) {
      console.error(e.message);
    }
  }


  const deleteUser = async (id) => {
    const newUsers = userList.filter(user => user.user_id !== id);
    await axios({
      method: 'delete',
      url: `${API}/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    });
    setUserList(newUsers);
  };

  // for Pagination
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = usersList.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNum) => setCurrentPage(pageNum)
  // console.log('list', list);

  return (
    <Container fluid>
      <h1>Admin Portal</h1>
      <Row style= {{marginTop:'16px'}}>
        <Col >
      <AdminForm addUser={_addUser} />
        </Col>
        <Col xs={8}>
      <UserList
        userList={currentPosts}
        deleteUser={deleteUser}
        setUserList={setUserList}
      />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={usersList.length}
        setCurrentPage={paginate}
      />
        </Col>

      </Row>
    </Container>
  )
}

export default Admin;
