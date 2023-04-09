const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  console.log(typeof User);
  const { email, password } = req.body;
  if (email === undefined || password === undefined)
    res.status(400).send("Faltan datos");
  try {
    await User.findOrCreate({
      where: { email: email },
      defaults: {
        email: email,
        password: password,
      },
    });
    res.status(200).send({ email, password });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
