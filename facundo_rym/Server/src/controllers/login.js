const { User } = require("../DB_connection");

const login = (req, res) => {
  const { email, password } = req.query;
  try {
    if (email === undefined || password === undefined)
      res.status(400).send("Faltan datos");
    const auxEmail = User.findOne({ where: { email: email } });
    if (!auxEmail) res.status(404).send("Usuario no encontrao");
    const auxPass = User.findOne({ where: { password: password } });
    if (!auxPass) res.status(403).send("Contraseña incorrecta");
    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
