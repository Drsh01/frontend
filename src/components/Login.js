import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const URL = 'http://localhost:8000';

function Login() {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [isAdmin, setIsAdmin] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
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
  

        <div class="card mb-3" style={{ width: "70%", height: "50%", margin: "15% auto", marginBottom: "10px" }}>
            <div class="row g-0 d-flex justify-between">
                <div class="col-md-6">
                    <img
                        src="https://thumbs.dreamstime.com/b/cogs-gears-concept-coding-circuit-industrial-business-background-banner-background-vector-illustration-vector-illustration-235121277.jpg"
                        alt="Trendy Pants and Shoes"
                        class="img-fluid rounded-start"
                        style={{ height: "100%" }}
                    />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <form className="text-center">
                            <div className="form-outline mb-4">
                                <label class="form-label" >Enter User Id</label>
                                <input class="form-control" type="text" required onChange={e => setUserId(e.target.value)} />
                            </div>
                            <div className="form-outline mb-4">
                                <label class="form-label">Enter Password</label>
                                <input class="form-control" type="password" required onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className='mb-2 text-left text-danger'>{error}</div>
                            <button type="button" class="btn btn-success btn-block col-6 mb-4" onClick={handleSubmit}>Sign in</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;