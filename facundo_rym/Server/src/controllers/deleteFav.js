const { Favorite } = require("../DB_connection");

const deleteFav = (req, res) => {
  const { id } = req.params;
  Favorite.destroy({
    where: { id: id },
  });
};

module.exports = deleteFav;
