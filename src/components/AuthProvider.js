import axios from "axios";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role'));
    const [id, setId] = useState(localStorage.getItem('id'));

    useEffect(() => {
        if(localStorage.getItem('token')) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            localStorage.setItem('id', id);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('id');
        }
    }, [token, role, id]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            role,
            setRole,
            id,
            setId
        }),
        [token, role, id]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;