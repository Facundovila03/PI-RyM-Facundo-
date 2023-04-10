// import styled from 'styled-components'
import { useState, useEffect } from "react";
import styles from "../Card/Card.module.css";
import { connect } from "react-redux";
import { addCharacter, removeCharacter } from "../../Redux/action";
import { Link } from "react-router-dom";
// import myFavorites from '../../Redux/reducer'

function CardOtros(props) {
  const [isFav, setIsFav] = useState(false);

  // const { id, name, species, gender, image, origin, status } = props;

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      console.log(props.id);
      props.removeCharacter(props.id);
    } else {
      setIsFav(true);
      console.log(props);

      props.addCharacter({
        id: props.id,
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        origin: props.origin,
        status: props.status,
      });
    }
  };

  return (
    <>
      <div className={styles.borde}>
        <div className={styles.bigDiv}>
          <div>
            <button
              className={styles.botonCerrar}
              onClick={() => props.onClose(props.id)}
            >
              <span>X</span>
            </button>
            <br></br>
            <img className={styles.imagen} src={props.image} alt="" />
            <Link to={`/detail/${props.id}`}>
              <div className={styles.nombre}>
                <p>
                  <strong>{props.name}</strong>
                </p>
              </div>
            </Link>
          </div>
          <div className={styles.datos}>
            <p className={styles.especie}>
              <strong>
                Species<br></br>
              </strong>{" "}
              {props.species}
            </p>
            <p className={styles.genero}>
              <strong>
                Gender<br></br>
              </strong>{" "}
              {props.gender}
            </p>
          </div>
          {isFav ? (
            <button className={styles.favoritos} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.favoritos} onClick={handleFavorite}>
              🤍
            </button>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, name, species, gender, image, origin, status } = ownProps;

  return {
    removeCharacter: () => {
      console.log("removeCharacter");
      dispatch(removeCharacter(id));
    },
    addCharacter: () => {
      console.log("addCharacter");
      dispatch(
        addCharacter({ id, name, species, gender, image, origin, status })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardOtros);
