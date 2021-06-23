import React from 'react';
import useAjax from '../../hooks/ajax'
import AdminForm from './admin-form';

const Admin = () => {

  const { setOptions, response, error } = useAjax();
  const qAPI = "https://dev-d6ditd3b.us.auth0.com/api/v2/users"

  const addUser = async(user) => {
    console.log("IS THIS USER?",user)
    try { 
      const options = {
        method:'post',
        url: qAPI,
        headers: { 
          'Content-Type':'application/json', 
          'Authorization':`Bearer ${process.env.REACT_APP_TOKEN}`
        },
        // dataType: 'json',
        data: {
          email: user.email,
          connection: 'CF-Slackbot-DB',
          password: user.password, 
          user_metadata: { 
            role: user.role 
          }
        }
      }
    console.log()
    console.log("OPTIONS",options)
    await setOptions(options)
    } catch(e) {
      console.error(e.message)
    }
  }

  return (
    <>
    <h1>admin</h1>
    <AdminForm addUser={addUser}/>
    </>
  )
}

export default Admin;