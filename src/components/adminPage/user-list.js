import React, { useState, useCallback, useEffect, useContext } from 'react';
import { SettingsContext } from '../../context/settings.js'


const UserList = props => {
  console.log('userlist', props.userList);

  const context = useContext(SettingsContext);

  return (
    <>
      <ul>
        {props.userList.map((user, index) => (
          <li key={index}>
            {user.email}
            <button onClick={()=>props.deleteUser(user.user_id)}>X</button>
            <button onClick={() => context.changeModalDisplay(true)}>edit</button>
          </li>
        ))}
      </ul>

    </>
  )

}

export default UserList;