import React from "react";
import styles from "./decision.module.scss";
import Button from "@mui/material/Button";

const Decision = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who are you?🤔</h1>
      <div className={styles.row}>
        <a href="/teacher">
          <Button variant="contained" color="error" size="large">
            Teacher🧑🏻‍🏫
          </Button>
        </a>
        <a href="/student">
          <Button variant="contained" color="secondary" size="large">
            Student🧑🏻‍🎓
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Decision;
