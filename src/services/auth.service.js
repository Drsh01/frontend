import axios from "axios";

const API_URL = 'http://localhost:8000';

export async function login(username, password) {
    try {
        let res = await axios.post(API_URL + '/login', {
            "employeeId": username,
            "password": password
        })

        return res.data;
    } catch(err) {
        return err;
    }
}