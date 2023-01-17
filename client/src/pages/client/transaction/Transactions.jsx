import React,{useState,useContext} from "react";
import Transaction from '../../../components/Client/Transaction';
import Modal from '../../../components/Modal/TransactioModal'
import { TransactionContext } from './../../../context/transaction/index';
export default function Transactions() {
    const client_id = localStorage.getItem('client_id');
    const { transactions } = useContext(TransactionContext);
    return (
        <div className="flex flex-col m-auto mt-32  h-screen">
            <div className="overflow-x-auto">
                <Modal/>
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {transactions.map((transaction)=>(
                                    <Transaction key={transaction._id} transaction={transaction}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}