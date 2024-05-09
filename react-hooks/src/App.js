import React, { useState } from "react";
import MainWrapper from "./components/wrappers/MainWrapper";

import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";
import ContentWrapper from "./components/wrappers/ContentWrapper";

function App() {
  const usersData = [
    { id: 1, name: "Bruce", username: "batman" },
    { id: 2, name: "Clark", username: "superman" },
    { id: 3, name: "Tony", username: "ironman" },
    { id: 4, name: "Stephen", username: "strange" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <MainWrapper
      content={
        <>
          <h1>CRUD React App </h1>

          <ContentWrapper
            content={
              <>
                <div className="flex-large">
                  {editing ? (
                    <div>
                      <h2>Edit User</h2>
                      <EditUserForm
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                      />
                    </div>
                  ) : (
                    <div>
                      <h2>Add user</h2>
                      <AddUserForm addUser={addUser} />
                    </div>
                  )}
                  <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable
                      users={users}
                      deleteUser={deleteUser}
                      editRow={editRow}
                    />
                  </div>
                </div>
              </>
            }
          ></ContentWrapper>
        </>
      }
    ></MainWrapper>
  );
}

export default App;
