import styles from "./OriginPlanet.module.css";

export default function OriginPlanet({ stats }) {
  const { name, isDestroyed, description, image } = stats?.originPlanet ?? {};

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <ul className={styles.list}>
        <li>
          <strong>Planet Name:</strong> {name}
        </li>
        <li>
          <strong>Destroyed:</strong> {isDestroyed ? "Yes" : "No"}
        </li>
      </ul>
      <p className={styles.description}>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
}
