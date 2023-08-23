import axios from "axios";

const API_URL = 'http://localhost:8000';

class AuthService {
    login(username, password) {
        // console.log(username, password)
        try {
            axios.post(API_URL + '/login', {
            "employeeId": username,
            "password": password
        })
        .then(response => {
            console.log(response.data);
            if(response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('roles', response.data.roles);
            }

            console.log("qywrgsf")
            return response;
        })
        } catch(e) {
            console.log(e);
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();