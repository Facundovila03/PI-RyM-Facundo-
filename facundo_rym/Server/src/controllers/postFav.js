const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  console.log(name);
  console.log(origin);
  console.log(status);
  console.log(image);
  console.log(species);
  console.log(gender);
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
    const favoritos = await Favorite.findAll();
    console.log(favoritos);
    res.status(200).json({ favorites: favoritos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
