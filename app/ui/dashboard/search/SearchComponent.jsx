"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SearchComponent = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  console.log({ searchParams, pathname });

  const params = new URLSearchParams(searchParams);

  params.set("test", "value");
  replace(`${pathname}?${params}`);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input placeholder={placeholder} type='text' className={styles.input} />
    </div>
  );
};

export default SearchComponent;
