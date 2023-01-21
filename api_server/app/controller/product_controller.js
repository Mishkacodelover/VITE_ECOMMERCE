import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.uploadImage = async (req, res) => {

  try {
    if (req.files === null) return;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }
    // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // Obtenemos un array de objetos con todas las imagenes
    if(!req.query)return res.status(400).send("Sin id del producto")
    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    // Recorremos el array para procesar cada imagen
    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      // Usamos el método mv() para ubicar el archivo en nuestro servidor
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addImage({
        name: image.name,
        path: uploadPath,
        productId:req.query.product_id
      });
    });
   

    return res.send("Imagen subida!");
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getImage = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const image = await dao.getImageById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (image.length <= 0) return res.status(404).send("La imagen no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send({ path: image[0].path });
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.addProduct = async(req,res) =>{
  const { nombre, precio,categoria,referencia } = req.body;
  console.log(req.body)

  if (!nombre || !precio || !categoria || !referencia)
    return res.status(400).send("Error al recibir el body");

  try {
    const product = await dao.getProductByRef(referencia);

    if (product.length > 0) return res.status(409).send("existe el producto");

    const addProduct = await dao.insertProduct(req.body);
    if (addProduct)
      return res.send(`Producto ${nombre} con id: ${addProduct} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
