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
        const res = await axios({
            method: 'post',
            url: URL + '/login',
            data: {
                employee_id: userId,
                password: password
            }
        });
        if (res.data === 'T') setIsAdmin(true);
        else if (res.data === 'F') setIsAdmin(false);
        else setError(res.data);
    }

    if(isAdmin === true) return <Navigate to='/admin-dashboard' />
    else if(isAdmin === false) return <Navigate to='/user-dashboard' />
    return (
        <section class="text-center text-lg-start col-8 flex" >
            <div class="card mb-3">
                <h2 class="text-center">Login</h2>
                <div class="row g-0 d-flex align-items-center">
                    <div class="col-lg-4 d-none d-lg-flex">
                        <img src="https://th.bing.com/th/id/OIP.CD2ZFlpJ2Pv_VbFyDwyDmAHaE8?pid=ImgDet&rs=1" alt="Trendy Pants and Shoes"
                            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                    </div>
                    <div class="col-lg-8">
                        <div class="card-body py-5 px-md-5">
                            <form className=" text-center">
                                <div className="form-outline mb-4">
                                    <label class="form-label" >Enter User Id</label>
                                    <input class="form-control" type="text" required onChange={e => setUserId(e.target.value)} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label class="form-label">Enter Password</label>
                                    <input class="form-control" type="password" required onChange={e => setPassword(e.target.value)} />
                                </div>

                                <button type="button" class="btn btn-success btn-block col-6 mb-4" onClick={handleSubmit}>Sign in</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;