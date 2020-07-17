import axios from 'axios';

const SERVICE_URL = "http://localhost:6060/springboot-restapi/product"
class ProductService {

    getAllProducts(){
        return axios.get(SERVICE_URL + '/all');
    }

    deleteUser(productId) {
        return axios.delete(SERVICE_URL + '/delete/${productId}');
    }
}

export default new ProductService();