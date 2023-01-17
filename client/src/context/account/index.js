import { createContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Proxy } from '../../Config/Proxy';
import { token } from '../../Config/Token';
import { option } from '../../Config/option';
export const AccountContext = createContext(null);

const AccountContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [empty, setEmpty] = useState(null);
    const [account, setAccount] = useState({});
    const [loading, setLoading] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // get account info
    const getAccount = async (client_id) => {
        setLoading(true);
        const res = await axios
            .get(Proxy + 'account/' + client_id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .catch((err) => {
                const message = (err.res && err.res.data && err.res.data.message) || err || err.message;
                if (message) {
                    setLoading(false);
                    setEmpty(message.response.data.message);
                }
            });
        if (res && res.data) {
            setLoading(false);
            setEmpty(null);
            setAccount(res.data);
        }
    };
    //delete Account
    const deleteAccount = async (account_id) => {
        setLoading(true);
        const res = await axios.delete(Proxy + 'account/' + account_id, option).catch((err) => {
            const message = (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setLoading(false);
                setError(message.response.data.message);
            }
        });
        if (res && res.data) {
            setSuccess(res.data.message);
            setLoading(false);
            setAccount({})
            getAccount(localStorage.getItem('client_id'));
        }
    };
    const createAccount = async (client_id, solde) => {
        setLoading(true);
        const res = await axios.post(Proxy + 'account/' + client_id, solde,option).catch((err) => {
            const message = (err.res && err.res.data && err.res.data.message) || err || err.message;
            if (message) {
                setLoading(false);
                setError(message.response.data.message);
                setLoading(false);
            }
        });
        if (res && res.data) {
            setOpen(false);
            setSuccess(res.data.message);
            getAccount(localStorage.getItem('client_id'));
        }
    };
    useEffect(() => {
        getAccount(localStorage.getItem('client_id'));
    }, []);

    const values = useMemo(() => ({ open, handleClickOpen, handleClose, account, empty, deleteAccount, loading, createAccount,setAccount,deleteAccount }), [open, handleClickOpen, handleClose, account, empty, deleteAccount, loading, createAccount,setAccount,deleteAccount]);
    return <AccountContext.Provider value={values}>{children}</AccountContext.Provider>;
};
export default AccountContextProvider;
