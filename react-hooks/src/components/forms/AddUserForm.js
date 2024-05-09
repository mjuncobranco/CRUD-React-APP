// import './AddUserForm.css';
import React, { useState } from "react";

function AddUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name.trim() === "" || user.username.trim() === "") return;
    console.log(event)
    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="James"
        onChange={handleInputChange}
        required
      ></input>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder="Logan78"
        onChange={handleInputChange}
        required
      ></input>
      <button>Add new user</button>
    </form>
  );
}

export default AddUserForm;
