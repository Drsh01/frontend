import axios from "axios";

const API_URL = 'http://localhost:8000';

export async function getItems() {
    try {
        const res = await axios.get(API_URL + '/items',
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            });
        return res.data;
    } catch (err) {
        return err;
    }
}

export async function applyForLoan(id, item) {
    try {
        const res = await axios.post(API_URL + '/employees/' + id + '/items', item);
        return res.data;
    } catch (err) {
        return err;
    }
}

export async function getItemsById(id) {
    try {
        const res = await axios.get(API_URL + '/employees/' + id + '/items',
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            });
        return res.data;
    } catch (err) {
        return err;
    }
}