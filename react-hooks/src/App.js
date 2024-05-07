import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

function App() {

  const usersData = [
    { id: 1, name: "Bruce", username: "batman" },
    { id: 2, name: "Clark", username: "superman" },
    { id: 3, name: "Tony", username: "ironman" },
    { id: 4, name: "Stephen", username: "strange" },
  ];

  const [users, setUsers]= useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])

  }
  
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false);

  const initialFormState= {id:null, name:"", username:""};
  const [currentUser, setCurrentUser]= useState(initialFormState);

  const editRow = (user)=> {
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }




  return (
    <div className="container">
      <h1>CRUD React App </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
