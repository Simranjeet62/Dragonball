import styles from "./Carousel.module.css";

export default function Carousel({ stats, active, setActive }) {
  const curObj = stats?.transformations?.find((el) => el.id === active);

  const isTransformations = stats.transformations?.length ? true : false;

  return (
    <div className={styles.container}>
      {isTransformations && (
        <img className={styles.image} src={curObj?.image} />
      )}

      {isTransformations ? (
        <ul className={styles.dotList}>
          {stats.transformations?.map((el, index) => (
            <li
              key={index}
              onClick={() => setActive(el.id)}
              className={`${el.id === active ? styles.dotListActive : ""}`}
            ></li>
          ))}
        </ul>
      ) : (
        <stats className={styles.noTransformations}>No Transformations</stats>
      )}
      {isTransformations && (
        <>
          <span className={styles.ki}>
            {curObj?.name} <br /> Ki: {curObj?.ki}
          </span>
          <span className={styles.transformations}>Transformations</span>
        </>
      )}
    </div>
  );
}
