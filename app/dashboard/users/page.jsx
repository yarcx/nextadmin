import Image from "next/image";
import Link from "next/link";
import { fetchUsers } from "../../lib/data";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import SearchComponent from "../../ui/dashboard/search/SearchComponent";
import styles from "../../ui/usersPage/userspage.module.css";

const Page = async () => {
  const users = await fetchUsers();
  console.log(users, "check this guy see");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchComponent placeholder={"Search for a user..."} />

        <Link href='/dashboard/users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user?.img ? user.img : "/noavatar.png"}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td className={styles.email}>{user.email}</td>
              <td>{user?.createdAt?.toString().slice(4, 16) || "13.02.2022"}</td>
              <td>{user?.isAdmin ? "Admin" : "client"}</td>
              <td>{user?.isActive ? "active" : "passive"}</td>
              <td className={`${styles.buttons}`}>
                <Link href={`/dashboard/users/${user?.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Page;
