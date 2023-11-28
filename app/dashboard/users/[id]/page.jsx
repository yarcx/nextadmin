import React from "react";
import styles from "../../../ui/usersPage/singleUsersPage/singleUserspage.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='User Image' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Username</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label>Email</label>
          <input type='text' name='email' placeholder='John@email.com' />
          <label>Password</label>
          <input type='Password' name='Password' />
          <label>Phone</label>
          <input type='text' name='Phone' placeholder='+23408993' />
          <label>Address</label>
          <textarea type='text' name='address' placeholder='New York' />

          <label>Is Admin</label>
          <select name='isAdmin' id='isAdmin'>
            <option value='true'>Yes</option>
            <option value='False'>No</option>
          </select>
          <label>Is Active</label>
          <select name='isActive' id='isActive'>
            <option value='true'>Yes</option>
            <option value='False'>No</option>
          </select>
          <button>upload</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
