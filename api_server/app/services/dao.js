import userQueries from "./mysql_queries/user_queries.js";
import productQueries from "./mysql_queries/product_queries.js"
const dao = {}

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserbyId = async (id) => await userQueries.getUserbyId(id);

dao.addUser = async (userData) => await userQueries.addUser(userData);


dao.deleteUser = async (id) => await userQueries.deleteUser(id);

dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);

dao.addImage = async (imageData) => await productQueries.addImage(imageData);

dao.getImageById = async (id) => await productQueries.getImageById(id);

dao.insertProduct = async (productData) => await productQueries.insertProduct(productData);

dao.getProductByRef = async (referencia) => await productQueries.getProductByRef(referencia);




export default dao;