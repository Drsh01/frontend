import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export const AdminRoute = () => {
    const { token, role } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate('/');
        if(role && !role.includes('ROLE_ADMIN')) navigate(-1);
    }, [token]);

    if(role && role.includes('ROLE_ADMIN')) {
        return <Outlet />;
    }
}