// import './EditUserForm.css';
import React, { useState } from "react";
function EditUserForm(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      props.updateUser(user.id,user)
    }}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={handleInputChange} value={user.name}></input>
      <label htmlFor="name">Username</label>
      <input type="text" name="username" onChange={handleInputChange} value={user.username}></input>
      <button className="button muted-button" onClick={()=> props.setEditing(false)}>Update User</button>
      <button>Cancel</button>
    </form>
  );
}

export default EditUserForm;
