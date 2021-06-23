import React, { useState, useCallback, useEffect, useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';
import UserModal from './user-modal.js';
import useAjax from '../../hooks/ajax.js';


const UserList = props => {

  const { setOptions, response } = useAjax();
  const context = useContext(SettingsContext);
  const API = "https://dev-d6ditd3b.us.auth0.com/api/v2/users";

  const [selectedUser, setSelectedUser] = useState();

  const handleUpdate = (user) => {
    setSelectedUser(user);
    context.changeModalDisplay(true);
  }
  const updateUser = async (user) => {
    try {
      const options = {
        method: 'patch',
        url: `${API}/${selectedUser.user_id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        data: {
          user_metadata: {
            role: user.role
          }
        }
      }
      setOptions(options)
      context.changeModalDisplay(false);
    } catch (e) {
      console.error(e.message)
    }
  } 
 
  return (
    <>
      <ul>
        {props.userList.map((user, index) => (
          <li key={index}>
            {user.email}
            <button onClick={() => props.deleteUser(user.user_id)}>X</button>
            <button onClick={() => handleUpdate(user, user.user_id)}>edit</button>
          </li>
        ))}
        <UserModal 
        updateUser={updateUser} 
        selectedUser={selectedUser}
        />
      </ul>

    </>
  )

}

export default UserList;