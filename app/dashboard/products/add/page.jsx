import React from "react";
import styles from "@/app/ui/products/addProduct/addProduct.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='title' name='title' required />
        <select name='cat' id='cat'>
          <option value='general'>Chose a category</option>
          <option value='kitchen'>Kitchen</option>
          <option value='phone'>Phone</option>
          <option value='Computer'>Computer</option>
        </select>

        <input type='number' placeholder='price' name='price' />
        <input type='number' placeholder='stock' name='stock' />
        <input type='text' placeholder='color' name='color' />
        <input type='text' placeholder='size' name='size' />
        <textarea name='desc' id='des' rows='16' placeholder='Description'></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
