import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserListItems from "./components/UserListItems";
import UserModal from "./components/UserModal";

const INITIAL_ARRAY = [
  {
    username: "max",
    age: "20",
    id: Math.random(),
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_ARRAY);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value === "" && e.target[1].value === "") {
      setText("Please enter non empty username and age");
      setOpen(true);
    } else if (e.target[1].value < 0) {
      setText("Please enter valid age");
      setOpen(true);
    } else {
      setUsers((prevarray) => {
        return [
          ...prevarray,
          {
            username: e.target[0].value,
            age: e.target[1].value,
            id: Math.random(),
          },
        ];
      });
    }
  };

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={open ? "main-open" : "main"}>
        <UserForm onFormSubmit={handleSubmit} />
        <UserListItems users={users} />
      </div>
      <div className={open ? "modal-open" : "modal"}>
        {open && <UserModal text={text} onButtonClick={handleOpen} />}
      </div>
    </div>
  );
}

export default App;
