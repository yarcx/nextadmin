import React from "react";
import styles from "@/app/ui/login/login.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <h1>Login</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
