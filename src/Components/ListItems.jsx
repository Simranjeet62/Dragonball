import { useState } from "react";
// import Item from "./Item";
// import ItemOverlay from "./ItemOverlay";
import styles from "./ListItems.module.css";
import { Link } from "react-router-dom";

export default function ListItems({ el }) {
  const [stats, setStats] = useState(false);
  function handleClick() {
    setStats(!stats);
  }
  const { image, description, name, gender, race, affiliation, ki, maxKi, id } =
    el;

  return (
    <>
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
        <img className={styles.image} src={image} />
        <div
          className={`${styles.listContainer} ${
            stats ? styles.listContainerShow : ""
          }`}
        >
          <ul className={`${styles.list} ${stats ? "" : styles.hidden}`}>
            <li>Name: {name}</li>
            <li>Gender: {gender}</li>
            <li>Race: {race}</li>
            <li>Affiliation: {affiliation}</li>
            <li>Ki: {ki}</li>
            <li>MaxKi: {maxKi}</li>
            <Link to={`/Characters/${id}`}>
              <li>...more</li>
            </Link>
          </ul>
        </div>

        <div className={styles.stats} onClick={handleClick}>
          <span>Stats</span>
          {stats ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
