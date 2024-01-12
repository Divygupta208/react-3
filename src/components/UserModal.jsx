import React from "react";
import "./UserModal.css";

const UserModal = (props) => {
  return (
    <div className="user-modal">
      <div className="modal-head">Invalid Input</div>
      <div>{props.text}</div>
      <button className="modal-button" onClick={props.onButtonClick}>
        okay
      </button>
    </div>
  );
};

export default UserModal;
