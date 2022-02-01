import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        MOVIE LIST
      </div>
      <div className={styles.item}>
          <form class="search-form">
            <input type="text" placeholder="search" className={styles.search}/>
            <FontAwesomeIcon className={styles.listItem}
              icon={faSearch}
              style={{ fontSize: 40, color: "#F2EEE2" }}
            />
          </form>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>My List</li>
        </ul>
        <FontAwesomeIcon className={styles.listItem}
            icon={faUser}
            style={{ fontSize: 50, color: "#F2EEE2" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
