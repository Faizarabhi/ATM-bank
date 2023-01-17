import { createContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Proxy } from '../../Config/Proxy';
import { token } from '../../Config/Token';
export const TransactionContext = createContext(null);

const TransactionContextProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    // get all transactions
    const getTransactions = async (client_id) => {
        const res = await axios
            .get(Proxy + 'transaction/' + client_id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        if (res && res.data) {
            setTransactions(res.data);
        }
    };
    const makeTransaction = async (fromAccount, data) => {
        const res = await axios
            .post(Proxy + 'transaction/' + fromAccount, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        if (res && res.data) {
            getTransactions(localStorage.getItem('client_id'));
        }
    };
    //delete Transactions for one client
    const deleteTransactions = async (client_id) => {
        const res = await axios
            .delete(Proxy + 'transaction/' + client_id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        if (res && res.data) {
            getTransactions(localStorage.getItem('client_id'));
            setTransactions([]);
        }
    };
    useEffect(() => {
        getTransactions(localStorage.getItem('client_id'));
    }, [localStorage.getItem('client_id')]);

    const values = useMemo(
        () => ({ transactions, makeTransaction, deleteTransactions,setTransactions }),
        [transactions, makeTransaction, deleteTransactions,setTransactions]
    );
    return <TransactionContext.Provider value={values}>{children}</TransactionContext.Provider>;
};
export default TransactionContextProvider;
