// import './AddUserForm.css';
import React, { useState } from "react";

function AddUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      ></input>
      <button>Add new user</button>
    </form>
  );
}

export default AddUserForm;
