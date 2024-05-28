
import React, { useState, useEffect } from "react";

function EditUserForm(props) {

  const [user, setUser] = useState(props.currentUser);

  //HANDLING INPUT CHANGES WHEN EDITING USER
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  //UPDATING USER AFTER EDITING
  const handleSubmit = (event) => {
    event.preventDefault();

    props.updateUser(user.id, user);
  };
  //HOOK TO UPDATE USER'S NEW STATE AFTER UPDATING
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        
        onChange={handleInputChange}
        value={user.name}
      ></input>
      <label htmlFor="username">Username </label>
      <input
        type="text"
        name="username"
        onChange={handleInputChange}
        value={user.username}
      ></input>
      <button className="button">Update User</button>
      <button
        className="button"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditUserForm;
