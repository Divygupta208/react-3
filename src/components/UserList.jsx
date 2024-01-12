import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-list">
      <div className="user-name">{props.username}</div>
      <div className="user-age">{props.age}</div>
    </div>
  );
};

export default UserList;
