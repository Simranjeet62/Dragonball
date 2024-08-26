import ListItems from "./ListItems";
import styles from "./CharactersList.module.css";
import { useState } from "react";

export default function CharactersList({
  characters,
  isLoading,
  showMore,
  setShowMore,
}) {
  return (
    <>
      {characters.length ? (
        <>
          <div className={styles.listContainer}>
            {characters.map((el) => (
              <ListItems el={el} key={el.id} />
            ))}
          </div>
          {characters.length >= 17 ? (
            <span
              onClick={() => setShowMore(!showMore)}
              className={styles.showmore}
            >
              {showMore ? "Show Less" : "...Show More"}
            </span>
          ) : (
            ""
          )}
        </>
      ) : isLoading ? (
        <div className={styles.loading}>
          <span>...Loading</span>
        </div>
      ) : (
        <div className={styles.loading}>No characters found!</div>
      )}
    </>
  );
}
