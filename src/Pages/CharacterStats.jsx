import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Stats from "../Components/Stats";
import OriginPlanet from "../Components/OriginPlanet";
import styles from "./CharacterStats.module.css";

export default function CharacterStats() {
  const { id } = useParams();

  const [stats, setStats] = useState([]);
  const [active, setActive] = useState("");
  console.log(stats);

  useEffect(
    function () {
      async function getStats() {
        try {
          const res = await fetch(
            `https://dragonball-api.com/api/characters/${id}`
          );
          const data = await res.json();
          setStats(data);
          setActive(data.transformations[0]?.id);
        } catch (error) {
          console.error(error);
        }
      }
      getStats();
    },
    [id]
  );

  return (
    <div className={styles.container}>
      <Carousel stats={stats} active={active} setActive={setActive} />
      <Stats stats={stats} />
      <OriginPlanet stats={stats} />
    </div>
  );
}
