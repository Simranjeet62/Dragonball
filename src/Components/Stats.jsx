import styles from "./Stats.module.css";

export default function Stats({ stats }) {
  const { description, name, gender, race, affiliation, ki, maxKi, image } =
    stats;
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>STATS</h2>
      <div className={styles.stats}>
        <ul className={styles.list}>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Race:</strong> {race}
          </li>
          <li>
            <strong>Affiliation:</strong> {affiliation}
          </li>
          <li>
            <strong>Ki:</strong> {ki}
          </li>
          <li>
            <strong>MaxKi:</strong> {maxKi}
          </li>
        </ul>
        <p className={styles.description}>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <img src={image} className={styles.image} />
    </div>
  );
}
