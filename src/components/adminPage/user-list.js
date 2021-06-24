import React, { useState, useContext } from "react";
import { SettingsContext } from "../../context/settings.js";
import UserModal from "./user-modal.js";
import useAjax from "../../hooks/ajax.js";
import { ListGroup, Button } from "react-bootstrap";

const UserList = (props) => {
  const { setOptions } = useAjax();
  const context = useContext(SettingsContext);
  const API = "https://dev-d6ditd3b.us.auth0.com/api/v2/users";

  const [selectedUser, setSelectedUser] = useState();

  const handleUpdate = (user) => {
    setSelectedUser(user);
    context.changeModalDisplay(true);
  };
  const updateUser = async (user) => {
    try {
      const options = {
        method: "patch",
        url: `${API}/${selectedUser.user_id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        data: {
          user_metadata: {
            role: user.role,
          },
        },
      };
      setOptions(options);
      context.changeModalDisplay(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      <ListGroup>
        {props.userList.map((user, index) => (
          <ListGroup.Item key={index} action as="li">
            {user.email}
            <span className='delete-edit-btn'>
              <Button variant="outline-danger" className="x" onClick={() => props.deleteUser(user.user_id)}>X</Button>
              <Button variant="outline-success" onClick={() => handleUpdate(user, user.user_id)}>
                edit
              </Button>
            </span>
          </ListGroup.Item>
        ))}
        <UserModal updateUser={updateUser} selectedUser={selectedUser} />
      </ListGroup>
    </>
  );

}

export default UserList;
