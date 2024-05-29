import React, { useState } from "react";
import Modal from "../modal/Modal";
import classes from "../modal/Modal.module.css";

function AddUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("");

  //HANDLING INPUT CHANGES
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // SHOWING FAILED ATTEMPT TO ADD USER MODAL
  const failedToAddModal = () => {
    setModalContent("Failed to add new user. Try again.");
    setModalType("error");
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };
  //SHOWING NEW USER ADDED MODAL
  const newUserAdded = () => {
    setModalContent("New user added successfully!");
    setModalType("success");
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };
  //ATTEMPTING TO SUBMIT A NEW USER TO THE FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name === "" || user.username === "") {
      failedToAddModal();
    } else {
      props.addUser(user);

      setUser(initialFormState);
      newUserAdded();
    }
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
      ></input>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder="Logan78"
        onChange={handleInputChange}
      ></input>
      <button className="button">Add new user</button>
      {showModal && (
        <Modal>
          <div
            className={`${classes["modal-content"]} ${
              modalType === "success"
                ? classes.success
                : "" || modalType === "error"
                ? classes.error
                : ""
            }`}
          >
            <h2>{modalContent}</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
      )}
    </form>
  );
}

export default AddUserForm;
