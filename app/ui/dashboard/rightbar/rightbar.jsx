"use client";
import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src='/astronaut.png' alt='Astronaut' fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subTitle}>Takes 4 mins to learn</span>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, sapiente animi
            perspiciatis fugit
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className={styles.subTitle}>Takes 4 mins to learn</span>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, sapiente animi
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
