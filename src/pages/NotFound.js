import styles from "../styles/NotFound.module.css"
import BackHome from "../components/BackHome";
import Icons from "../components/Icons";
import Ghost from "../assets/img/ghost.svg"


export default function NotFound() {
  return (
    <div className = {styles.notfound}>

      <img className={styles.image} src= {Ghost} alt='Boo!'/>
      <h1>404</h1>
      <p>You're not supposed to be here!</p>
      <a className = {styles.link} href="/"><BackHome/> Go to homepage</a>

      <div className = {styles.icons}>
        <Icons/>
      </div>
    </div>
  );
}