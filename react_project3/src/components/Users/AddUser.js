import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsereName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(`${enteredUserName} ${enteredAge}`);

    // two way binding
    setEnteredUsereName("");
    setEnteredAge("");
    return;
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsereName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          onChange={userAgeChangeHandler}
          value={enteredAge}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
