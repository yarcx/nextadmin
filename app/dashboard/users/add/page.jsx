import React from "react";
import styles from "@/app/ui/products/addProduct/addProduct.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='username' name='username' />
        <input type='email' placeholder='email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <input type='form' placeholder='Phone' name='Phone' />
        <select name='isAdmin' id='isAdmin'>
          <option value='false'>Is Admin</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value='true'>Is Active</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <textarea name='address' id='address' rows='16' placeholder='Address'></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
