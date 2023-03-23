import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    return;
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div className="add-user__controls">
          <div className="add-user__control">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div className="add-user__control">
            <label htmlFor="age">Age(Years)</label>

            <input id="age" type="number" />
          </div>
          <div className="add-user__actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
