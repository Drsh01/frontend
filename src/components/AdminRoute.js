import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export const AdminRoute = () => {
    const { token, role } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate('/');
    }, [token]);

    if(role && role.includes('ROLE_ADMIN')) {
        return <Outlet />;
    }
    else {
        alert("Not allowed to view this page");
        navigate(-1);
    }
}