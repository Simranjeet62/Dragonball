import { Link, useNavigate } from "react-router-dom";
import styles from "./LogoSearch.module.css";

export default function LogoSearch({ setSearch, search }) {
  const navigate = useNavigate();

  function handleInput(e) {
    const value = e.target.value;
    setSearch(value);
    if (value) navigate("/");
  }

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <img className={styles.image} src="dragonBall.png" />
        </Link>
        <p className={styles.logoText}>
          All DragonBall characters in one place
        </p>
      </div>

      <form>
        <label>Search</label>
        <input
          type="text"
          placeholder="Goku"
          value={search}
          onChange={(e) => handleInput(e)}
        />
        {/* <button className={styles.btn} type="submit">
          Find
        </button> */}
      </form>

      <div></div>
    </div>
  );
}
