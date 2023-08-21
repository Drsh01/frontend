import axios from 'axios'

const LOAN_BASE_REST_API_URL = 'http://localhost:8000/loans';

class LoanCardService{

    getAllLoan(){
        return axios.get(LOAN_BASE_REST_API_URL)
    }

    createLoan(loan){
        return axios.post(LOAN_BASE_REST_API_URL, loan)
    }

    getLoans(loan_id){
        return axios.get(LOAN_BASE_REST_API_URL + '/' + loan_id);
    }

    updateLoans(loan_id,loan){
        console.log("here")
        // console.log(loan)
        return axios.put(LOAN_BASE_REST_API_URL + '/' +loan_id, loan);
    }

    deleteLoan(loan_id){
        return axios.delete(LOAN_BASE_REST_API_URL + '/' + loan_id);
    }
}

export default new LoanCardService();