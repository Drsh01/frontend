import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8000/loantypes';

class LoanCardService{

    getAllLoanCards(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createLoanCard(loanCard){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, loanCard)
    }

    getLoanCardById(loanCardId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + loanCardId);
    }

    updateLoanCard(loanCardId, loanCard){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +loanCardId, loanCard);
    }

    deleteLoanCard(loanCardId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + loanCardId);
    }
}

export default new LoanCardService();