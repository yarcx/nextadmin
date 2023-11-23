import React from "react";
import styles from "@/app/ui/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='User Image' fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type='text' name='title' placeholder='John Doe' />
          <label>Price</label>
          <input type='number' name='price' placeholder='John@email.com' />
          <label>Stock</label>
          <input type='number' name='stock' placeholder='23' />
          <label>Color</label>
          <input type='text' name='color' placeholder='red' />
          <label>Size</label>
          <input type='text' name='Size' placeholder='New York' />

          <label>Cats</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computer</option>
          </select>
          <label>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder='Description' />

          <button>upload</button>
        </form>
      </div>
    </div>
  );
};

export default page;
