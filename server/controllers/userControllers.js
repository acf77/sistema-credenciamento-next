import User from "../db/models/userSchema.js";

// @description POST /api/login login to the system
// @access Public

const loginController = (req, res) => {
  const { email, password } = req.body;

  const loginToSystemDB = async () => {
    try {
      const user = await User.findOne({ email });

      password !== user.senha
        ? res
            .status(401)
            .json(
              "Senha incorreta. Tente novamente ou clique em esqueci a senha."
            )
        : res.status(200).json({
            nome: user.nome,
            email: user.email,
          });
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  loginToSystemDB();
};

// @description POST /api/register login to the system
// @access Public

const registerController = (req, res) => {
  const { name, email, phone, password } = req.body;

  const registerToSystemDB = async () => {
    try {
      const userExist = await User.findOne({ email });

      if (!userExist) {
        const user = await User.create({
          nome: name,
          email: email,
          celular: phone,
          senha: password,
        });
        res.status(200).json(user);
      } else {
        res.status(418).json("Usuário com e-mail já cadastrado.");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  registerToSystemDB();
};

export { loginController, registerController };
