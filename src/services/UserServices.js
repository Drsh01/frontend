import axios from "axios";

const API_URL = 'http://localhost:8000';

export async function getItems() {
    try {
        const res = await axios.get(API_URL + '/items');
        return res.data;
    } catch(err) {
        return err;
    }
}

export async function applyForLoan(id, item) {
    try {
        console.log(API_URL + '/employees/' + id + '/items')
        const res = await axios.post(API_URL + '/employees/' + id + '/items', item);
        return res.data;
    } catch(err) {
        return err;
    }
}

export async function getItemsById(id) {
    try {
        console.log(API_URL + '/employees/' + id + '/items')
        const res = await axios.get(API_URL + '/employees/' + id + '/items');
        return res.data;
    } catch(err) {
        return err;
    }
}