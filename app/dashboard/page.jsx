import React from "react";
import Card from "../ui/dashboard/cards/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transactions/transaction";
import Chart from "../ui/dashboard/chart/chart";
import { fetchUsers } from "../lib/data";

const page = async () => {
  const users = await fetchUsers();
  console.log(users, "check this guy see");
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
