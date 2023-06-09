const { KEY, URL } = process.env;
const axios = require("axios");

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, status, name, species, origin, image, gender } =
        response.data;
      console.log({ id, status, name, species, origin, image, gender });
      res
        .status(200)
        .json({ id, status, name, species, origin, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
