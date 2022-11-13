import { Link } from "react-router-dom";

import styles from "../styles/modules/NotFound.module.css";

import BackHome from "../components/BackHome";
import Icons from "../components/Icons";
import Ghost from "../assets/img/ghost.svg";

export default function NotFound() {
  return (

      <div className={styles.notfound}>
        <img className={styles.image} src={Ghost} alt="Boo!" />
        <h1>404</h1>
        <p>You're not supposed to be here!</p>

        <Link className={styles.link} to="/">
          <BackHome /> Go to homepage
        </Link>

        <div className={styles.icons}>
          <Icons />
        </div>
      </div>
  );
}
