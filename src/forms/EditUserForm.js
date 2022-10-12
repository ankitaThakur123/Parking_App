import React, { useState, useEffect } from "react";
import "./EditUserForm.css";

const EditUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    checkintime: "",
    checkouttime: "",
  };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.editing
          ? props.updateUser(user.id, user)
          : props.addVehicle(user);
        resetAddUser();
      }}
    >
      <label>Driver Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Vehicle No.</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label for="entryDate">Check In:</label>
      <input
        name="checkintime"
        type="date"
        value={user.checkintime}
        onChange={handleInputChange}
      ></input>
      <label for="exitDate">Check Out:</label>
      <input
        name="checkouttime"
        type="date"
        value={user.checkouttime}
        onChange={handleInputChange}
      ></input>
      <button>{props.editing ? "Update user" : "Add Vehicle"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
