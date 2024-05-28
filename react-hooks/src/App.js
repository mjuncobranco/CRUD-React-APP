import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MainWrapper from "./components/wrappers/MainWrapper";
import ContentWrapper from "./components/wrappers/ContentWrapper";
import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";
import Modal from "./components/modal/Modal";
import classes from "./components/modal/Modal.module.css";
import Footer from "./components/footer/Footer";

function App() {
  const usersData = [
    { id: uuidv4().substring(0, 6), name: "Bruce", username: "batman_67" },
    { id: uuidv4().substring(0, 6), name: "Clark", username: "superman88" },
    { id: uuidv4().substring(0, 6), name: "Tony", username: "ironman_34" },
    { id: uuidv4().substring(0, 6), name: "Stephen", username: "strange_99" },
  ];

  const [users, setUsers] = useState(usersData);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("");

  //ADDING A NEW USER
  const addUser = (user) => {
    user.id = uuidv4().substring(0, 6);
    setUsers([...users, user]);
  };

  //DELETING USER

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
    handleDeleteModal();
  };

  const handleDeleteModal = () => {
    setModalContent("This user has been deleted.");
    setModalType("delete");
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };

  //EDITING USER

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
    console.log(user);
    // console.log(currentUser);
  };

  //UPDATING USER
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    handleUpdateModal();
  };
  //SHOWING UPDATE MODAL
  const handleUpdateModal = () => {
    setModalContent("This user has been updated.");
    setModalType("update");
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };
  // *CONDITIONAL RENDERING: IF EDITING SHOW editUserForm,IF NOT SHOW addUserForm*

  return (
    <>
    <MainWrapper
      content={
        <>
          <h1>&#9734; SUPERHERO CRUD React App &#9734; </h1>

          <ContentWrapper
            content={
              <>
                <div className="flex-large">
                  {editing ? (
                    <div >
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
                </div>
                <div className="flex-table">
                  <h2>View users</h2>
                  <UserTable
                    users={users}
                    deleteUser={deleteUser}
                    editRow={editRow}
                  />

                  {showModal && (
                    <Modal>
                      <div
                        className={`${classes["modal-content"]} ${
                          modalType === "update"
                            ? classes.update
                            : "" || modalType === "delete"
                            ? classes.delete
                            : ""
                        }`}
                      >
                        <h2>{modalContent}</h2>
                        <button onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </Modal>
                  )}
                </div>
              </>
            }
          ></ContentWrapper>
          
        </>
      }
    ></MainWrapper>
    <Footer></Footer>
    </>
  );
}

export default App;
