import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import { Link, NavLink } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  const nextId = parseInt(detailId) + 1;
  console.log(nextId);
  const prevId = parseInt(detailId) - 1;
  console.log(prevId);

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "442f0ea28ae6.6a826b229d78ecbc74d3";

    axios(`http://localhost:3001/character/${detailId}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  const handleNext = () => {
    axios(`http://localhost:3001/character/${nextId}`).then((response) =>
      setCharacter(response.data)
    );
  };

  const handlePrev = () => {
    axios(`http://localhost:3001/character/${prevId}`).then((response) =>
      setCharacter(response.data)
    );
  };

  return (
    <div className={styles.aux}>
      {character.name ? (
        <div className={styles.Contenedor}>
          <div className={styles.ImgText}>
            <img className={styles.Imagen} src={character.image} alt="img" />
            <h2>{character.name}</h2>
            <p>{`#${character.id}`}</p>
          </div>
          <div className={styles.Info}>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "3.6rem" }}>
                <h3>Status</h3>
                <p>{character.status}</p>
              </div>
              <div>
                <h3>Species</h3>
                <p>{character.species}</p>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "3rem" }}>
                <h3>Gender</h3>
                <p>{character.gender}</p>
              </div>
              <div>
                <h3>Origin</h3>
                <p>{character.origin?.name}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link to={`/detail/${prevId}`}>
                <button className={styles.PrevBtn} onClick={handlePrev}>
                  Prev
                </button>
              </Link>
              <Link to={`/detail/${nextId}`}>
                <button className={styles.NextBtn} onClick={handleNext}>
                  Next
                </button>
              </Link>
            </div>
          </div>
          {/* <Link to={`/detail/${currentId}`}>Next</Link> */}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
