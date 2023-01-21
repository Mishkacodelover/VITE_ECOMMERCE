import dao from "../services/dao.js";
import { SignJWT, jwtVerify } from "jose";
import md5 from "md5";

const controller = {};

controller.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)

  if (!name || !email || !password)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getUserbyEmail(email);

    if (user.length > 0) return res.status(409).send("usuario ya registrado");

    const addUser = await dao.addUser(req.body);
    if (addUser)
      return res.send(`Usuario ${name} con id: ${addUser} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  if (!email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    let user = await dao.getUserbyEmail(email);

    if (user.length <= 0)
      return res.status(404).send("el usuario no está registrado");

    const clienPassword = md5(password);

    [user] = user;

    if (user.password != clienPassword)
      return res.status(401).send("password incorrecta");
    const jwtConstructor = new SignJWT({
      id: user.id,
      email,
      role: user.user_role,
    });
    const encoder = new TextEncoder();
    // Generamos el JWT. Lo hacemos asíncrono, ya que nos devuelve una promesa.
    // Le indicamos la cabecera, la creación, la expiración y la firma (clave secreta).
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteUser = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];
  try {
    const encoder = new TextEncoder();

    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    if (!payload.role)
      return res.status(409).send("no tiene permiso de administrador");

    const user = await dao.getUserbyId(req.params.id);

    if (user.length <= 0) return res.status(404).send("el usuario no existe");

    await dao.deleteUser(req.params.id);

    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.updateUser = async (req, res) => {
  const { authorization } = req.headers;
 
  if (!authorization) return res.sendStatus(401);
  try {
 
  if (Object.entries(req.body).length === 0) return res.status(400).send("Error al recibir el body");
 
  await dao.updateUser(req.params.id, req.body)

  return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
  console.log(e.message);
  }
  };

export default controller;
