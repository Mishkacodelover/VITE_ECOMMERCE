import db from "../mysql.js";
import moment from "moment/moment.js";

const productQueries = {};

productQueries.addImage = async (imageData) => {
// Conectamos con la base de datos y añadimos el usuario.
let conn = null;
try {
conn = await db.createConnection();
// Creamos un objeto con los datos de la imagen a guardar en la base de datos.
// Usamos la libreria momentjs para registrar la fecha actual
let imageObj = {
name: imageData.name,
path: imageData.path,
reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
product_id:imageData.productId
};

return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);
} catch (e) {
throw new Error(e);
} finally {
conn && (await conn.end());
}
};

productQueries.getImageById = async (id) => {
    // Conectamos con la base de datos y buscamos si existe la imagen por el id.
    let conn = null;
    try {
    conn = await db.createConnection();
    return await db.query(
    "SELECT * FROM images WHERE id = ?", id, "select", conn);
    } catch (e) {
    throw new Error(e);
    } finally {
    conn && (await conn.end());
    }
};

productQueries.insertProduct = async (productData) =>{
    let conn = null;
    try {
      conn = await db.createConnection();
     
      let userObj = {
        nombre: productData.nombre,
        precio: productData.precio,
        rating: productData.rating,
        opiniones: productData.opiniones,
        categoria: productData.categoria,
        stock: productData.stock,
        referencia:productData.referencia,
        reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      return await db.query("INSERT INTO productos SET ?", userObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
}

productQueries.getProductByRef = async (referencia) =>{
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        "SELECT * FROM productos WHERE referencia = ?",
        referencia,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
}

export default productQueries;