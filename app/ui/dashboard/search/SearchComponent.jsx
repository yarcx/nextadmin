import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
const SearchComponent = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input placeholder={placeholder} type='text' className={styles.input} />
    </div>
  );
};

export default SearchComponent;
