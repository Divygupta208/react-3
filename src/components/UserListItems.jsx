import React from "react";
import UserList from "./UserList";

const UserListItems = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserList username={user.username} age={user.age} key={user.id} />
      ))}
    </>
  );
};

export default UserListItems;
