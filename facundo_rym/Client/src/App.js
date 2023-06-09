import Cards from "./components/Cards.jsx";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import SearchBar from "./components/searchbar/SearchBar.jsx";
import Form from "./components/Forms/Forms";
import Favoritos from "./components/Favoritos/favoritos";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const [character, setCharacter] = useState([]);
  // const username = 'facundo@gmail.com'
  // const password = 'facu123'

  const onClose = (id) => {
    console.log(character);
    setCharacter(character.filter((char) => char.id !== id));
  };

  const onSearch = (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "442f0ea28ae6.6a826b229d78ecbc74d3";

    fetch(`http://localhost:3001/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !character.find((char) => char.id === data.id)) {
          setCharacter((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      })
      .then(console.log(character));
  };

  const { pathname } = useLocation();

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/login";
    axios
      .get(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      })
      .catch((error) => console.log(error.message));
  }

  //  function login(userData){
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true)
  //     navigate('/home')
  //   }
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className={styles.App}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <>
              <SearchBar onSearch={onSearch} />
              <div className={styles.divContenedor}>
                <Cards characters={character} onClose={onClose} />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route
          path="/favoritos"
          element={
            <div className={styles.divContenedor}>
              <Favoritos />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
