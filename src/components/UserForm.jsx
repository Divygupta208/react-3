import React, { useState } from "react";
import "./UserForm.css";
import Card from "./Card";

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card>
      <form className="form-main" onSubmit={onFormSubmit}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={handleName}
            value={name}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            name="age"
            onChange={handleAge}
            value={age}
          />
        </div>
        <div className="form-button">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
