import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../Styles/Login.css'

const URL = 'http://localhost:8000';

function Login() {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [isAdmin, setIsAdmin] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!userId || !password){
            alert("Both fields are rewuired.");
            return;
        }
        setError(undefined);
        const res = await axios({
            method: 'post',
            url: URL + '/login',
            data: {
                employee_id: userId,
                password: password
            }
        });
        if (res.data === 'T') {
            setError(undefined);
            setIsAdmin(true);
        }
        else if (res.data === 'F') {
            setError(undefined);
            setIsAdmin(false);
        }
        else setError(res.data);
    }

    if (isAdmin === true) return <Navigate to='/admin/dashboard' />
    else if (isAdmin === false) return <Navigate to='/user/dashboard' />
    return (

        <div className="page-content">
            <div className="card mb-3 carousel-inner rounded-5" style={{ width: "70%", height: "60%", margin: "10% auto"}}>
                <div className="row g-0 d-flex justify-between" style={{ backgroundColor: "#004691"}}>
                    <div className="col-md-6">
                        <img
                            src="https://automationedge.com/wp-content/uploads/2023/01/RPA-Use-Cases-in-Banking.jpg"
                            alt="Trendy Pants and Shoes"
                            className="img-fluid rounded-start"
                            style={{ height: "100%" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <form className="text-center">
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Enter User Id</label>
                                    <input className="form-control" type="text" required onChange={e => setUserId(e.target.value)} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Enter Password</label>
                                    <input className="form-control" type="password" required onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className='mb-2 text-left text-danger'>{error}</div>
                                <button type="button" className="btn btn-success btn-block col-6 mb-4" onClick={handleSubmit}>Sign in</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;