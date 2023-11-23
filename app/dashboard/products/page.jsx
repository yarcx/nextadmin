import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import SearchComponent from "@/app/ui/dashboard/search/SearchComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/products/products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchComponent placeholder={"Search for a user..."} />

        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src='/noproduct.jpg'
                  alt='No Product image'
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone
              </div>
            </td>
            <td className={styles.email}>Desc</td>
            <td>$999</td>
            <td>13.02.2022</td>
            <td>72</td>
            <td className={`${styles.buttons}`}>
              <Link href='/dashboard/products/test'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
