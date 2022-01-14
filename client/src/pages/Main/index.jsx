import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./styles.module.scss";

const navLinks = [
  { name: "Sign up", link: "/signup" },
  { name: "Log in", link: "/login" },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar_container}>
        <Link to="/" className={styles.nav_logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.nav_links}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.link} className={styles.links}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <main className={styles.main_container}>
        <div className={styles.main}>
          <h1>Welcome to the Cooper Player</h1>
        </div>
      </main>
    </div>
  );
};

export default Main;
