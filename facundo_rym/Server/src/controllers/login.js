const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  console.log(email);
  console.log(password);
  try {
    if (email === undefined || password === undefined)
      res.status(400).send("Faltan datos");
    const auxEmail = await User.findOne({ where: { email: email } });
    console.log(auxEmail);
    if (!auxEmail) res.status(404).send("Usuario no encontrado");
    const auxPass = await User.findOne({ where: { password: password } });
    if (!auxPass) res.status(403).send("Contraseña incorrecta");
    console.log("tood bien pibe");
    res.status(200).json({ access: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
