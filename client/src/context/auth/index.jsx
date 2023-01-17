import { createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Proxy } from '../../Config/Proxy';
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [id, setId] = useState(localStorage.getItem('client_id'));
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    //Register for client
    const register = async (data) => {
        const res = await axios.post(Proxy + 'auth/client/register', data).catch((err) => {
            const message = (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setError(message.response.data.message);
            }
        });
        if (res && res.data) {
            setSuccess(res.data.message);
            localStorage.setItem('client_id', res.data._id);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('token', res.data.token);
            setTimeout(() => {
                navigate('/Home');
            }, 1000);
        }
    };
    //Login for client
    const login = async (data) => {
        const res = await axios.post(Proxy + 'auth/client/login', data).catch((err) => {
            const message = (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setError(message.response.data.message);
            }
        });
        if (res && res.data) {
            setSuccess(res.data.message);
            localStorage.setItem('client_id', res.data._id);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('token', res.data.token);
            setTimeout(() => {
                navigate('/Home');
            }, 1000);
        }
    };

    const values = useMemo(
        () => ({
            id,
            setId,
            success,
            setSuccess,
            error,
            setError,
            register,
            login
        }),
        [id, setId, success, setSuccess, error, setError, register, login]
    );
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
