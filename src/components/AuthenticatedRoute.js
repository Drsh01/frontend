import { Outlet, useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export const AuthenticatedRoute = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate('/');
    }, [token, navigate]);

    if(token) {
        return <Outlet />;
    }
}