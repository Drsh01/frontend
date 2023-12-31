import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8000/items';

class ItemService{

    getAllItems(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createItem(item){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, item)
    }

    getItemById(itemId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + itemId);
    }

    updateItem(itemId, item){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +itemId, item);
    }

    deleteItem(itemId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + itemId);
    }
}

export default new ItemService();