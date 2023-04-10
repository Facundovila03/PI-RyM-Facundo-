import { connect } from "react-redux";
// import styles from '../Card/Card.module.css'
import Card from "../Card/Card";
import styles from "../../App.module.css";
import estilos from "./favoritos.module.css";

const Favoritos = ({ myFavorites }) => {
  console.log(myFavorites);
  return (
    <>
      <div className={estilos.contenedorBusqueda}>
        <form className={estilos.contenedorBusqueda}>
          <label>
            <select className={estilos.sort} name="sort">
              <option value="default">Ordenar</option>
              <option value="ascendente">Ascendente</option>
              <option value="descendente">Descendente</option>
            </select>
          </label>
          <select className={estilos.filter} name="filter">
            <option value="default">Filtrar</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="genderless">Genderless</option>
          </select>
        </form>
      </div>
      <br></br>
      <div className={styles.divCartas}>
        {myFavorites.map(({ id, name, species, gender, image, onClose }) => {
          return (
            <Card
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favoritos);
