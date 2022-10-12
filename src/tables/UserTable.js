import React from "react";
import "./UserTable.css";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Driver Name</th>
        <th>Vehicle No.</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.checkintime}</td>
            <td>{user.checkouttime}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
