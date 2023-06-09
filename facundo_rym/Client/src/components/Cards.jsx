import Card from "./Card/Card";
import styles from "../App.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <>
      <div className={styles.divCartas}>
        {characters.map(
          ({ id, name, species, gender, image, status, origin }) => {
            return (
              <Card
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                onClose={onClose}
                status={status}
                origin={origin.name}
              />
            );
          }
        )}
      </div>
    </>
  );
}
