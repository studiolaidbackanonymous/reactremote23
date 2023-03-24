import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props.users);
  console.log("Iam in Userlist");

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
