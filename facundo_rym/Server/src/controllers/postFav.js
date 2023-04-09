const { Favorite } = require("../DB_connection");

const postFav = (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  console.log(req.body);
  try {
    if (![name, origin, status, image, species, gender].every(Boolean))
      res.status(401).send("Faltan datos");
    Favorite.findOrCreate({
      where: {
        name: name,
      },
      defaults: {
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });

    console.log(Favorite.findAll());
    res.status(200).json(Favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
